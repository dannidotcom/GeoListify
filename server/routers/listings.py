from typing import Any, List, Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from server.dependencies.auth import get_current_active_user
from server.dependencies.get_db import get_db_session
from server.models.user import User
from server.schemas.listing import Listing, ListingCreate, ListingUpdate
from server.services.listing_service import listing_service
from server.services.user_service import user_service

router = APIRouter()

@router.get("/listings", response_model=List[Listing])
def read_listings(
    db: Session = Depends(get_db_session),
    skip: int = 0,
    limit: int = 100,
    name: Optional[str] = None,
    category: Optional[str] = None,
) -> Any:
    """
    Retrieve listings with optional filtering.
    """
    if name:
        listings = listing_service.search_listings_by_name(db, name=name, skip=skip, limit=limit)
    elif category:
        listings = listing_service.get_listings_by_category(db, category=category, skip=skip, limit=limit)
    else:
        listings = listing_service.get_listings(db, skip=skip, limit=limit)
    return listings

@router.post("/listings", response_model=Listing)
def create_listing(
    *,
    db: Session = Depends(get_db_session),
    listing_in: ListingCreate,
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Create new listing.
    """
    listing = listing_service.create_listing(db, listing_in=listing_in, user_id=current_user.id)
    return listing

@router.get("/listings/me", response_model=List[Listing])
def read_user_listings(
    db: Session = Depends(get_db_session),
    skip: int = 0,
    limit: int = 100,
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Retrieve listings for current user.
    """
    listings = listing_service.get_user_listings(db, user_id=current_user.id, skip=skip, limit=limit)
    return listings

@router.get("/listings/{listing_id}", response_model=Listing)
def read_listing(
    *,
    db: Session = Depends(get_db_session),
    listing_id: int,
) -> Any:
    """
    Get listing by ID.
    """
    listing = listing_service.get_listing(db, listing_id=listing_id)
    return listing

@router.put("/listings/{listing_id}", response_model=Listing)
def update_listing(
    *,
    db: Session = Depends(get_db_session),
    listing_id: int,
    listing_in: ListingUpdate,
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Update a listing.
    """
    is_admin = user_service.is_admin(current_user)
    
    listing = listing_service.update_listing(
        db=db,
        listing_id=listing_id,
        listing_in=listing_in,
        current_user_id=current_user.id,
        is_admin=is_admin
    )
    return listing

@router.delete("/listings/{listing_id}", response_model=Listing)
def delete_listing(
    *,
    db: Session = Depends(get_db_session),
    listing_id: int,
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Delete a listing.
    """
    is_admin = user_service.is_admin(current_user)
    listing = listing_service.delete_listing(
        db=db,
        listing_id=listing_id,
        current_user_id=current_user.id,
        is_admin=is_admin
    )
    return listing

