import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DrinkContext from '../../../Context/Drinks/DrinkContext';
import Banner from '../../../Ui/Banner/Banner';
import banner_yellow from '../../../../assets/img/pngs/banner_yellow.png';

const Styled = styled.section`
  background-image: var(--primary--clr--gradient);
  color: var(--secondry--clr);

  .fetured--container {
    padding: 6em 0;
    max-width: 1500px;
    margin: 0 auto;
  }

  .fetured--section--card {
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

  .fetured--section--card:last-child {
    margin-bottom: 0;
  }

  .content--title {
    font-size: 1.6rem;
    font-family: var(--primary--fn);
    font-weight: bold;
    text-shadow: 0px 0px 1px var(--white--clr);
  }

  .content--description {
    margin: 0.56em 0 1em;
    font-size: 1.1rem;
  }

  @media screen and (min-width: 760px) {
    .fetured--section--card {
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
    .fetured--container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    .fetured--section--card {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 0;

      .btnStl {
        align-self: center;
        margin-top: auto;
      }
    }

    .fetured--section--card__img {
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

const FeturedCocktail = () => {
  const { feturedDrinks } = useContext(DrinkContext);

  return (
    <Styled className='fetured--section'>
      <Banner
        title='Fetured Cocktails'
        bannerChange
        bannerImg={banner_yellow}
      />
      <div className='fetured--container'>
        {feturedDrinks &&
          feturedDrinks.map(drink => (
            <div key={drink.idDrink} className='fetured--section--card'>
              <div className='fetured--section--card__img'>
                <Link to={`drink/${drink.idDrink}`}>
                  <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                </Link>
              </div>
              <div className='fetured--section--card__content'>
                <h2 className='content--title'>{drink.strDrink}</h2>
                <p className='content--description'>{drink.strInstructions}</p>
              </div>
              <Link to={`drink/${drink.idDrink}`} className='btnStl'>
                View More
              </Link>
            </div>
          ))}
      </div>
    </Styled>
  );
};

export default FeturedCocktail;
