from fastapi import FastAPI
from app.routes import auth, listings, users

app = FastAPI()

app.include_router(auth.router)
app.include_router(listings.router)
app.include_router(users.router)

@app.get("/")
async def root():
    return {"message": "FastAPI Hello World"}