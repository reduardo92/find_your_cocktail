import React, { useContext } from 'react';
import styled from 'styled-components';
import Banner from '../../../Ui/Banner/Banner';
import PopularImgCard from '../../../Ui/PopularImgCard/PopularImgCard';
import DrinkContext from '../../../Context/Drinks/DrinkContext';
import Grid5 from '../../../Ui/Grid5/Grid5';

const Styled = styled.section`
  padding: 0;
`;

const PopularCocktails = () => {
  const { popularDrinks } = useContext(DrinkContext);
  return (
    <Styled className='section popular--cocktails'>
      <Banner title='Popular Cocktails' />
      <Grid5>
        {popularDrinks &&
          popularDrinks.map(({ strDrinkThumb, idDrink, strDrink }, i) => (
            <PopularImgCard
              key={idDrink}
              addClass={`card--${i + 1}`}
              nameColor='var(--secondry--clr)'
              img={strDrinkThumb}
              linkTo={`drink/${idDrink}`}
              name={strDrink}
            />
          ))}
      </Grid5>
    </Styled>
  );
};

export default PopularCocktails;
