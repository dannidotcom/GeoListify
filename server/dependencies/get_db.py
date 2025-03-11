from typing import Generator

from fastapi import Depends
from sqlalchemy.orm import Session

from app.db.session import get_db

def get_db_session() -> Generator[Session, None, None]:
    return get_db()

