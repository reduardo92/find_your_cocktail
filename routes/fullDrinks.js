const express = require('express');
const axios = require('axios');

const router = express.Router();

// @ Home
// Get Popular Drinks
// Get Fetured Drinks
// `/drinks?searchBy=${searchBy}&filterBy=${filterBy}${form.subFilter &&
//     `&subFilter=${form.subFilter}`}`

router.get('/', async (req, res) => {
  const { searchBy, filterBy, subFilter } = req.query;
  try {
    //   Get Popular Data
    if (searchBy === '' && filterBy === 'none') {
      const fetchData = await axios.get(`${process.env.API_URL}popular.php`);
      res.json(fetchData.data.drinks);
    }
    //   Get Drinks by Search input
    if (searchBy !== '' && filterBy === 'none') {
      const fetchData = await axios.get(
        `${process.env.API_URL}search.php?s=${searchBy}`
      );
      res.json(
        fetchData.data.drinks === null
          ? 'Sorry No Drinks Found'
          : fetchData.data.drinks
      );
    }
    //   Get Drinks by Alcoholic type
    if (filterBy === 'alcoholic') {
      const fetchData = await axios.get(
        `${process.env.API_URL}filter.php?a=${subFilter}`
      );
      res.json(fetchData.data.drinks);
    }
    //   Get Drinks by Category type
    if (filterBy === 'category') {
      const fetchData = await axios.get(
        `${process.env.API_URL}filter.php?c=${subFilter}`
      );
      res.json(fetchData.data.drinks);
    }
    //   Get Drinks by Galss type
    if (filterBy === 'glass') {
      const fetchData = await axios.get(
        `${process.env.API_URL}filter.php?g=${subFilter}`
      );
      res.json(fetchData.data.drinks);
    }
    //   Get Drinks by Ingredient type
    if (filterBy === 'ingredient') {
      const fetchData = await axios.get(
        `${process.env.API_URL}filter.php?i=${subFilter}`
      );
      res.json(fetchData.data.drinks);
    }
    //   Get Drinks by Random type
    if (filterBy === 'random') {
      const fetchData = await axios.get(`${process.env.API_URL}random.php`);
      res.json(fetchData.data.drinks);
    }
    //   Get Drinks by Recent type
    if (filterBy === 'recent') {
      const fetchData = await axios.get(`${process.env.API_URL}recent.php`);
      res.json(fetchData.data.drinks);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ data: 'Sorry No Drinks Found' });
  }
});

module.exports = router;
