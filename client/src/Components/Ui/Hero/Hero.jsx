import React from 'react';
import styled from 'styled-components';
// import heroImg from '../../assets/images/hero/forkbg.jpg';

const HeroImg = styled.div`
  background: url(${props => props.img});
  background-position: center;
  background-size: cover;
  min-height: ${props => props.heroSize || 'calc(100vh - 66px)'};
  text-align: center;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Hero = ({ img, heroSize, children }) => (
  <HeroImg className='hero' img={img} heroSize={heroSize}>
    {children}
  </HeroImg>
);

export default Hero;
