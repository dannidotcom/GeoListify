# Utilisez une image de base Python
FROM python:3.9-slim

# Définissez le répertoire de travail
WORKDIR /app

# Copiez les fichiers de dépendances
COPY requirements.txt .

# Installez les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Copiez le reste du code
COPY . .

# Commande pour lancer l'application
CMD ["uvicorn", "server.main:app", "--host", "0.0.0.0", "--port", "80"]