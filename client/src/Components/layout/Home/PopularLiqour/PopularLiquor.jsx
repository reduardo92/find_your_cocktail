import React from 'react';
import styled from 'styled-components';
import Banner from '../../../Ui/Banner/Banner';
import PopularImgCard from '../../../Ui/PopularImgCard/PopularImgCard';
import Grid5 from '../../../Ui/Grid5/Grid5';

const Styled = styled.section`
  color: var(--white--clr);
  background-image: var(--secondry--clr--gradient);
  padding: 0;
`;

const PopularLiquor = () => {
  return (
    <Styled className='section popular--liqour'>
      <Banner title='Popular Liqour' />
      <Grid5 addClass='popular--liqour--bottles'>
        <PopularImgCard
          addClass='card--1'
          img={'https://www.thecocktaildb.com/images/ingredients/vodka.png'}
          linkTo='ingredients/vodka'
          name='vodka'
        />
        <PopularImgCard
          addClass='card--2'
          img={'https://www.thecocktaildb.com/images/ingredients/gin.png'}
          linkTo='ingredients/gin'
          name='gin'
        />
        <PopularImgCard
          addClass='card--3'
          img={'https://www.thecocktaildb.com/images/ingredients/rum.png'}
          linkTo='ingredients/rum'
          name='rum'
        />
        <PopularImgCard
          addClass='card--4'
          img={'https://www.thecocktaildb.com/images/ingredients/tequila.png'}
          linkTo='ingredients/tequila'
          name='tequila'
        />
        <PopularImgCard
          addClass='card--5'
          img={'https://www.thecocktaildb.com/images/ingredients/whiskey.png'}
          linkTo='ingredients/whiskey'
          name='whiskey'
        />
      </Grid5>
    </Styled>
  );
};

export default PopularLiquor;
