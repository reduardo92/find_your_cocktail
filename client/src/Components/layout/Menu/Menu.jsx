import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import HeroLogo from '../../Ui/HeroLogo/HeroLogo';
import GridAuto from '../../Ui/GridAuto/GridAuto';
import DrinkContext from '../../Context/Drinks/DrinkContext';
import Banner from '../../Ui/Banner/Banner';
import Button from '../../Ui/Button/Button';
import Loading from '../../Ui/Loading/Loading';
import PopularImgCard from '../../Ui/PopularImgCard/PopularImgCard';
import Pagination from '../../Ui/Pagination/Pagination';

const Styled = styled.div`
  background-image: var(--secondry--clr--gradient);
  color: var(--white--clr);

  .form--group {
    text-align: center;
    padding: 1em 0;

    &__input {
      padding: 0.5em 1em;
      margin: 0.2em;
      border-radius: 5px;
      border: solid 4px var(--primary--clr);
      font-family: var(--primary--fn);
      font-weight: bold;
    }

    &__filter--title {
      font-family: var(--primary--fn);
      font-weight: bold;
      letter-spacing: 1.5px;
      font-size: 1.1rem;
    }
  }

  .profile--itemData__drinks {
    padding: 1em 0;
  }

  @media screen and (min-width: 1024px) {
    .form {
      display: flex;
      align-items: center;
      justify-content: space-around;
      max-width: 1000px;
      margin: 0 auto;
    }

    .form--group {
      display: flex;
      align-items: center;

      .btnStyl {
        margin-left: 0.5em;
      }
    }

    .form--group__filter--title {
      margin-right: 0.5em;
    }
  }
`;

const Menu = () => {
  const [form, setForm] = useState({
    searchBy: '',
    filterBy: 'none',
    subFilter: ''
  });

  // Context
  const {
    menuData,
    getProfileItem,
    setCurrentDrinks,
    setTypePage
  } = useContext(DrinkContext);

  // pull from values
  const { searchBy, filterBy, subFilter } = form;

  // Load initial data Popular Cockatils
  useEffect(() => {
    getProfileItem(
      `/drinks?searchBy=&filterBy=none&subFilter=`,
      'SET_MENU_DATA'
    );

    setTypePage('drinks');
  }, []);

  // Handel Submit
  const handleSumbit = async e => {
    e.preventDefault();

    await getProfileItem(
      `/drinks?searchBy=${searchBy}&filterBy=${filterBy}&subFilter=${form.subFilter}`,
      'SET_MENU_DATA'
    );
  };

  const handleOnChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const setOptions = data => (
    <select
      className='form--group__input'
      name='subFilter'
      value={subFilter}
      onChange={handleOnChange}
    >
      {data.map(item => (
        <option key={Object.values(item)} value={Object.values(item)}>
          {Object.values(item)}
        </option>
      ))}
    </select>
  );

  return setCurrentDrinks(Object.values(menuData.data)).length === 0 ? (
    <Loading />
  ) : (
    <>
      <HeroLogo titleCircle='MENU' btnTitle='Home' linkTo='/home' />
      <main>
        <Banner title='Full Menu' />
        <Styled>
          <form onSubmit={handleSumbit} className='form'>
            <div className='form--group'>
              <input
                disabled={filterBy !== 'none'}
                className='form--group__input'
                type='text'
                name='searchBy'
                value={searchBy}
                onChange={handleOnChange}
                placeholder='Search by Name or Ingredient'
              />
              <Button btnsecond btnpadding='13px 20px;' />
            </div>
            <div className='form--group'>
              <h3 className='form--group__filter--title'>FILTER BY</h3>
              <select
                className='form--group__input'
                name='filterBy'
                value={filterBy}
                onChange={handleOnChange}
              >
                <option value='none'>None</option>
                <option value='alcoholic'>Alcoholic</option>
                <option value='category'>Category</option>
                <option value='glass'>Glass</option>
                <option value='ingredient'>Ingredient</option>
                <option value='random'>Random</option>
                <option value='recent'>Recent</option>
              </select>
              {filterBy === 'alcoholic' &&
                setOptions(menuData.options.alcoholic)}
              {filterBy === 'category' &&
                setOptions(menuData.options.categorys)}
              {filterBy === 'glass' && setOptions(menuData.options.glasses)}
              {filterBy === 'ingredient' &&
                setOptions(menuData.options.ingredients)}
            </div>
          </form>
          <Pagination />
          <GridAuto>
            {typeof menuData.data === 'string' ? (
              <h3 className='Not--found'>Sorry no Drinks Found</h3>
            ) : (
              setCurrentDrinks(Object.values(menuData.data)).map((item, i) => (
                <PopularImgCard
                  key={item.idDrink + i}
                  img={item.strDrinkThumb}
                  linkTo={`/drink/${item.idDrink}`}
                  name={item.strDrink}
                />
              ))
            )}
          </GridAuto>
          <Pagination />
        </Styled>
      </main>
    </>
  );
};

export default Menu;
