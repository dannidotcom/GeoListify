from typing import List, Optional

from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.repositories.listing_repository import listing_repository
from app.schemas.listing import Listing, ListingCreate, ListingUpdate

class ListingService:
    def get_listing(self, db: Session, listing_id: int) -> Listing:
        listing = listing_repository.get(db, id=listing_id)
        if not listing:
            raise HTTPException(status_code=404, detail="Listing not found")
        return listing
    
    def get_listings(self, db: Session, skip: int = 0, limit: int = 100) -> List[Listing]:
        return listing_repository.get_multi(db, skip=skip, limit=limit)
    
    def get_user_listings(self, db: Session, user_id: int, skip: int = 0, limit: int = 100) -> List[Listing]:
        return listing_repository.get_multi_by_owner(db, owner_id=user_id, skip=skip, limit=limit)
    
    def create_listing(self, db: Session, listing_in: ListingCreate, user_id: int) -> Listing:
        listing_data = listing_in.dict()
        listing = listing_repository.create(db, obj_in=ListingCreate(**listing_data))
        # Set the created_by field
        listing.created_by = user_id
        db.add(listing)
        db.commit()
        db.refresh(listing)
        return listing
    
    def update_listing(
        self, db: Session, listing_id: int, listing_in: ListingUpdate, current_user_id: int, is_admin: bool
    ) -> Listing:
        listing = listing_repository.get(db, id=listing_id)
        if not listing:
            raise HTTPException(status_code=404, detail="Listing not found")
        
        # Check if user is owner or admin
        if listing.created_by != current_user_id and not is_admin:
            raise HTTPException(status_code=403, detail="Not enough permissions")
        
        return listing_repository.update(db, db_obj=listing, obj_in=listing_in)
    
    def delete_listing(
        self, db: Session, listing_id: int, current_user_id: int, is_admin: bool
    ) -> Listing:
        listing = listing_repository.get(db, id=listing_id)
        if not listing:
            raise HTTPException(status_code=404, detail="Listing not found")
        
        # Check if user is owner or admin
        if listing.created_by != current_user_id and not is_admin:
            raise HTTPException(status_code=403, detail="Not enough permissions")
        
        return listing_repository.remove(db, id=listing_id)
    
    def search_listings_by_name(self, db: Session, name: str, skip: int = 0, limit: int = 100) -> List[Listing]:
        return listing_repository.search_by_name(db, name=name, skip=skip, limit=limit)
    
    def get_listings_by_category(self, db: Session, category: str, skip: int = 0, limit: int = 100) -> List[Listing]:
        return listing_repository.get_by_category(db, category=category, skip=skip, limit=limit)

listing_service = ListingService()

