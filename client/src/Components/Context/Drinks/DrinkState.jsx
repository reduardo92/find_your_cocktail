import React, { useReducer, useEffect, useState } from 'react';
import useDataApi from '../../Hooks/useDataApi';
import DrinkContext from './DrinkContext';
import useDrinkReducer from './DrinkReducer';
import axios from 'axios';

const drinksInitalState = {
  popularDrinks: [],
  feturedDrinks: [],
  profileDrink: {},
  profileIngredient: {},
  initialMd: [],
  menuData: { options: {}, data: {} },
  currentPage: 1,
  drinksPerPage: 20,
  type: ''
};

const DrinkState = ({ children }) => {
  const [form, setForm] = useState({
    searchBy: '',
    filterBy: 'none',
    subFilter: ''
  });
  const [state, dispatch] = useReducer(useDrinkReducer, drinksInitalState);

  const {
    popularDrinks,
    feturedDrinks,
    profileDrink,
    profileIngredient,
    menuData,
    initialMd,
    currentPage,
    drinksPerPage,
    type
  } = state;

  const { data, isLoading } = useDataApi('/home', []);

  // Dispatch Home Data
  useEffect(() => {
    dispatch({
      type: 'SET_HOME_DATA',
      popularDr: data.popularDrinks,
      feturedDr: data.feturedDrinks,
      initialMenu: data.initialMd
    });
    dispatch({ type: 'SET_MENU_OPTIONS', payload: data.menuOptions });
  }, [data]);

  // Fetch Proflie Drink OR Ingrident
  const getProfileItem = async (url, type) => {
    try {
      const { data } = await axios.get(url);
      dispatch({ type, data });
    } catch (error) {
      console.log(error);
    }
  };
  const unmountProfile = profile => {
    dispatch({ type: 'UNMOUNT_PROFILE', profile });
  };

  // Get current posts
  const indexOfLastPost = currentPage * drinksPerPage;
  const indexOfFirstPost = indexOfLastPost - drinksPerPage;

  // Set
  const setCurrentDrinks = data =>
    data.slice(indexOfFirstPost, indexOfLastPost);

  // Get total data length
  const totalDrinks =
    type === 'ingredient'
      ? profileIngredient.cocktails && profileIngredient.cocktails.length
      : type === 'drinks'
      ? menuData.data && Object.values(menuData.data).length
      : '';

  // change Type for pagination length
  const setTypePage = typePage => {
    dispatch({ type: 'SET_TYPE_PAGE', typePage });
  };

  // Change page
  const paginate = pageNumber =>
    dispatch({ type: 'SET_CURRENT_PAGE', setCurrentPage: pageNumber });

  return (
    <DrinkContext.Provider
      value={{
        popularDrinks,
        feturedDrinks,
        profileDrink,
        profileIngredient,
        menuData,
        initialMd,
        form,
        setForm,
        setCurrentDrinks,
        setTypePage,
        getProfileItem,
        unmountProfile,
        isLoading,
        totalDrinks,
        paginate,
        currentPage,
        drinksPerPage
      }}
    >
      {children}
    </DrinkContext.Provider>
  );
};

export default DrinkState;

// Set Alerts
//   const setAlert = (msg, type, timeout = 3000) => {
//     const id = uuid.v4();
//     dispatch({
//       type: 'SET_ALERT',
//       payload: { msg, type, id }
//     });

//     setTimeout(() => dispatch({ type: 'REMOVE_ALERT', payload: id }), timeout);
//   };

// filter seach name
//   const handlefilterSearch = search => {
//     if (search === '') {
//       dispatch({ type: 'SET_FILTER_SEARCH', payload: [] });
//     } else {
//       const searchData = heroData.filter(c => {
//         const regex = new RegExp(search, 'gi');
//         return c.name.match(regex);
//       });
//       dispatch({ type: 'SET_FILTER_SEARCH', payload: searchData });
//       dispatch({ type: 'SET_CURRENT_PAGE', setCurrentPage: 1 });
//     }
//   };

// Get current posts
//   const indexOfLastPost = currentPage * characterPerPage;
//   const indexOfFirstPost = indexOfLastPost - characterPerPage;

//   const currentCharacters = (filterSearch.length === 0
//     ? heroData
//     : filterSearch
//   ).slice(indexOfFirstPost, indexOfLastPost);

// Change page
//   const paginate = pageNumber =>
//     dispatch({ type: 'SET_CURRENT_PAGE', setCurrentPage: pageNumber });
