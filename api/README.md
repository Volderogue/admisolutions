# API Admin Solution

API backend pour le site Admin Solution.

## Fonctionnalités

- Envoi de formulaires de contact par email
- Validation des données
- Email de confirmation automatique
- Health check endpoint

## Installation

```bash
cd api
npm install
```

## Configuration

Créer un fichier `.env` basé sur `.env.example` :

```bash
cp .env.example .env
```

Remplir les variables d'environnement :

- `PORT` : Port d'écoute de l'API (par défaut : 3001)
- `SMTP_HOST` : Serveur SMTP
- `SMTP_PORT` : Port SMTP
- `SMTP_USER` : Utilisateur SMTP
- `SMTP_PASS` : Mot de passe SMTP (mot de passe d'application pour Gmail)
- `CONTACT_EMAIL` : Email de destination des formulaires

### Configuration Gmail

Pour utiliser Gmail comme serveur SMTP :

1. Activer la validation en 2 étapes sur votre compte Google
2. Créer un mot de passe d'application : https://myaccount.google.com/apppasswords
3. Utiliser ce mot de passe dans `SMTP_PASS`

## Développement

```bash
npm run dev
```

## Production

```bash
npm start
```

## Endpoints

- `GET /health` : Health check
- `POST /api/contact` : Envoi de formulaire de contact

### Exemple de requête

```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jean Dupont",
    "email": "jean.dupont@exemple.fr",
    "phone": "0612345678",
    "company": "Ma Société",
    "service": "gestion-administrative",
    "message": "Je souhaite en savoir plus sur vos services"
  }'
```


