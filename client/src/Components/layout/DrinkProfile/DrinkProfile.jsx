import React, { useContext, useEffect } from 'react';
import DrinkContext from '../../Context/Drinks/DrinkContext';
import GridAuto from '../../Ui/GridAuto/GridAuto';
import ProfileBody from '../../Ui/ProfileBody/ProfileBody';
import PopularImgCard from '../../Ui/PopularImgCard/PopularImgCard';
import Loading from '../../Ui/Loading/Loading';
import Banner from '../../Ui/Banner/Banner';

const DrinkProfile = ({ match }) => {
  const { profileDrink, getProfileItem, unmountProfile } = useContext(
    DrinkContext
  );

  useEffect(() => {
    getProfileItem(match.url, 'SET_PROFILE_DRINK');

    return () => unmountProfile('profileDrink');
  }, [match.url]);

  const ingredientItem =
    profileDrink.ingredients && Object.values(profileDrink.ingredients);

  return Object.keys(profileDrink).length === 0 ? (
    <Loading />
  ) : (
    <ProfileBody profileData={profileDrink}>
      <Banner title='Ingredients' />
      <GridAuto>
        {ingredientItem &&
          ingredientItem.map((item, i) =>
            item[0] !== null && item[0] !== '' ? (
              <PopularImgCard
                key={item[0] + i}
                // addClass=''
                img={`https://www.thecocktaildb.com/images/ingredients/${
                  item[0]
                }.png`}
                linkTo={`/ingredients/${item[0]}`}
                name={`${item[1]} ${item[0]}`}
              />
            ) : null
          )}
      </GridAuto>
    </ProfileBody>
  );
};

export default DrinkProfile;
