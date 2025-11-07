# 🚀 Guide de Démarrage Rapide

## Développement Local (5 minutes)

### 1. Installation des dépendances

```bash
# Frontend
npm install

# API
cd api && npm install && cd ..
```

### 2. Configuration de l'API

```bash
# Copier le fichier d'exemple
cp api/.env.example api/.env

# Éditer avec vos paramètres
nano api/.env
```

Configuration Gmail recommandée :
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASS=mot-de-passe-application-gmail
CONTACT_EMAIL=contact@adminsolution.fr
```

### 3. Démarrage

**Terminal 1 - Frontend** :
```bash
npm run dev
```

**Terminal 2 - API** :
```bash
cd api && npm run dev
```

✅ Site disponible sur : http://localhost:5173

---

## Déploiement Docker (Production)

### 1. Prérequis
```bash
# Créer le réseau proxy (une seule fois)
docker network create proxy
```

### 2. Configuration
```bash
# Configurer l'API
cp api/.env.example api/.env
nano api/.env
```

### 3. Déploiement
```bash
# Build et démarrage
docker-compose up -d

# Vérifier les logs
docker-compose logs -f
```

✅ Site en production : https://adminsolution.digiconseil.fr

---

## Commandes Utiles

### Développement
```bash
npm run dev          # Démarrer le frontend
npm run build        # Build de production
cd api && npm start  # Démarrer l'API
```

### Docker
```bash
docker-compose up -d          # Démarrer
docker-compose down           # Arrêter
docker-compose logs -f        # Voir les logs
docker-compose restart        # Redémarrer
```

### Health Check
```bash
# Local
curl http://localhost:3001/health

# Production
curl https://api.adminsolution.digiconseil.fr/health
```

---

## Dépannage Express

### Site ne démarre pas
1. Vérifier Node.js : `node --version` (doit être 18+)
2. Réinstaller : `rm -rf node_modules && npm install`
3. Vérifier les ports : `lsof -i :5173` et `lsof -i :3001`

### Emails ne s'envoient pas
1. Vérifier `api/.env` existe et est configuré
2. Tester avec Gmail et un mot de passe d'application
3. Vérifier les logs : `cd api && npm run dev`

### Docker ne démarre pas
1. Vérifier réseau : `docker network ls | grep proxy`
2. Vérifier les logs : `docker-compose logs`
3. Rebuild : `docker-compose build --no-cache`

---

**Pour plus d'informations, consultez le README.md complet**


