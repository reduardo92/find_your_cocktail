import React from 'react';
import styled from 'styled-components';

const Styled = styled.section`
  background-image: var(--secondry--clr--gradient);
  color: var(--white--clr);
  .profile--itemData__drinks {
    display: grid;
    grid-gap: 1em;
    grid-row-gap: 3em;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 5em 2em;
    text-align: center;
  }

  .profile--itemData__drinks--item__img {
    width: 250px;
    margin: 0 auto;

    img {
      filter: drop-shadow(2px 4px 6px black);
    }
  }
  .profile--itemData__drinks--item__name {
    font-size: 1.3rem;
    font-weight: bold;
    font-family: var(--primary--fn);
    margin-top: 1em;
  }

  @media screen and (min-width: 760px) {
    .profile--itemData__drinks {
      grid-gap: 1em;
      padding: 8% 0;
    }

    .profile--itemData__drinks--item__img {
      width: auto;
      max-width: 300px;
    }
  }

  @media screen and (min-width: 1500px) {
    .profile--itemData__drinks {
      max-width: 1500px;
      margin: 0 auto;
    }
  }
`;

const GridAuto = ({ children }) => {
  return (
    <Styled className='profile--itemData'>
      <div className='profile--itemData__drinks'>{children}</div>
    </Styled>
  );
};

export default GridAuto;
