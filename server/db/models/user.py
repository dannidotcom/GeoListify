from sqlalchemy import Column, Integer, String, Enum
from sqlalchemy.orm import relationship

from server.db.base import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    role = Column(String, default="user")
    
    # Relationship with listings
    listings = relationship("Listing", back_populates="creator")

