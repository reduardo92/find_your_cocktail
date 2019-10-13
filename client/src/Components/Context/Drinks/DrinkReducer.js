const useDrinkReducer = (state, action) => {
  switch (action.type) {
    case 'SET_HOME_DATA':
      return {
        ...state,
        popularDrinks: action.popularDr,
        feturedDrinks: action.feturedDr,
        initialMd: action.initialMenu
      };
    case 'SET_MENU_DATA':
      return {
        ...state,
        menuData: { ...state.menuData, data: action.data }
      };
    case 'SET_MENU_OPTIONS':
      return {
        ...state,
        menuData: { ...state.menuData, options: action.payload }
      };
    case 'SET_PROFILE_DRINK':
      return {
        ...state,
        profileDrink: action.data
      };
    case 'SET_PROFILE_INGREDIENT':
      return {
        ...state,
        profileIngredient: action.data
      };
    case 'UNMOUNT_PROFILE':
      return {
        ...state,
        [action.profile]: {}
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.setCurrentPage
      };
    case 'SET_TYPE_PAGE':
      return {
        ...state,
        type: action.typePage
      };
    default:
      return state;
  }
};

export default useDrinkReducer;
