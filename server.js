// Importation des modules nécessaires
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const pizzaRoutes = require('./routes/pizzaRoutes');

// Initialisation de l'application Express
const app = express();

// Middleware
app.use(cors());  // Permet les requêtes CORS
app.use(bodyParser.json());  // Pour parser le JSON dans les requêtes

// Connexion à MongoDB (sans les options obsolètes)
mongoose.connect('mongodb+srv://yakinedinnesahli:admin123@cluster0.t3qhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connecté'))
  .catch((err) => console.log('Erreur de connexion MongoDB', err));

// Utilisation des routes pour les pizzas
app.use('/api', pizzaRoutes);

// Définir le port du serveur
const PORT = process.env.PORT || 6000;

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

