# Aurangabad Tourism

A simple full-stack project (React + Vite frontend, Express backend) for the Aurangabad tourism site.

This repository contains two main folders:
- `frontend/` — React app built with Vite and Tailwind CSS
- `backend/` — Express API server

This README explains how to run the project locally (dev and build), and how to run it with Docker / Docker Compose.

---

## Prerequisites
- Node.js 18+ and npm
- (Optional) Docker & Docker Compose for containerized run

---

## Local development

### Frontend (dev)
1. Open a terminal and run:

```bash
cd frontend
npm install
npm run dev
```

2. Visit the Vite dev URL printed in the console (usually http://localhost:5173).

Notes:
- `frontend/src/main.jsx` imports `./index.css` (which includes Tailwind directives). The Vite dev server should be run from the `frontend/` folder so Vite finds `package.json` and `vite.config.js`.
- If you want the frontend dev server to proxy API requests to the backend, add a `server.proxy` entry in `frontend/vite.config.js`.

### Backend (dev)
1. Open another terminal and run:

```bash
cd backend
npm install
npm run dev
```

2. The backend runs at http://localhost:5000 by default.

If `backend/server.js` is missing, create it (a minimal example is in the repository or in the project instructions).

---

## Build & Production (Docker)
A `Dockerfile` exists for both frontend and backend. An `nginx.conf` is provided so the frontend is served by nginx and proxies `/api/` to the backend.

Place the `docker-compose.yml` file at the repo root (it orchestrates both services). Then run:

```bash
# from repository root
docker compose up -d --build
# view logs
docker compose logs -f
# stop and remove
docker compose down
```

The stack maps ports:
- Frontend: http://localhost/ (nginx on port 80)
- Backend: http://localhost:5000/

If you prefer the single-container approach for frontend, the Dockerfiles are multi-stage (build with Node, serve with nginx).

---

## Files added / updated
The following helper and config files were added to make the project build and run cleanly:

- frontend/vite.config.js — Vite configuration for the frontend
- frontend/postcss.config.cjs — PostCSS config (Tailwind + autoprefixer)
- frontend/tailwind.config.js — Tailwind configuration (content paths set)
- frontend/nginx.conf — nginx config to serve built frontend and proxy `/api/` to backend
- frontend/Dockerfile — Multi-stage Dockerfile (build with Node, serve with nginx)
- backend/Dockerfile — Dockerfile for the backend
- frontend/src/index.css — includes Tailwind directives at the top

(If any of these files are missing or you prefer different names/locations, modify the Dockerfile and docker-compose accordingly.)

---

## Troubleshooting
- Vite can't find config / vite.config.js: make sure you run `npm run dev` from `frontend/` (the folder that contains `package.json`). Alternatively place a repo-root `vite.config.js` with `root: 'frontend'`.
- `@tailwind` errors / IDE red squiggles: ensure `postcss.config.cjs` and `tailwind.config.cjs` (or `.js`) exist in `frontend/`, run `npm install` in `frontend/`, and install the "Tailwind CSS IntelliSense" extension in your editor.
- Backend `npm run dev` fails: ensure `backend/server.js` exists and listens on `0.0.0.0`. Start it manually with `node server.js` to see errors.
- Docker build errors: run the frontend build locally (`cd frontend && npm run build`) to see build errors, fix dependencies, then rebuild the image.

---

If you want, I can also commit `docker-compose.yml` to the repository root and add a minimal `backend/server.js` if it's missing — confirm and I will add them.

Happy hacking! If anything breaks, paste the error output here and I’ll help debug it.
