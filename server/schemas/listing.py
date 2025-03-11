from typing import Optional
from pydantic import BaseModel, Field, confloat

class ListingBase(BaseModel):
    name: str
    description: Optional[str] = None
    category: str
    address: str
    latitude: confloat(ge=-90, le=90)
    longitude: confloat(ge=-180, le=180)

class ListingCreate(ListingBase):
    pass

class ListingUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    category: Optional[str] = None
    address: Optional[str] = None
    latitude: Optional[confloat(ge=-90, le=90)] = None
    longitude: Optional[confloat(ge=-180, le=180)] = None

class ListingInDBBase(ListingBase):
    id: int
    created_by: int
    
    class Config:
        orm_mode = True

class Listing(ListingInDBBase):
    pass

