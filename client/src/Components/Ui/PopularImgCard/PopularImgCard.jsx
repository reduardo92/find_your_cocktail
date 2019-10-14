import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styled = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  justify-items: center;
  text-align: center;
  margin: 3em 0;

  &::before {
    z-index: 1;
    content: 'View More';
    position: absolute;
    display: none;
    top: -25%;
    left: 50%;
    font-weight: bold;
    font-size: 0.89rem;
    color: ${props =>
      props.nameColor ? 'var(--white--clr)' : 'var(--secondry--clr)'};
    background-color: ${props => props.nameColor || 'var(--white--clr)'};
    padding: 0.078em 0.8em;
    border-radius: 10px;
    transition: transform 0.4s ease-in-out;
    transform: translate(-50%, 25%) scale(0);
    transform-origin: bottom;
  }

  &:hover .popular--card--img {
    opacity: 0.8;
    transform: scale(1.05);
  }

  .popular--card--img {
    display: ${props => (props.showImg ? 'block' : 'none')};
    width: 200px;
    transition: opacity, transform 0.3s ease-in-out;
    filter: drop-shadow(2px 4px 6px black);
    margin: 0 auto;
  }

  .blur-img {
    background-color: #3e3e3e;
    filter: blur(2px);
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }

  .popular--card--name {
    font-size: 1.35rem;
    font-weight: bold;
    font-family: var(--primary--fn);
    text-transform: uppercase;
    margin-top: 0.5em;
    transition: color 0.5s ease-in-out;
    color: ${props => props.nameColor || 'var(--white--clr)'};
  }

  &:hover .popular--card--name {
    color: var(--primary--clr);
  }

  @media screen and (min-width: 1024px) {
    &::before {
      display: block;
    }

    &:hover::before {
      transform-origin: bottom;
      transform: translate(-50%, 25%) scale(1);
    }

    .popular--card--name {
      font-size: 1.6rem;
    }
  }
  @media screen and (min-width: 1400px) {
    margin: 0;
    .popular--card--img {
      width: 250px;
    }

    .blur-img {
      width: 250px;
      height: 250px;
    }
  }
`;

const PopularImgCard = ({ keyId, img, name, linkTo, nameColor, addClass }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Styled
      key={keyId}
      className={`popular--card ${addClass}`}
      nameColor={nameColor}
      showImg={loading}
    >
      <Link className='popular--link' to={`${linkTo}`}>
        {!loading ? <div className='blur-img' /> : null}

        <img
          onLoad={() => setLoading(true)}
          className='popular--card--img'
          src={img}
          alt={name}
        />
        <p className='popular--card--name'>{name}</p>
      </Link>
    </Styled>
  );
};

export default PopularImgCard;
