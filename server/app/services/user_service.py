from typing import List, Optional

from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.repositories.user_repository import user_repository
from app.schemas.user import User, UserCreate, UserUpdate

class UserService:
    def get_user(self, db: Session, user_id: int) -> User:
        user = user_repository.get(db, id=user_id)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        return user
    
    def get_user_by_username(self, db: Session, username: str) -> Optional[User]:
        return user_repository.get_by_username(db, username=username)
    
    def get_users(self, db: Session, skip: int = 0, limit: int = 100) -> List[User]:
        return user_repository.get_multi(db, skip=skip, limit=limit)
    
    def create_user(self, db: Session, user_in: UserCreate) -> User:
        user = user_repository.get_by_username(db, username=user_in.username)
        if user:
            raise HTTPException(
                status_code=400,
                detail="The user with this username already exists"
            )
        return user_repository.create(db, obj_in=user_in)
    
    def update_user(self, db: Session, user_id: int, user_in: UserUpdate) -> User:
        user = user_repository.get(db, id=user_id)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        return user_repository.update(db, db_obj=user, obj_in=user_in)
    
    def delete_user(self, db: Session, user_id: int) -> User:
        user = user_repository.get(db, id=user_id)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        return user_repository.remove(db, id=user_id)
    
    def authenticate_user(self, db: Session, username: str, password: str) -> User:
        user = user_repository.authenticate(db, username=username, password=password)
        if not user:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect username or password",
                headers={"WWW-Authenticate": "Bearer"},
            )
        return user
    
    def is_admin(self, user: User) -> bool:
        return user_repository.is_admin(user)

user_service = UserService()

