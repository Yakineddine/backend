const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const pizzaRoutes = require('./routes/pizzaRoutes');


const app = express();

app.use(cors());  
app.use(bodyParser.json());  

mongoose.connect('mongodb+srv://yakinedinnesahli:admin123@cluster0.t3qhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connecté'))
  .catch((err) => console.log('Erreur de connexion MongoDB', err));

app.use('/api', pizzaRoutes);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});