import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
  padding: 3em 0;
  max-width: 1400px;
  margin: 0 auto;

  @media screen and (min-width: 760px) {
    display: grid;
    grid-gap: 2em;

    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto;

    .card--1 {
      grid-column: 2 / 2;
    }

    .card--2 {
      grid-column: 3 / 3;
    }

    .card--3 {
      grid-column: 4 / 5;
    }

    .card--4 {
      grid-area: 2 / 2 / 2 / 4;
    }

    .card--5 {
      grid-area: 2 / 3 / 2 / 5;
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 10em 0;
    .card--1 {
      grid-column: 1 / 1;
    }

    .card--2 {
      grid-column: 2 / 2;
    }

    .card--3 {
      grid-column: 3 / 3;
    }

    .card--4 {
      grid-area: 1 / 4 / 1 / 4;
    }

    .card--5 {
      grid-area: 1 / 5 / 1 / 5;
    }
  }
`;

const Grid5 = ({ addClass, children }) => {
  return <Styled className={addClass}>{children}</Styled>;
};

export default Grid5;
