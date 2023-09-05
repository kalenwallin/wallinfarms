import base64
import json
import os
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
        contents = await file.read()
        try:
            corn_ticket = process_image_as_corn_ticket(client, contents)
            tickets.append(corn_ticket)
        except Exception as e:
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
