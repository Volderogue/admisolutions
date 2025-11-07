# Admin Solution - Site Web Moderne

Site web moderne et responsive pour Admin Solution, spécialisé dans l'externalisation administrative aux entreprises.

## 🚀 Technologies

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Backend**: Node.js + Express
- **Déploiement**: Docker + Docker Compose
- **Proxy**: Nginx

## ✨ Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Interface utilisateur intuitive avec animations
- ✅ Formulaire de contact avec envoi d'emails
- ✅ Section tarifs avec 3 formules
- ✅ Page À propos avec nos valeurs
- ✅ Page Services détaillée
- ✅ Page Clients avec témoignages
- ✅ Navigation fluide en SPA (Single Page Application)
- ✅ SEO optimisé
- ✅ Accessibilité WCAG

## 📋 Prérequis

- Node.js 18+ et npm
- Docker et Docker Compose (pour la production)
- Un serveur SMTP configuré (Gmail recommandé)

## 🛠️ Installation

### Développement local

1. **Cloner le projet**
```bash
cd /home/digiconseil/projects/admin-solutions/nouveau-site
```

2. **Installer les dépendances frontend**
```bash
npm install
```

3. **Installer les dépendances API**
```bash
cd api
npm install
cd ..
```

4. **Configurer l'API**

Créer le fichier `api/.env` :
```bash
cp api/.env.example api/.env
```

Éditer `api/.env` et configurer :
```env
PORT=3001
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre-mot-de-passe-application
CONTACT_EMAIL=contact@adminsolution.fr
```

**Note Gmail** : Pour utiliser Gmail, activez la validation en 2 étapes et créez un mot de passe d'application : https://myaccount.google.com/apppasswords

5. **Lancer le développement**

Dans un terminal (frontend) :
```bash
npm run dev
```

Dans un autre terminal (API) :
```bash
cd api
npm run dev
```

Le site sera accessible sur http://localhost:5173

## 🐳 Déploiement Docker

### Configuration

1. **Créer le réseau proxy (si pas déjà fait)**
```bash
docker network create proxy
```

2. **Configurer l'API**
```bash
cp api/.env.example api/.env
# Éditer api/.env avec vos paramètres
```

### Build et lancement

```bash
# Build des images
docker-compose build

# Lancement des services
docker-compose up -d

# Vérifier les logs
docker-compose logs -f

# Arrêter les services
docker-compose down
```

### URLs de production

- **Site web** : https://adminsolution.digiconseil.fr
- **API** : https://api.adminsolution.digiconseil.fr
- **Health check API** : https://api.adminsolution.digiconseil.fr/health

## 📁 Structure du projet

```
nouveau-site/
├── api/                          # Backend API
│   ├── server.js                # Serveur Express
│   ├── package.json             # Dépendances API
│   ├── .env.example             # Configuration exemple
│   └── entrypoint.sh            # Script de démarrage Docker
├── src/                         # Code source frontend
│   ├── components/              # Composants React
│   │   └── Layout/              # Header & Footer
│   ├── pages/                   # Pages de l'application
│   │   ├── HomePage.tsx         # Page d'accueil
│   │   ├── ServicesPage.tsx     # Page services
│   │   ├── AboutPage.tsx        # Page à propos
│   │   ├── ContactPage.tsx      # Page contact
│   │   └── ClientsPage.tsx      # Page clients
│   ├── App.tsx                  # Composant principal
│   ├── main.tsx                 # Point d'entrée
│   └── index.css                # Styles globaux
├── public/                      # Assets statiques
│   └── favicon.svg              # Favicon du site
├── uploads/                     # Dossier pour uploads (monté en volume)
├── docker-compose.yml           # Configuration Docker
├── Dockerfile.web               # Dockerfile frontend
├── Dockerfile.api               # Dockerfile API
├── nginx.conf                   # Configuration Nginx
├── package.json                 # Dépendances frontend
├── vite.config.ts              # Configuration Vite
├── tailwind.config.js          # Configuration Tailwind
└── README.md                    # Ce fichier
```

## 🎨 Personnalisation

### Couleurs de la marque

Les couleurs sont définies dans `tailwind.config.js` :

```javascript
colors: {
  'admin-primary': '#0a5d40',    // Vert foncé
  'admin-secondary': '#69ddb3',   // Vert clair
  'admin-accent': '#5AC828',      // Vert vif
  'admin-dark': '#2b2e35',        // Gris foncé
  'admin-light': '#e7e8e8',       // Gris clair
}
```

