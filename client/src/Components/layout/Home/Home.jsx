import React, { useContext } from 'react';
import PopularLiquor from './PopularLiqour/PopularLiquor';
import PopularCocktails from './PopularCocktail/PopularCocktails';
import DrinkContext from '../../Context/Drinks/DrinkContext';
import Cards3 from '../../Ui/Cards3/Cards3';
import Loading from '../../Ui/Loading/Loading';
import HeroLogo from '../../Ui/HeroLogo/HeroLogo';

const Home = () => {
  const { isLoading, feturedDrinks } = useContext(DrinkContext);
  return isLoading ? (
    <Loading title='Welcome' />
  ) : (
    <>
      <HeroLogo />
      <main>
        <PopularLiquor />
        <PopularCocktails />
        <Cards3
          headClass='fetured--cocktails'
          bannerTiitle='Fetured Cocktails'
          drinkData={feturedDrinks}
        />
      </main>
    </>
  );
};

export default Home;
