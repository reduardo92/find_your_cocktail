import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import DrinkContext from '../../Context/Drinks/DrinkContext';
import ProfileBody from '../../Ui/ProfileBody/ProfileBody';
import GridAuto from '../../Ui/GridAuto/GridAuto';
import PopularImgCard from '../../Ui/PopularImgCard/PopularImgCard';
import Loading from '../../Ui/Loading/Loading';
import Banner from '../../Ui/Banner/Banner';
import Pagination from '../../Ui/Pagination/Pagination';

const Styled = styled.div`
  background-image: var(--secondry--clr--gradient);

  .pagination {
    padding: 1em 0;
  }

  .profile--itemData__drinks {
    padding: 1em 0;
  }
`;

const IngredientProfile = ({ match }) => {
  const {
    profileIngredient,
    getProfileItem,
    unmountProfile,
    setCurrentDrinks,
    setTypePage
  } = useContext(DrinkContext);

  useEffect(() => {
    getProfileItem(match.url, 'SET_PROFILE_INGREDIENT');

    setTypePage('ingredient');

    return () => unmountProfile('profileIngredient');
  }, [match.url]);

  return Object.keys(profileIngredient).length === 0 ? (
    <Loading />
  ) : (
    <ProfileBody profileData={profileIngredient} type='ingredients'>
      <Banner title='Cocktails' />
      <Styled className='container--ingre'>
        <Pagination />
        <GridAuto>
          {typeof profileIngredient.cocktails === 'string' ? (
            <h3 className='Not--found'>Sorry no Drinks Found</h3>
          ) : (
            setCurrentDrinks(profileIngredient.cocktails).map((item, i) => (
              <PopularImgCard
                key={item.idDrink}
                img={item.strDrinkThumb}
                linkTo={`/drink/${item.idDrink}`}
                name={item.strDrink}
              />
            ))
          )}
        </GridAuto>
        <Pagination />
      </Styled>
    </ProfileBody>
  );
};

export default IngredientProfile;
