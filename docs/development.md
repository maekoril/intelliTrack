# Development setup

## Start the API (PowerShell)

```powershell
cd C:\project\intelliTrack\backend
.\.venv\Scripts\python.exe -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

API documentation: http://127.0.0.1:8000/docs

## Start the frontend in another terminal

```powershell
cd C:\project\intelliTrack\frontend
npm run dev
```

Open the localhost address printed by Vite. `/api` requests proxy to the backend.

## Verify

```powershell
cd C:\project\intelliTrack\frontend
npm run lint
npm run build
cd ..\backend
.\.venv\Scripts\python.exe -m pytest
```

## Database (next setup step)

PostgreSQL is configured in compose.yaml but requires Docker to be installed. Copy the root .env.example to .env, choose a local password, then run `docker compose up -d db`. Copy backend/.env.example to backend/.env and use the same password. The current health endpoint does not use a database; models and migrations are not implemented yet.

## Facial recognition and branch service

OpenCV/DeepFace and the Python/SQLite branch service are planned, not installed. Validate model and runtime compatibility before adding recognition dependencies. Do not store real employee biometric data in Git.
