import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import Cards3 from '../Cards3/Cards3';

const Styled = styled.section`
  /* ////////////////////// */
  .profile--head__content {
    padding: 2em 1em 3em;

    .title {
      font-size: 3.15rem;
      font-weight: bold;
      font-family: var(--primary--fn);
      color: var(--secondry--clr);
      margin-bottom: 0.5em;
    }

    .btnStl {
      display: block;
      margin: 1em auto 0;
      font-size: 1.8rem;
      padding: 1px 18px;
    }
  }

  .profile--head__img {
    margin-top: ${props => props.addM_Top};
  }
  /* /////////////////////// */

  @media screen and (min-width: 760px) {
    /* ////////////// */
    .profile--head {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 3em 0;
      max-width: 1150px;
      margin: 0 auto;

      &__img {
        margin-top: 0;
        grid-column: 1 / 3;
        padding: 1em;
        max-width: 480px;
        justify-self: flex-end;
        align-self: center;

        img {
          filter: drop-shadow(2px 4px 6px black);
        }
      }

      &__content {
        grid-column: 3 /5;
        padding: 3em;
      }
    }
    /* //////////////// */

    .popular--card--name {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 1500px) {
    /* ///////// */
    .profile--head {
      grid-column-gap: 3em;
    }
    /* /////////// */

    /* ////////////////// */
    .profile--head__content {
      padding: 2em 1em 3em;

      .title {
        font-size: 4.1rem;
      }

      .description {
        font-size: 1.2rem;
      }
    }
  }
  /* ////////////////////// */
`;

const ProfileBody = ({ profileData: { drink, random }, children, type }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Styled
      className='drink--section'
      addM_Top={type === 'ingredients' && '1em'}
    >
      <div className='profile--head'>
        <div className='profile--head__img'>
          <img
            src={
              drink.strDrinkThumb ||
              `https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient}.png`
            }
            alt={drink.strDrink || drink.strIngredient}
          />
        </div>
        <div className='profile--head__content'>
          <h1 className='title'>{drink.strDrink || drink.strIngredient}</h1>
          <p className='description'>
            {drink.strInstructions
              ? drink.strInstructions
              : drink.strDescription === null
              ? 'N/A'
              : drink.strDescription.length > 400
              ? `${drink.strDescription.slice(0, 400)}.....`
              : drink.strDescription}
          </p>
          {type === 'ingredients' ? (
            drink.strDescription !== null &&
            drink.strDescription.length > 400 ? (
              <button
                className='btnStl'
                onClick={() => {
                  setModalShow(true);
                }}
              >
                <i className='fas fa-chevron-down'></i>
              </button>
            ) : null
          ) : null}
        </div>
      </div>
      {/* Auto Grid */}
      {children}
      {/* Auto Grid End */}
      <Cards3
        headClass='profile--alsoLike'
        bannerTiitle='Might Aslso Like'
        drinkData={random}
        type={type}
      />

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{drink.strIngredient}</Modal.Title>
        </Modal.Header>
        <p className='modal--description'>{drink && drink.strDescription}</p>
      </Modal>
    </Styled>
  );
};

export default ProfileBody;
