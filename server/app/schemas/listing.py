from typing import Optional
from pydantic import BaseModel, Field

class ListingBase(BaseModel):
    name: str
    description: Optional[str] = None
    category: str
    address: str
    latitude: float = Field(..., ge=-90, le=90)
    longitude: float = Field(..., ge=-180, le=180)

class ListingCreate(ListingBase):
    pass

class ListingUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    category: Optional[str] = None
    address: Optional[str] = None
    latitude: Optional[float] = Field(None, ge=-90, le=90)
    longitude: Optional[float] = Field(None, ge=-180, le=180)

class ListingInDBBase(ListingBase):
    id: int
    created_by: int
    
    class Config:
        orm_mode = True

class Listing(ListingInDBBase):
    pass

