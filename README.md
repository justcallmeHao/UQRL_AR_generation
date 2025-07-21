
# 🟣 AR Shape-E Prototype

This project is a **simple Augmented Reality (AR) prototype** built with:
- **Python Backend** using OpenAI's **Shap-E** to generate 3D `.glb` assets from text prompts.
- **JavaScript Frontend** using **A-Frame** and **AR.js** to render these 3D assets in-browser with AR capabilities and device camera access.
- Fully browser-based with no mobile apps required.

---

## 📁 Project Structure

```
ar-shape-ar-project/
│
├── backend/                        
│   ├── main.py                   # FastAPI server & API endpoints
│   ├── generator.py              # Shap-E model handler
│   ├── utils.py                  # Helper functions (UUIDs, cleanup)
│   ├── static/                   # Served GLB files
│   └── requirements.txt          # Python dependencies
│
└── frontend/                     
    ├── index.html                # AR.js & A-Frame camera setup
    ├── script.js                 # Fetch .glb, inject into AR scene, recording logic
    └── assets/
        ├── static/               # Marker patterns (hiro.patt), icons
        └── styles.css            # General UI styles
```

---

## ✅ Features

- 🎨 **Text-to-3D asset generation** with Shap-E
- 📱 **Camera-based AR in browser** (WebXR via A-Frame & AR.js)
- 🎥 **Session recording** via MediaRecorder API (optional)
- ⚡ **FastAPI backend API** with live `.glb` serving
- 🧹 **Static asset cleanup** for managing generated files

---

## 🚀 Quick Start

### Prerequisites:
- Python 3.9+
- Node.js (optional if you want to serve frontend via local server)
- CUDA-enabled GPU for Shap-E (highly recommended)

---

### 1. Backend Setup (Python)
```bash
cd backend/
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
```

##### Run Backend Server:
```bash
uvicorn main:app --reload
```

##### Default Backend Endpoints:
| Endpoint | Method | Description |
|-----------|--------|-------------|
| `/generate/` | POST | Generates `.glb` asset from prompt |
| `/static/{file}` | GET | Serves generated 3D assets |

---

### 2. Frontend Setup (JavaScript + Browser)
```bash
cd frontend/
```
- You can either:
    - Open `index.html` directly (for quick test).
    - Serve via local HTTP server:
      ```bash
      python -m http.server 8080
      ```
      Visit: http://localhost:8080/

##### Basic Flow:
- Enter prompt → Send to backend → Get generated `.glb` → Render in AR camera scene.
- Optionally record session and download the recording.

---

## 📸 How Camera & AR Work
- Camera access via `<a-scene embedded arjs>`.
- **Marker-based tracking** using `hiro.patt` or your custom marker.
- Generated `.glb` dynamically loaded into `<a-entity gltf-model>`.

---

## 🟣 Backend API Example

```bash
curl -X POST "http://127.0.0.1:8000/generate/?prompt=a red futuristic chair"
```

**Returns JSON:**
```json
{
    "file": "/static/generated_model_123abc.glb"
}
```

---

## 📌 TODO / Roadmap
- [ ] Markerless AR (optional extension)
- [ ] Backend async cleanup of old `.glb` files
- [ ] Progress bar on frontend while generating assets
- [ ] Dockerfile for deployment

---

## 🤝 Acknowledgements
- [Shap-E](https://github.com/openai/shap-e) by OpenAI
- [A-Frame](https://aframe.io/)
- [AR.js](https://github.com/AR-js-org/AR.js)

---

## 💡 Author Notes
This prototype is a minimal, expandable project template for AR + generative AI workflows using **only Python and JS**, suitable for quick prototyping, demos, and academic projects.