### Polices

Police principale : Poppins (via Google Fonts)

Pour changer : modifier dans `index.html` et `tailwind.config.js`

## 📧 Configuration des emails

L'API utilise Nodemailer pour envoyer les emails. Configuration requise dans `api/.env` :

### Gmail (recommandé)
1. Activer la validation en 2 étapes
2. Générer un mot de passe d'application
3. Utiliser ces paramètres :
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASS=mot-de-passe-application
```

### Autre serveur SMTP
Adaptez les paramètres selon votre fournisseur.

## 🔧 Scripts disponibles

### Frontend
```bash
npm run dev          # Lancer en mode développement
npm run build        # Build de production
npm run preview      # Prévisualiser le build
npm run lint         # Linter le code
npm run typecheck    # Vérifier les types TypeScript
```

### API
```bash
cd api
npm run dev          # Lancer avec hot-reload
npm start            # Lancer en production
```

### Docker
```bash
docker-compose up -d              # Démarrer les services
docker-compose down               # Arrêter les services
docker-compose logs -f            # Voir les logs
docker-compose restart            # Redémarrer les services
docker-compose build --no-cache   # Rebuild complet
```

## 🌐 Reverse Proxy

Ce projet utilise un reverse proxy externe (nginx-proxy avec Let's Encrypt).

Variables d'environnement requises :
- `VIRTUAL_HOST` : Nom de domaine du site
- `LETSENCRYPT_HOST` : Nom de domaine pour le certificat SSL
- `LETSENCRYPT_EMAIL` : Email pour Let's Encrypt

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints :
- **Mobile** : < 640px
- **Tablet** : 640px - 1024px
- **Desktop** : > 1024px

## ♿ Accessibilité

- Navigation au clavier complète
- Lien "Aller au contenu principal"
- Attributs ARIA appropriés
- Contrastes de couleurs conformes WCAG 2.1
- Alt text sur toutes les images

## 🔒 Sécurité

- Headers de sécurité configurés dans Nginx
- Validation des données côté serveur
- Protection CORS configurée
- Variables d'environnement pour les secrets
- Rate limiting recommandé (à configurer au niveau du proxy)

## 📊 Performance

- Build optimisé avec Vite
- Code splitting automatique
- Images optimisées
- Compression gzip
- CSS minimal avec Tailwind (purge activé)

## 🐛 Débogage

### Logs Docker
```bash
# Tous les logs
docker-compose logs -f

# Logs d'un service spécifique
docker-compose logs -f web
docker-compose logs -f api
```

### Vérifier la santé de l'API
```bash
curl http://localhost:3001/health
# ou en production
curl https://api.adminsolution.digiconseil.fr/health
```

### Problèmes courants

**Erreur de connexion SMTP**
- Vérifier les credentials dans `api/.env`
- Vérifier que le mot de passe d'application est correct
- Tester avec un autre port (465 pour SSL)

**Site inaccessible**
- Vérifier que le réseau `proxy` existe
- Vérifier les logs du reverse proxy
- Vérifier la configuration DNS

**Erreurs de build**
- Supprimer `node_modules` et réinstaller
- Vider le cache : `npm cache clean --force`

## 📝 Migration depuis l'ancien site

Le contenu a été migré depuis `www.adminsolution.fr` :
- ✅ Toutes les pages principales
- ✅ Structure de navigation identique
- ✅ Informations de contact
- ✅ Services détaillés
- ✅ Section tarifs
- ✅ UX modernisée et optimisée

## 🚀 Futures améliorations

- [ ] Ajouter un blog/actualités
- [ ] Intégrer Google Analytics
- [ ] Ajouter un chatbot
- [ ] Système de prise de rendez-vous en ligne
- [ ] Espace client sécurisé
- [ ] Multi-langue (FR/EN)
- [ ] Tests automatisés (Jest, Cypress)

## 👥 Support

Pour toute question ou assistance :
- Email : contact@adminsolution.fr
- Téléphone : +33 7 56 85 49 89

## 📄 Licence

© 2024 Admin Solution. Tous droits réservés.

---

**Développé avec ❤️ pour Admin Solution**

Site de préprod : https://adminsolution.digiconseil.fr


