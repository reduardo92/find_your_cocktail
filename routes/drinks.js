const express = require('express');
const axios = require('axios');

const router = express.Router();

// @ Drink /drink/:id
// Get specific Drink
router.get('/:id', async (req, res) => {
  try {
    const { data } = await axios.get(
      `${process.env.API_URL}lookup.php?i=${req.params.id}`
    );
    const fetchRandomDrinks = await axios.all([
      await axios.get(`${process.env.API_URL}random.php`),
      await axios.get(`${process.env.API_URL}random.php`),
      await axios.get(`${process.env.API_URL}random.php`)
    ]);

    const drink = data.drinks[0];

    res.json({
      drink,
      ingredients: {
        ing1: [drink.strIngredient1, drink.strMeasure1],
        ing2: [drink.strIngredient2, drink.strMeasure2],
        ing3: [drink.strIngredient3, drink.strMeasure3],
        ing4: [drink.strIngredient4, drink.strMeasure4],
        ing5: [drink.strIngredient5, drink.strMeasure5],
        ing6: [drink.strIngredient6, drink.strMeasure6],
        ing7: [drink.strIngredient7, drink.strMeasure7],
        ing8: [drink.strIngredient8, drink.strMeasure8],
        ing9: [drink.strIngredient9, drink.strMeasure9],
        ing10: [drink.strIngredient10, drink.strMeasure10],
        ing11: [drink.strIngredient11, drink.strMeasure11],
        ing12: [drink.strIngredient12, drink.strMeasure12],
        ing13: [drink.strIngredient13, drink.strMeasure13],
        ing14: [drink.strIngredient14, drink.strMeasure14],
        ing15: [drink.strIngredient15, drink.strMeasure15]
      },
      random: [
        fetchRandomDrinks[0].data.drinks[0],
        fetchRandomDrinks[1].data.drinks[0],
        fetchRandomDrinks[2].data.drinks[0]
      ]
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
