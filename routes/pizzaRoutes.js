const express = require('express');
const router = express.Router();
// Assurez-vous que vous avez les bons contrôleurs définis ici
const pizzaController = require('../controllers/pizzaController');

// Exemple de route pour obtenir toutes les pizzas
router.get('/pizzas', pizzaController.getAllPizzas);

// Exporter les routes
module.exports = router;

