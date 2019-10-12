import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FontAwesome from '../../Ui/FontAwesome/FontAwesome';

const Styled = styled.div`
  /* background: var(--secondry--clr--gradient); */
  text-align: center;
  padding: 1.5em 0;

  .footer--nav {
    display: none;
    &--links {
      transition: opacity 0.4s ease-in-out;
      cursor: pointer;
      text-transform: capitalize;
      color: var(--primary--clr);
      text-shadow: 0px 5px 8px rgba(0, 0, 0, 0.185);
      font-size: 1.2rem;
      font-weight: bold;
      font-family: var(--primary--fn);
      display: block;
      margin-bottom: 1em;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .footer--social {
    display: flex;
    color: var(--primary--clr);
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1em;

    .fab {
      font-size: 1.5rem;
    }

    .fab + .fab {
      margin-left: 1em;
    }

    .copyRgiht {
      flex: 100%;
      margin-top: 1em;
      font-size: 0.6rem;
    }
  }

  .footer--logo--link {
    color: var(--secondry--clr);
    order: 1;

    .footer--logo {
      display: flex;
      flex-direction: column;
      width: fit-content;
      font-size: 1.3rem;
      border: 2px solid var(--secondry--clr);
      padding: 2em 1em;
      background-color: var(--primary--clr);
      font-weight: bold;
      align-items: center;
      outline: double 4px var(--secondry--clr);
      outline-offset: -12px;
      font-family: var(--primary--fn);
      margin: 0 auto;

      &--span {
        margin-bottom: 2px;
        text-shadow: 0px 0px 1px var(--secondry--clr);
      }
    }
  }

  @media screen and (min-width: 760px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-content: center;
    align-items: center;
    padding: 1.5em 0 0;

    .footer--social {
      .fab {
        font-size: 1.75rem;
      }
    }

    .footer--nav {
      display: block;
    }

    .footer--logo {
      font-size: 1.5rem;
    }
  }
`;

const Footer = () => {
  return (
    <footer>
      <Styled className='container'>
        <nav className='footer--nav'>
          <Link className='footer--nav--links' to='/home'>
            Home
          </Link>
          <Link className='footer--nav--links' to='/drinks'>
            Drinks
          </Link>
        </nav>
        <Link to='/home' className='footer--logo--link'>
          <div className='footer--logo'>
            <span className='logo--span'>FIND</span>
            <span className='logo--span'>YOUR</span>
            <span className='logo--span'>COCKTAIL</span>
          </div>
        </Link>
        <div className='footer--social'>
          <FontAwesome font='fab fa-facebook-f' />
          <FontAwesome font='fab fa-instagram' />
          <FontAwesome font='fab fa-twitter' />
          <p className='copyRgiht'> &copy; by Eduardo Rivas</p>
        </div>
      </Styled>
    </footer>
  );
};

export default Footer;
