const Pizza = require('../models/pizzaModel');

exports.getAllPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addPizza = async (req, res) => {
  const pizza = new Pizza({
    name: req.body.name,
    price: req.body.price,
    ingredients: req.body.ingredients,
    size: req.body.size,
    category: req.body.category,
  });

  try {
    const newPizza = await pizza.save();
    res.status(201).json(newPizza);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
