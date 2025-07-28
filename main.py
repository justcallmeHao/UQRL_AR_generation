import cv2
import numpy as np
from pathlib import Path
from fastapi import FastAPI, File, UploadFile, Form
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
import os

app = FastAPI()

# Serve static files
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def home():
    return FileResponse("static/index.html")


@app.post("/generate-nft-marker/")
async def generate_nft_marker(image: UploadFile = File(...), marker_name: str = Form(...)):
    # Create folder for the marker
    marker_dir = Path(f"static/descriptors/{marker_name}")
    marker_dir.mkdir(parents=True, exist_ok=True)

    # Save uploaded image
    image_path = marker_dir / "input.jpg"
    with open(image_path, "wb") as f:
        f.write(await image.read())

    # Load and convert image to grayscale
    img = cv2.imread(str(image_path))
    if img is None:
        return JSONResponse(status_code=400, content={"error": "Invalid image file"})

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Resize to max 500px width to reduce noise
    scale = 500.0 / max(gray.shape)
    gray = cv2.resize(gray, None, fx=scale, fy=scale)

    # Detect features (ORB is good & fast)
    orb = cv2.ORB_create(nfeatures=1000)
    keypoints, descriptors = orb.detectAndCompute(gray, None)

    if descriptors is None:
        return JSONResponse(status_code=400, content={"error": "No features found in image"})

    # Save descriptors into 3 files: fset, fset3, iset
    fset = marker_dir / f"{marker_name}.fset"
    fset3 = marker_dir / f"{marker_name}.fset3"
    iset = marker_dir / f"{marker_name}.iset"

    descriptors.astype("float32").tofile(str(fset))
    descriptors.astype("float32").tofile(str(fset3))
    np.array(gray.shape, dtype=np.int32).tofile(str(iset))

    return {
        "message": "NFT marker generated",
        "marker_name": marker_name,
        "files": [
            f"/static/descriptors/{marker_name}/{marker_name}.fset",
            f"/static/descriptors/{marker_name}/{marker_name}.fset3",
            f"/static/descriptors/{marker_name}/{marker_name}.iset"
        ]
    }
