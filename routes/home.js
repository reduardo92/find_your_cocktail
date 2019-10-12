const express = require('express');
const axios = require('axios');

const router = express.Router();

// @ Home
// Get Popular Drinks
// Get Fetured Drinks
router.get('/', async (req, res) => {
  try {
    const fetchPopularDrinks = await axios.get(
      `${process.env.API_URL}popular.php`
    );

    const fetchFeturedData = await axios.all([
      await axios.get(`${process.env.API_URL}lookup.php?i=11000`),
      await axios.get(`${process.env.API_URL}lookup.php?i=17207`),
      await axios.get(`${process.env.API_URL}lookup.php?i=11006`)
    ]);

    const fetchOptions = await axios.all([
      await axios.get(`${process.env.API_URL}list.php?c=list`),
      await axios.get(`${process.env.API_URL}list.php?g=list`),
      await axios.get(`${process.env.API_URL}list.php?i=list`),
      await axios.get(`${process.env.API_URL}list.php?a=list`)
    ]);

    res.json({
      popularDrinks: fetchPopularDrinks.data.drinks.slice(1, 6),
      feturedDrinks: [
        fetchFeturedData[0].data.drinks[0],
        fetchFeturedData[1].data.drinks[0],
        fetchFeturedData[2].data.drinks[0]
      ],
      menuOptions: {
        categorys: fetchOptions[0].data.drinks,
        glasses: fetchOptions[1].data.drinks,
        ingredients: fetchOptions[2].data.drinks,
        alcoholic: fetchOptions[3].data.drinks
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
