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

from api.classes import process_image_as_scale_ticket
from api.excel_utils import write_sheet

app = FastAPI()

# Load environment variables
load_dotenv(dotenv_path=".env.local")
GOOGLE_SERVICE_KEY = os.getenv("GOOGLE_SERVICE_KEY")
CREDENTIAL_STR = base64.b64decode(GOOGLE_SERVICE_KEY)
CREDENTIAL_DICT = json.loads(CREDENTIAL_STR)
CREDENTIALS = service_account.Credentials.from_service_account_info(CREDENTIAL_DICT)


class TicketUpload(BaseModel):
    location: str
    field: str
    files: List[UploadFile] = File(...)


@app.post("/api/python/scalesnap")
async def scalesnap(upload: TicketUpload):
    client = vision.ImageAnnotatorClient(credentials=CREDENTIALS)

    tickets = []

    # Iterate through uploaded images
    for file in upload.files:
        contents = await file.read()
        try:
            scale_ticket = process_image_as_scale_ticket(client, image_binary=contents)
            tickets.append(scale_ticket)
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
