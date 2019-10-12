import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import FontAwesome from '../../Ui/FontAwesome/FontAwesome';

const Styled = styled.header`
  background-color: var(--primary--clr);
  padding-bottom: 3.5em;

  .container {
  }

  .top--head {
    background-color: var(--secondry--clr);

    &__social {
      display: flex;
      color: var(--primary--clr);
      justify-content: flex-end;
      align-items: center;
      font-size: 0.4rem;
      width: 226px;
      margin: 0 auto;
    }

    .fab + .fab {
      margin-left: 1em;
    }
  }

  .logo {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 5%;
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    width: fit-content;
    border: 2px solid var(--secondry--clr);
    padding: 2em 1em;
    background-color: var(--primary--clr);
    font-weight: bold;
    align-items: center;
    outline: double 4px var(--secondry--clr);
    outline-offset: -12px;
    font-family: var(--primary--fn);
    z-index: 1;

    &--span {
      color: var(--secondry--clr);
      margin-bottom: 2px;
      text-shadow: 0px 0px 1px var(--secondry--clr);
    }
  }

  .burger-toggle {
    z-index: 11;
    position: ${props => (props.toggle ? 'fixed' : 'absolute')};
    background-color: transparent;
    border: none;
    top: 35px;
    right: 10px;
    padding: 1em;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);

    .line {
      transition: all 0.5s ease-in-out;
      width: 28px;
      height: 3px;
      margin: 5px 0;
      background-color: ${props =>
        props.toggle ? 'var(--primary--clr)' : 'var(--secondry--clr)'};
    }

    .line_one {
      transform: ${props =>
        props.toggle ? 'rotate(45deg) translate(5px, 5px)' : ''};
    }
    .line_two {
      opacity: ${props => (props.toggle ? 0 : '')};
    }
    .line_three {
      transform: ${props =>
        props.toggle ? 'rotate(-45deg) translate(7px, -6px)' : ''};
    }
  }

  .nav-bar {
    z-index: 10;
    background-color: var(--secondry--clr);
    transition: all 0.2s ease-in-out;
    transform: ${props =>
      props.toggle ? 'translateX(0)' : 'translateX(110%)'};
    position: fixed;
    padding: 4em 0 2em;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;

    .nav-links_item {
      cursor: pointer;
      text-decoration: none;
      color: var(--primary--clr);
      text-shadow: 0px 5px 8px rgba(0, 0, 0, 0.185);
      outline: none;
      padding: 3em;
      font-size: 1.6rem;
      font-weight: bold;
      font-family: var(--primary--fn);
      text-transform: uppercase;
      transition: ${props =>
        props.toggle ? 'opacity 0.7s 0.4s ease-in' : 'all 0.5s ease-in-out'};
      opacity: ${props => (props.toggle ? 1 : 0)};
      text-align: center;

      &:hover,
      &:focus,
      &:active {
        color: var(--secondry--clr);
        background-color: var(--primary--clr--hover);
      }
    }
  }

  @media screen and (min-width: 760px) {
    .top--head__social {
      justify-content: space-evenly;

      .icon {
        font-size: 27px;
      }
    }

    .logo {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 1020px) {
    padding-bottom: 0;

    .nav-bar {
      position: relative;
      background-color: transparent;
      width: 50%;
      transform: translateX(0);
      padding: 0.4em 0;
      flex-direction: row;
      margin-left: auto;

      .nav-links_item {
        position: relative;
        padding: 0.5em 1em;
        opacity: 1;
        color: var(--title--cl);
        border-radius: 5px;

        &:hover {
          color: var(--primary--clr);
          background-color: var(--secondry--clr);
        }

        &::before {
          content: '';
          position: absolute;
          width: 100%;
          bottom: 0;
          right: 0;
          left: 0;
          height: 2px;
          background-color: var(--white--clr);
          transition: transform 0.4s ease-in-out;
          transform-origin: right;
          transform: scale(0) translateY(0);
        }

        &:hover::before,
        &.active::before {
          transform-origin: left;
          transform: scale(1) translateY(3px);
        }
      }
    }

    .active {
      color: var(--primary--clr) !important;
      background-color: var(--secondry--clr);
    }

    .nav-links_item + .nav-links_item {
      margin-left: 0.5em;
    }

    .logo {
      left: 11%;
    }

    .burger-toggle {
      display: none;
    }
  }

  @media screen and (min-width: 1300px) {
    .logo {
      left: 20%;
    }
  }
`;

const Navigation = props => {
  const [toggle, setToggle] = useState(false);
  return (
    <Styled className={`header-nav`} toggle={toggle}>
      <div className='top--head'>
        <div className='top--head__social'>
          <FontAwesome font='fab fa-facebook-f' />
          <FontAwesome font='fab fa-instagram' />
          <FontAwesome font='fab fa-twitter' />
        </div>
      </div>
      <div className='container'>
        <Link to='/home'>
          <div className='logo'>
            <span className='logo--span'>FIND</span>
            <span className='logo--span'>YOUR</span>
            <span className='logo--span'>COCKTAIL</span>
          </div>
        </Link>

        <button
          onClick={() => setToggle(!toggle)}
          className={`burger-toggle ${toggle ? 'toggle' : ''}`}
        >
          <div className='line line_one' />
          <div className='line line_two' />
          <div className='line line_three' />
        </button>

        <nav className='nav-bar'>
          <NavLink
            onClick={() => setToggle(!toggle)}
            to='/home'
            className='nav-links_item'
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setToggle(!toggle)}
            to='/drinks'
            className='nav-links_item'
          >
            Drinks
          </NavLink>
        </nav>
      </div>
    </Styled>
  );
};

export default Navigation;
