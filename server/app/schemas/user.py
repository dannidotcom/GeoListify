from typing import Optional, List
from pydantic import BaseModel, EmailStr, Field

class UserBase(BaseModel):
    username: str

class UserCreate(UserBase):
    password: str = Field(..., min_length=8)

class UserUpdate(BaseModel):
    username: Optional[str] = None
    password: Optional[str] = None

class UserInDBBase(UserBase):
    id: int
    role: str
    
    class Config:
        orm_mode = True

class User(UserInDBBase):
    pass

class UserInDB(UserInDBBase):
    password: str

