import base64
import json
import os

from dotenv import load_dotenv
from fastapi import FastAPI, Request
from google.cloud import vision
from openpyxl import Workbook

from api.classes import process_image_as_corn_ticket
from api.excel_utils import write_sheet

app = FastAPI()
load_dotenv(dotenv_path='.env.local')


@app.get("/api/python")
def hello_world():
    return {"message": "Hello World"}


@app.get("/api/python/autocornticket")
def autocornticket(request: Request):
    credential_str = os.getenv('GOOGLE_SERVICE_KEY')
    credential = json.loads(base64.b64decode(credential_str))

    client = vision.ImageAnnotatorClient(
        credentials={
            'client_email': credential['client_email'],
            'private_key': credential['private_key']
        }
    )

    image_dir = request.query_params.get('image_dir', 'public/documents/fvc/52021')
    location = request.query_params.get('location', '')
    field = request.query_params.get('field', '')

    tickets = []

    # Iterate through image_dir's images
    for file_name in os.listdir(image_dir):
        if file_name.endswith(
            (".jpeg", ".jpg", ".png", ".webp", ".gif", ".bmp", ".ico" ".pdf", ".tiff")
        ):
            image_path = os.path.join(image_dir, file_name)
            corn_ticket = process_image_as_corn_ticket(client, image_path)
            tickets.append(corn_ticket)

    # Process the text as required and write to Excel
    # Create a workbook and select the active worksheet
    wb = Workbook()
    ws = wb.active

    write_sheet(ws, tickets, location, field)

    # Save the workbook
    wb.save("output/output.xlsx")
    return {"message": "Hello World"}
