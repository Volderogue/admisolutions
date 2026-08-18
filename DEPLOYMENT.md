# 📦 Guide de Déploiement

## Déploiement sur serveur avec reverse proxy existant

Ce guide suppose que vous avez déjà un reverse proxy configuré (nginx-proxy + letsencrypt-companion).

### 1. Préparation du serveur

```bash
# Se connecter au serveur
ssh user@votre-serveur

# Aller dans le dossier du projet
cd /home/digiconseil/projects/admin-solutions/nouveau-site
```

### 2. Configuration de l'environnement

```bash
# Configurer l'API
cp api/.env.example api/.env
nano api/.env
```

Remplir avec vos paramètres SMTP :
```env
PORT=3001
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contact@adminsolution.fr
SMTP_PASS=votre-mot-de-passe-application
CONTACT_EMAIL=contact@adminsolution.fr
```

### 3. Vérifier le réseau Docker

```bash
# Le réseau 'proxy' doit exister
docker network ls | grep proxy

# Si absent, le créer
docker network create proxy
```

### 4. Build et démarrage

```bash
# Build des images
docker-compose build

# Démarrer les services
docker-compose up -d

# Vérifier que tout fonctionne
docker-compose ps
docker-compose logs -f
```

### 5. Vérification

```bash
# Vérifier le site web (prod + préprod)
curl -I https://adminsolution.fr
curl -I https://adminsolution.digiconseil.fr

# Vérifier l'API (prod + préprod)
curl https://api.adminsolution.fr/health
curl https://api.adminsolution.digiconseil.fr/health
```

### 6. Configurer le DNS

Ajouter les enregistrements DNS :
```
A    adminsolution.fr              →  [IP_SERVEUR]
A    api.adminsolution.fr          →  [IP_SERVEUR]
A    adminsolution.digiconseil.fr    →  [IP_SERVEUR]
A    api.adminsolution.digiconseil.fr →  [IP_SERVEUR]
```

Attendre la propagation DNS (quelques minutes à quelques heures).

---

## Mise à jour du site

### Mise à jour du code

```bash
# Arrêter les services
docker-compose down

# Pull des dernières modifications (si git)
git pull

# Rebuild avec les nouvelles modifications
docker-compose build --no-cache

# Redémarrer
docker-compose up -d
```

### Mise à jour de la configuration

```bash
# Éditer la configuration
nano api/.env

# Redémarrer uniquement l'API
docker-compose restart api
```

### Mise à jour des dépendances

```bash
# Si vous avez mis à jour package.json
docker-compose build --no-cache
docker-compose up -d
```

---

## Backup et restauration

### Backup

```bash
# Sauvegarder le dossier uploads
tar -czf backup-uploads-$(date +%Y%m%d).tar.gz uploads/

# Sauvegarder la configuration
cp api/.env backup-env-$(date +%Y%m%d)
```

### Restauration

```bash
# Restaurer les uploads
tar -xzf backup-uploads-YYYYMMDD.tar.gz

# Restaurer la configuration
cp backup-env-YYYYMMDD api/.env
docker-compose restart
```

---

## Monitoring et logs

### Voir les logs en temps réel

```bash
# Tous les services
docker-compose logs -f

# Un service spécifique
docker-compose logs -f web
docker-compose logs -f api

# Dernières 100 lignes
docker-compose logs --tail=100
```

### Vérifier l'utilisation des ressources

```bash
# Utilisation CPU/RAM
docker stats

# Espace disque
docker system df
```

### Nettoyer les anciennes images

```bash
# Supprimer les images non utilisées
docker system prune -a

# Supprimer les volumes non utilisés
docker volume prune
```

---

## Sécurité

### Mettre à jour les secrets

```bash
# Générer un nouveau mot de passe SMTP si nécessaire
# Mettre à jour api/.env
nano api/.env

# Redémarrer l'API
docker-compose restart api
```

### Vérifier les certificats SSL

Les certificats sont gérés automatiquement par letsencrypt-companion.

Pour forcer le renouvellement :
```bash
# Redémarrer le container letsencrypt
docker restart letsencrypt-companion
```

---

## Dépannage Production

### Le site ne répond pas

1. Vérifier que les containers tournent :
```bash
docker-compose ps
```

2. Vérifier les logs :
```bash
docker-compose logs web
```

3. Redémarrer si nécessaire :
```bash
docker-compose restart web
```

### L'API ne répond pas

1. Vérifier la santé :
```bash
curl http://localhost:3001/health
```

2. Vérifier les logs :
```bash
docker-compose logs api
```

3. Vérifier la configuration :
```bash
cat api/.env
```

### Problèmes de certificats SSL

1. Vérifier les variables d'environnement dans docker-compose.yml
2. Vérifier les logs du reverse proxy
3. Attendre quelques minutes après le premier démarrage

### Emails ne partent pas

1. Vérifier la configuration SMTP :
```bash
cat api/.env
```

2. Tester l'envoi manuellement :
```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "phone": "0612345678",
    "message": "Test"
  }'
```

3. Vérifier les logs de l'API :
```bash
docker-compose logs api | grep -i error
```

---

## Checklist de déploiement

- [ ] DNS configuré et propagé
- [ ] Réseau Docker 'proxy' créé
- [ ] Fichier `api/.env` configuré avec les bonnes valeurs
- [ ] Build Docker réussi
- [ ] Containers démarrés (docker-compose ps)
- [ ] Site accessible via HTTPS
- [ ] API accessible et health check OK
- [ ] Certificats SSL actifs
- [ ] Formulaire de contact fonctionnel
- [ ] Emails reçus correctement
- [ ] Site responsive sur mobile/tablet/desktop
- [ ] Backup configuré

---

## Support

En cas de problème :
1. Consulter les logs : `docker-compose logs -f`
2. Vérifier ce guide et le README.md
3. Contacter le support technique

**URLs importantes** :
- Site : https://adminsolution.digiconseil.fr
- API : https://api.adminsolution.digiconseil.fr
- Health Check : https://api.adminsolution.digiconseil.fr/health


