from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from server.dependencies.auth import get_current_active_user, get_current_admin_user
from server.dependencies.get_db import get_db_session
from server.models.user import User
from server.schemas.user import User as UserSchema, UserUpdate
from server.services.user_service import user_service

router = APIRouter()

@router.get("/users", response_model=List[UserSchema])
def read_users(
    db: Session = Depends(get_db_session),
    skip: int = 0,
    limit: int = 100,
    current_user: User = Depends(get_current_admin_user),
) -> Any:
    """
    Retrieve users. Admin only.
    """
    users = user_service.get_users(db, skip=skip, limit=limit)
    return users

@router.get("/users/me", response_model=UserSchema)
def read_user_me(
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Get current user.
    """
    return current_user

@router.put("/users/me", response_model=UserSchema)
def update_user_me(
    *,
    db: Session = Depends(get_db_session),
    user_in: UserUpdate,
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Update own user.
    """
    user = user_service.update_user(db, user_id=current_user.id, user_in=user_in)
    return user

@router.get("/users/{user_id}", response_model=UserSchema)
def read_user_by_id(
    user_id: int,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db_session),
) -> Any:
    """
    Get a specific user by id.
    """
    user = user_service.get_user(db, user_id=user_id)
    if user == current_user:
        return user
    if not user_service.is_admin(current_user):
        raise HTTPException(
            status_code=403, detail="The user doesn't have enough privileges"
        )
    return user

@router.put("/users/{user_id}", response_model=UserSchema)
def update_user(
    *,
    db: Session = Depends(get_db_session),
    user_id: int,
    user_in: UserUpdate,
    current_user: User = Depends(get_current_admin_user),
) -> Any:
    """
    Update a user. Admin only.
    """
    user = user_service.get_user(db, user_id=user_id)
    if not user:
        raise HTTPException(
            status_code=404,
            detail="The user with this id does not exist in the system",
        )
    user = user_service.update_user(db, user_id=user_id, user_in=user_in)
    return user

@router.delete("/users/{user_id}", response_model=UserSchema)
def delete_user(
    *,
    db: Session = Depends(get_db_session),
    user_id: int,
    current_user: User = Depends(get_current_admin_user),
) -> Any:
    """
    Delete a user. Admin only.
    """
    user = user_service.get_user(db, user_id=user_id)
    if not user:
        raise HTTPException(
            status_code=404,
            detail="The user with this id does not exist in the system",
        )
    user = user_service.delete_user(db, user_id=user_id)
    return user

