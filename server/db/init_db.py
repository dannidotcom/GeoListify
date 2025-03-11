from sqlalchemy.orm import Session

from server.core.security import get_password_hash
from server.db.base import Base
from server.models.user import User
from server.db.session import engine

def init_db(db: Session) -> None:
    # Create tables
    Base.metadata.create_all(bind=engine)
    
    # Check if admin user exists
    admin_user = db.query(User).filter(User.username == "admin").first()
    if not admin_user:
        # Create admin user
        admin_user = User(
            username="admin",
            password=get_password_hash("adminpassword"),  # Change this in production
            role="admin"
        )
        db.add(admin_user)
        db.commit()
        db.refresh(admin_user)

if __name__ == "__main__":
    from app.db.session import SessionLocal
    db = SessionLocal()
    init_db(db)

