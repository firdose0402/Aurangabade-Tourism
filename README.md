# Aurangabad Tourism Portal

A modern, full‑stack tourism web application showcasing the beauty and heritage of Aurangabad. Built with a Vite + React frontend and an Express + Node backend, this project is ready for local development and production deployment (Docker / docker‑compose). It is styled with Tailwind CSS and designed for a smooth developer experience and simple deployment.

---

## ✨ Highlights

- Fast, HMR‑enabled development with Vite (React).
- Tailwind CSS for utility‑first styling.
- Express API backend with ready‑to‑extend routes.
- Docker multi‑stage build for a production frontend served by nginx and a production-ready backend container.
- Easy orchestration with docker‑compose.

---

## Features

### Frontend (React + Vite)
- Fast dev server and instant updates via Vite.
- SPA routing (React Router).
- Tailwind CSS utilities, components and base layers configured.
- Built for production using Vite's build pipeline.
- Ready for proxying API calls to backend in production (nginx) or development (Vite proxy).

### Backend (Express)
- Minimal, extendable Express server with JSON parsing and CORS enabled.
- Example health and sample API routes.
- Uses environment variables (dotenv) for configuration.
- Prepared for containerized deployment.

---

## Tech Stack
- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB (connect via MONGO_URI)
- Production serving: nginx (frontend static files)
- Containerization: Docker + docker‑compose

---

## Prerequisites

- Node.js 18+ and npm
- Git
- (Optional / recommended) Docker & Docker Compose v2 for containerized deployment
- MongoDB instance (URI) — local or cloud (MongoDB Atlas)

---

## Environment Variables

Create a `.env` file in `backend/` with at least:

```
# backend/.env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/aurangabad?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
```

If you use Vite to call the backend during development and want environment variables in the client, use Vite's `VITE_` prefix (e.g., `VITE_API_BASE_URL`) and place them in `frontend/.env`.

---

## Local Development — Step by Step

1. Clone the repo
```bash
git clone https://github.com/firdose0402/Aurangabade-Tourism.git
cd Aurangabade-Tourism
```

2. Start the backend (API)
```bash
cd backend
# install dependencies
npm install
# start in dev mode (nodemon)
npm run dev
# OR run production mode
# npm start
```
Open http://localhost:5000/ to verify the backend (example health route).

3. Start the frontend (Vite)
```bash
cd ../frontend
npm install
npm run dev
```
Open the Vite URL printed in the console (typically http://localhost:5173).

Notes:
- `frontend/src/main.jsx` imports `./index.css`. That file lives at `frontend/src/index.css` and must include these top lines for Tailwind to work:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- If Vite cannot find the config, run `npm run dev` from the `frontend/` folder (where `package.json` and `vite.config.js` live). Alternatively use a repo-root `vite.config.js` with `root: 'frontend'`.

---

## Build for Production (locally)

1. Build the frontend
```bash
cd frontend
npm install
npm run build
# `dist/` directory will be produced
```

2. Start the backend in production
```bash
cd ../backend
npm install --production
npm start
```

---

## Docker Deployment (docker-compose)

This project includes multi‑stage Dockerfiles for the frontend (build with Node, serve with nginx) and the backend. An example `docker-compose.yml` that coordinates them is shown below — place it at the repository root and run the commands to build and run both services.

Example `docker-compose.yml` (repo root)
```yaml
version: "3.8"
services:
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: aurangabad-backend
    restart: unless-stopped
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      # add MONGO_URI and other secrets via an env_file or docker secrets

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: aurangabad-frontend
    restart: unless-stopped
    ports:
      - "80:80"
    depends_on:
      - backend
```

Build and run:
```bash
# from repo root
docker compose up -d --build

# follow logs
docker compose logs -f

# stop and remove
docker compose down
```

After starting:
- Frontend served at: http://localhost/ (nginx on port 80)
- Backend at: http://localhost:5000/

Important:
- Ensure `backend/server.js` listens on `0.0.0.0` (not `127.0.0.1`) so the container accepts external connections.
- The frontend nginx config proxies `/api/` to `http://backend:5000/`. If your frontend calls a different base path, edit `frontend/nginx.conf` or update the client API base URL.

---

## Troubleshooting & Tips

- Vite cannot find config:
  - Run `npm run dev` inside `frontend/`.
  - Or create a repo-root vite.config with `root: 'frontend'`.

- `@tailwind` directives show red squiggles in IDE:
  - Confirm `frontend/postcss.config.cjs` and `frontend/tailwind.config.cjs` (or .js) exist.
  - Run `npm install` inside `frontend/`.
  - Install the “Tailwind CSS IntelliSense” VS Code extension and restart the editor.

- Frontend build fails:
  - Run `cd frontend && npm run build` locally and read the error logs.
  - Ensure all devDependencies are present (tailwindcss, postcss, autoprefixer, etc.) if the build step expects them.

- Backend errors:
  - Start backend directly (`node server.js`) to see logs.
  - Confirm `MONGO_URI` is correct and reachable.

- Docker build issues:
  - Build images locally with `docker compose build` and inspect the logs for the failing stage.
  - Use `.dockerignore` to avoid copying `node_modules` or large files into image context.

---

## Project Structure (recommended)
```
/ (repo root)
├─ frontend/
│  ├─ public/ or index.html
│  ├─ src/
│  ├─ vite.config.js
│  ├─ postcss.config.cjs
│  ��─ tailwind.config.cjs
│  ├─ nginx.conf
│  └─ Dockerfile
├─ backend/
│  ├─ routes/
│  ├─ models/
│  ├─ server.js
│  ├─ package.json
│  └─ Dockerfile
├─ docker-compose.yml
└─ README.md
```

---

## Contributing

Contributions are welcome! Suggested workflow:
1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Implement and test locally
4. Open a pull request with a clear description and screenshots (if UI changes)

---

## License

Add your chosen license here (MIT, Apache‑2.0, etc.). If you want, I can add a LICENSE file for you.

---

## Contact

If you need help with configuration, deployment, or CI integration, open an issue in the repo or reach out via the repository contact.

---

Enjoy building the Aurangabad Tourism Portal — if you want, I can:
- Commit this README into the repo,
- Generate a `.env.example`,
- Add a `.dockerignore` for frontend/backend,
- Create CI workflow for building the Docker images on push.

Tell me which of those you want next and I’ll proceed.
