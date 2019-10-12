import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cocktail from '../../../assets/img/pngs/black_cocktail.png';
import logoCocktail from '../../../assets/img/pngs/logo_cocktail.png';
import Hero from '../Hero/Hero';

const Styled = styled.div`
  margin: 6em 0 3.5em;

  .hero--title--circle {
    position: relative;
    background-color: var(--primary--clr);
    height: 330px;
    width: 330px;
    border-radius: 50%;
    margin: 0 auto;
    border: 14px solid var(--secondry--clr);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1.4em;

    &::before {
      position: absolute;
      content: '';
      width: 50%;
      top: 50%;
      left: -65%;
      padding: 1px 0;
      background-color: var(--primary--clr);
      box-shadow: 1px 0.5px 0.5px #000000d4;
    }
    &::after {
      position: absolute;
      content: '';
      width: 50%;
      top: 50%;
      right: -65%;
      padding: 1px 0;
      background-color: var(--primary--clr);
      box-shadow: 1px 0.5px 0.5px #000000d4;
    }

    &__h1 {
      z-index: 5;
      font-family: var(--primary--fn);
      color: var(--white--clr);
      font-size: 4.9rem;
      font-weight: bold;
      font-style: italic;
      text-shadow: -4px 9px 6px var(--secondry--clr);
      transform: rotate(-6deg);
      margin-bottom: 1.4em;
      margin-right: 0.3em;
    }

    &__img {
      position: absolute;
      width: 130px;
      bottom: -2px;
      left: 55%;
      transform: translateX(-55%);
      filter: drop-shadow(0px 8px 4px black);
    }
  }
  .hero--btn {
    margin-bottom: 1em;
  }

  .hero--logo {
    img {
      filter: drop-shadow(0px 8px 4px black);
    }
  }

  @media screen and (min-width: 760px) {
    margin-bottom: 0;

    .hero--btn {
      font-size: 1.1rem;
    }

    .hero--logo {
      width: 600px;
    }
  }
`;

const HeroLogo = ({
  titleCircle = 'Cocktail',
  btnTitle = 'search drink',
  linkTo = '/drinks'
}) => (
  <Hero heroSize='calc(80vh - 66px)'>
    <Styled>
      <div className='hero--title--circle'>
        <h1 className='hero--title--circle__h1'>{titleCircle}</h1>
        <div className='hero--title--circle__img'>
          <img src={logoCocktail} alt='cocktail drink' />
        </div>
      </div>
      <Link to={linkTo} className='btnStl hero--btn'>
        {btnTitle}
      </Link>
      <div className='hero--logo'>
        <img src={cocktail} alt='img-logo' />
      </div>
    </Styled>
  </Hero>
);

export default HeroLogo;
