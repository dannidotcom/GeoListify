from typing import List

from sqlalchemy.orm import Session

from server.db.models.listing import Listing
from server.repositories.base_repository import BaseRepository
from server.schemas.listing import ListingCreate, ListingUpdate

class ListingRepository(BaseRepository[Listing, ListingCreate, ListingUpdate]):
    def get_multi_by_owner(
        self, db: Session, *, owner_id: int, skip: int = 0, limit: int = 100
    ) -> List[Listing]:
        return (
            db.query(self.model)
            .filter(Listing.created_by == owner_id)
            .offset(skip)
            .limit(limit)
            .all()
        )
    
    def get_by_category(
        self, db: Session, *, category: str, skip: int = 0, limit: int = 100
    ) -> List[Listing]:
        return (
            db.query(self.model)
            .filter(Listing.category == category)
            .offset(skip)
            .limit(limit)
            .all()
        )
    
    def search_by_name(
        self, db: Session, *, name: str, skip: int = 0, limit: int = 100
    ) -> List[Listing]:
        return (
            db.query(self.model)
            .filter(Listing.name.ilike(f"%{name}%"))
            .offset(skip)
            .limit(limit)
            .all()
        )

listing_repository = ListingRepository(Listing)

