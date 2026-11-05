from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="IntelliTrack API", version="0.1.0")

class HealthResponse(BaseModel):
    status: str
    service: str

@app.get("/api/health", response_model=HealthResponse)
def health():
    return {"status": "ok", "service": "IntelliTrack API"}
