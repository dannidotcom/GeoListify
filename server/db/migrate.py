from server.db.base import Base
from server.db.session import engine

def migrate():
    Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    migrate()