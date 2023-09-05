import base64
import json
import logging
import os
import tempfile
from typing import List

from dotenv import load_dotenv
from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.responses import FileResponse
from google.cloud import vision
from google.oauth2 import service_account
from openpyxl import Workbook
from pydantic import BaseModel

from api.classes import process_image_as_corn_ticket
from api.excel_utils import write_sheet

app = FastAPI()

# Load environment variables
load_dotenv(dotenv_path=".env.local")
google_service_key = os.getenv("GOOGLE_SERVICE_KEY")
credential_str = base64.b64decode(google_service_key)
credential_dict = json.loads(credential_str)
credentials = service_account.Credentials.from_service_account_info(credential_dict)

# Create a custom logger
logger = logging.getLogger(__name__)

# Set the level of this logger. This could also be set in a configuration file or environment variable.
logger.setLevel(logging.DEBUG)

# Create handlers
c_handler = logging.StreamHandler()
f_handler = logging.FileHandler("file.log")

# Create formatters and add it to handlers
c_format = logging.Formatter("%(name)s - %(levelname)s - %(message)s")
f_format = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
c_handler.setFormatter(c_format)
f_handler.setFormatter(f_format)

# Add handlers to the logger
logger.addHandler(c_handler)
logger.addHandler(f_handler)


class ImageUpload(BaseModel):
    location: str
    field: str
    files: List[UploadFile] = File(...)


@app.post("/api/python/autocornticket")
async def autocornticket(upload: ImageUpload):
    client = vision.ImageAnnotatorClient(credentials=credentials)

    tickets = []

    # Iterate through uploaded images
    for file in upload.files:
        logger.info(f"Processing file: {file.filename}")
        print(f"Processing file: {file.filename}")
        contents = await file.read()
        image_path = os.path.join(tempfile.gettempdir(), file.filename)
        try:
            with open(image_path, "wb") as f:
                f.write(contents)
        except Exception as e:
            logger.exception("Error saving uploaded file.", exc_info=True)
            raise HTTPException(
                status_code=500, detail="Error saving uploaded file."
            ) from e

        try:
            corn_ticket = process_image_as_corn_ticket(client, image_path)
            tickets.append(corn_ticket)
        except Exception as e:
            logger.exception("Error processing image.", exc_info=True)
            print("Error processing image.")
            raise HTTPException(
                status_code=500, detail="Error processing image."
            ) from e

    # Process the text as required and write to Excel
    # Create a workbook and select the active worksheet
    wb = Workbook()
    ws = wb.active

    print("Tickets: ", tickets)

    write_sheet(ws, tickets, upload.location, upload.field)

    # Save the workbook
    output_path = "public/output/output.xlsx"
    try:
        wb.save(output_path)
    except Exception as e:
        raise HTTPException(
            status_code=500, detail="Error generating Excel file."
        ) from e

    # Return the path to the generated Excel file
    return {"fileUrl": output_path}


@app.get("/download/{path:path}")
async def download(path: str):
    try:
        return FileResponse(path)
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error serving file.") from e
