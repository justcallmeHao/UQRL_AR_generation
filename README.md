# 🧠 UQRL AR Generation

A practical web-based Augmented Reality (AR) demo created by **UQ Reality Lab (UQRL)** for workshops and educational showcases. This project detects Hiro Markers and renders 3D models in AR using browser-native technologies — without the need for Unity or native apps.

---

## 🚀 Live Demo

👉 [Launch AR Scene](https://justcallmehao.github.io/UQRL_AR_generation/ar/ar-scene.html)

---

## 📦 Project Structure

```
.
├── public/                 # Static public assets
│   └── ar-scene.html       # Main AR HTML entry point
│
├── src/                    # Source code (React/Vite frontend)
│   ├── assets/             # Images and icons (e.g. Hiro Marker)
│   ├── components/         # UI components
│   ├── main.tsx            # App entry point
│   └── ...
│
├── static/models/          # 3D models used in AR
│   └── model.glb
│
├── dist/                   # Production-ready output (auto-generated)
│   └── ar/ar-scene.html
│
├── vite.config.ts          # Vite configuration
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript config
```

---

## 🧰 Tech Stack

- **Frontend**: Vite + TypeScript + React
- **AR Engine**: [AR.js](https://ar-js-org.github.io/AR.js-Docs/) (Marker-based WebAR)
- **3D Model Format**: `.glb` (GLTF Binary)
- **Rendering**: A-Frame (built into AR.js)
- **Deployment**: GitHub Pages via `gh-pages` branch

---

## 🔍 Features

- 📷 WebAR Hiro Marker detection
- 🧱 Loads `.glb` 3D models on marker detection
- 🪟 Responsive overlay with debug logs and interaction buttons
- ⚙️ Uses AR.js + A-Frame for low-cost AR rendering
- 🌐 Fully browser-compatible (no app install)

---

## 🛠️ Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview locally

```bash
npm run preview
```

---

## 🌍 Deployment (GitHub Pages)

### 1. Set Vite base in `vite.config.ts`:

```ts
export default defineConfig({
  base: '/UQRL_AR_generation/',
});
```

### 2. Add to `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 3. Deploy:

```bash
npm run deploy
```

### 4. GitHub Pages Settings:

- **Branch**: `gh-pages`
- **Folder**: `/ (root)`

Your deployed URL will be:
```
https://justcallmehao.github.io/UQRL_AR_generation/ar/ar-scene.html
```

---

## 🖼️ Screenshot

> _Insert a screenshot or GIF of the AR model on Hiro marker detection here._

---

## 📚 References

- [AR.js Docs](https://ar-js-org.github.io/AR.js-Docs/)
- [A-Frame Docs](https://aframe.io/docs/)
- [GLTF format](https://cadexchanger.com/glb/)

---

## 👥 Credits

This project is developed by **UQ Reality Lab** (UQRL) for introductory workshops in AR and WebXR development.

Special thanks to:
- Hao Vo (@justcallmehao)

---

## 📄 License

MIT License. See `LICENSE` file for more details.
