import React, { useContext } from 'react';
import styled from 'styled-components';
import DrinkContext from '../../Context/Drinks/DrinkContext';

const Styled = styled.nav`
  .pagination {
    justify-content: center;
    flex-wrap: wrap;
  }

  .page-link {
    color: var(--secondry--clr);
    font-weight: bold;
    font-family: var(--primary--fn);
    border: 1px solid var(--primary--clr);
    &:hover,
    &:focus,
    &.active {
      background-color: var(--primary--clr);
    }
  }

  /* .pagination  */

  .page-item + .page-item {
    margin-left: 0.8em;
  }

  .page-item {
    padding: 0.5em 0;
  }
`;

const Pagination = () => {
  const { drinksPerPage, totalDrinks, paginate, currentPage } = useContext(
    DrinkContext
  );

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDrinks / drinksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Styled className='pagination-nav'>
      <ul className='pagination'>
        {pageNumbers.length === 1
          ? ''
          : pageNumbers.map(number => (
              <li key={number} className='page-item'>
                <div
                  onClick={() => paginate(number)}
                  className={`page-link ${
                    number === currentPage ? 'active' : ''
                  }`}
                >
                  {number}
                </div>
              </li>
            ))}
      </ul>
    </Styled>
  );
};

export default Pagination;
