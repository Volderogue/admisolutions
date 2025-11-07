#!/bin/sh
set -e

echo "Démarrage de l'API Admin Solution..."

# Attendre que les dépendances soient prêtes si nécessaire
sleep 2

# Lancer l'application
exec node server.js


