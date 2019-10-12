const express = require('express');
const axios = require('axios');

const router = express.Router();

// @ Ingredients  ingredients/:id
// Get specific Drinks
router.get('/:name', async (req, res) => {
  // get random number for ingredients
  const randomm = num => Math.floor(Math.random() * JSON.parse(num));

  try {
    const fetchIngredient = await axios.get(
      `${process.env.API_URL}search.php?i=${req.params.name}`
    );
    const fetchCocktails = await axios.get(
      `${process.env.API_URL}filter.php?i=${req.params.name}`
    );
    const fetchRecent = await axios.get(
      `${process.env.API_URL}list.php?i=list`
    );

    const ingLengtht = fetchRecent.data.drinks.length;
    // console.log(typeof fetchCocktails.data.drinks.ingredients[0]);
    res.json({
      drink: fetchIngredient.data.ingredients[0],
      cocktails: fetchCocktails.data.drinks,
      random: [
        fetchRecent.data.drinks[randomm(ingLengtht)],
        fetchRecent.data.drinks[randomm(ingLengtht)],
        fetchRecent.data.drinks[randomm(ingLengtht)]
      ]
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
