import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import banner_yellow from '../../../assets/img/pngs/banner_yellow.png';

const Styled = styled.section`
  background-image: var(--primary--clr--gradient);
  color: var(--secondry--clr);

  .grid3--container {
    padding: 6em 0;
    max-width: 1500px;
    margin: 0 auto;
  }

  .grid3--section--card {
    text-align: center;
    margin-bottom: 3em;

    &__img {
      margin: 0 auto 1em;
      width: 250px;
      filter: drop-shadow(2px 4px 6px black);
      transition: opacity, transform 0.3s ease-in-out;

      &:hover {
        opacity: 0.8;
        transform: scale(1.05);
      }

      img {
        border-radius: 50%;
      }
    }
    /* Content */
    &__content {
      text-align: center;
      padding: 1em 2em;
    }

    .btnStl:hover,
    .btnStl:focus {
      border: 7px double var(--secondry--clr);
    }
  }

  .grid3--section--card:last-child {
    margin-bottom: 0;
  }

  .content--title {
    font-size: 1.6rem;
    font-family: var(--primary--fn);
    font-weight: bold;
    text-shadow: 0px 0px 1px var(--white--clr);
    margin-bottom: 0.5em;
  }

  .content--description {
    margin: 0.56em 0 1em;
    font-size: 1.1rem;
  }

  @media screen and (min-width: 760px) {
    .grid3--section--card {
      &__img {
        width: 280px;
        justify-self: center;
      }

      &__content {
        padding: 0;
        align-self: center;
      }
    }

    .content--description {
      max-width: 70%;
      margin: 0 auto 1em;
    }
  }

  @media screen and (min-width: 1024px) {
    .grid3--container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    .grid3--section--card {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 0;

      .btnStl {
        align-self: center;
        margin-top: auto;
      }
    }

    .grid3--section--card__img {
      width: 300px;
    }

    .content--title {
      font-size: 2.11rem;
    }

    .content--description {
      font-size: 1.25rem;
    }

    .btnStl {
      font-size: 1.15rem;
    }
  }
`;

const Cards3 = ({ headClass, bannerTiitle, drinkData, type = 'drink' }) => (
  <Styled className={headClass}>
    <Banner title={bannerTiitle} bannerChange bannerImg={banner_yellow} />
    <div className='grid3--container'>
      {type === 'ingredients'
        ? drinkData &&
          drinkData.map((drink, i) => (
            <div
              key={drink.strIngredient1 + i}
              className='grid3--section--card'
            >
              <div className='grid3--section--card__img'>
                <Link to={`/ingredients/${drink.strIngredient1}`}>
                  <img
                    src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient1}.png`}
                    alt={drink.strIngredient1}
                  />
                </Link>
              </div>
              <div className='grid3--section--card__content'>
                <h2 className='content--title'>{drink.strIngredient1}</h2>
              </div>
              <Link
                to={`/ingredients/${drink.strIngredient1}`}
                className='btnStl'
              >
                View More
              </Link>
            </div>
          ))
        : drinkData &&
          drinkData.map((drink, i) => (
            <div key={drink.idDrink + i} className='grid3--section--card'>
              <div className='grid3--section--card__img'>
                <Link to={`/drink/${drink.idDrink}`}>
                  <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                </Link>
              </div>
              <div className='grid3--section--card__content'>
                <h2 className='content--title'>{drink.strDrink}</h2>
                <p className='content--description'>
                  {drink.strInstructions.length < 100
                    ? drink.strInstructions
                    : `${drink.strInstructions.slice(0, 100)}...`}
                </p>
              </div>
              <Link to={`/drink/${drink.idDrink}`} className='btnStl'>
                View More
              </Link>
            </div>
          ))}
    </div>
  </Styled>
);

export default Cards3;
