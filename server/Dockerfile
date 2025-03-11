# Use Python base image
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Copy dependency files
COPY requirements.txt .

# Installez les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Copiez le reste du code
COPY . .

# Run database migrations
RUN py -m app.db.migrate

# Command to launch the application
CMD ["uvicorn", "app.main:app", "--host", "${APP_HOST}", "--port", "${APP_PORT}"]