import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
  min-height: 80vh;

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    font-family: var(--primary--fn);
  }
`;

const Loading = ({ title = 'Loading...' }) => (
  <Styled className='d-flex justify-content-center align-items-center  bg-light'>
    <div className='text-center'>
      <div className='spinner-grow text-warning' />
      <div className='spinner-grow text-secondary' />
      <div className='spinner-grow text-warning' />
      <div className='spinner-grow text-secondary' />
      <div className='spinner-grow text-warning' />
      <div className='spinner-grow text-secondary' />
      <h2 className='title'>{title}</h2>
    </div>
  </Styled>
);

export default Loading;
