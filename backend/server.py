from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    nom: str
    email: str
    telephone: str
    sujet: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactMessageCreate(BaseModel):
    nom: str
    email: str
    telephone: str
    sujet: str
    message: str

class DevisRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    services: List[str]
    frequence: str
    adresse: str
    code_postal: str
    ville: str
    nom: str
    email: str
    telephone: str
    commentaire: Optional[str] = ""
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class DevisRequestCreate(BaseModel):
    services: List[str]
    frequence: str
    adresse: str
    code_postal: str
    ville: str
    nom: str
    email: str
    telephone: str
    commentaire: Optional[str] = ""

# Site Content Model for editing
class SiteContent(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    page: str
    section: str
    content: dict
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class SiteContentUpdate(BaseModel):
    page: str
    section: str
    content: dict

# Routes
@api_router.get("/")
async def root():
    return {"message": "Net Dans L'Heure API"}

# Contact routes
@api_router.post("/contact", response_model=ContactMessage)
async def create_contact(input: ContactMessageCreate):
    contact_dict = input.model_dump()
    contact_obj = ContactMessage(**contact_dict)
    doc = contact_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contacts.insert_one(doc)
    return contact_obj

@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contacts():
    contacts = await db.contacts.find({}, {"_id": 0}).to_list(1000)
    for contact in contacts:
        if isinstance(contact['created_at'], str):
            contact['created_at'] = datetime.fromisoformat(contact['created_at'])
    return contacts

# Devis routes
@api_router.post("/devis", response_model=DevisRequest)
async def create_devis(input: DevisRequestCreate):
    devis_dict = input.model_dump()
    devis_obj = DevisRequest(**devis_dict)
    doc = devis_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.devis.insert_one(doc)
    return devis_obj

@api_router.get("/devis", response_model=List[DevisRequest])
async def get_devis():
    devis = await db.devis.find({}, {"_id": 0}).to_list(1000)
    for d in devis:
        if isinstance(d['created_at'], str):
            d['created_at'] = datetime.fromisoformat(d['created_at'])
    return devis

# Site content routes (for editing)
@api_router.get("/content/{page}")
async def get_page_content(page: str):
    content = await db.site_content.find({"page": page}, {"_id": 0}).to_list(100)
    return content

@api_router.post("/content")
async def save_content(input: SiteContentUpdate):
    content_dict = input.model_dump()
    content_dict['updated_at'] = datetime.now(timezone.utc).isoformat()
    content_dict['id'] = str(uuid.uuid4())
    
    # Upsert - update if exists, insert if not
    await db.site_content.update_one(
        {"page": input.page, "section": input.section},
        {"$set": content_dict},
        upsert=True
    )
    return {"status": "success", "message": "Content saved"}

@api_router.get("/content")
async def get_all_content():
    content = await db.site_content.find({}, {"_id": 0}).to_list(1000)
    return content

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
