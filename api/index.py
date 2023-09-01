import os
import sys

from api.classes import process_image_as_corn_ticket
from api.excel_utils import write_sheet
from fastapi import FastAPI
from google.cloud import vision
from openpyxl import Workbook

app = FastAPI()


@app.get("/api/python")
def hello_world():
    return {"message": "Hello World"}


@app.get("/api/python/autocornticket")
def autocornticket():
    # Instantiate a Vision client
    client = vision.ImageAnnotatorClient()

    image_dir = sys.argv[1] if len(sys.argv) > 1 else "documents/fvc/52021"
    location = sys.argv[2] if len(sys.argv) > 2 else ""
    field = sys.argv[3] if len(sys.argv) > 3 else ""

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
