import React from 'react';
import styled from 'styled-components';
import banner from '../../../assets/img/pngs/banner.png';

const Styled = styled.div`
  background-color: ${props =>
    props.bannerChange ? 'var(--secondry--clr)' : '#ffe17e'};
  background-image: url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png');
  width: 100%;

  .head--title--container {
    position: relative;

    &__banner {
      width: 330px;
      margin: 0 auto;
    }

    &__title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${props =>
        props.bannerChange ? 'var(--secondry--clr)' : 'var(--white--clr)'};
      font-size: 1.6rem;
      font-weight: bold;
      font-family: var(--primary--fn);
      text-align: center;
    }
  }

  @media screen and (min-width: 760px) {
    .head--title--container__banner {
      width: 350px;
    }

    .head--title--container__title {
      font-size: 1.8rem;
    }
  }
`;

const Banner = ({ title, bannerImg = banner, bannerChange }) => (
  <Styled className='head--title' bannerChange={bannerChange}>
    <div className='head--title--container'>
      <img
        className='head--title--container__banner'
        src={bannerImg}
        alt='banner img'
      />
      <h3 className='head--title--container__title'>{title}</h3>
    </div>
  </Styled>
);

export default Banner;
