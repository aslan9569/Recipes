import classes from './profile.module.css';
import React from 'react';
import Authorization from '../Authorization/Authorization';
import { useDispatch, useSelector } from 'react-redux';
import { openWindow } from '../../../redux/ducks/usersReducer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { addOpen } from '../../../redux/ducks/cardsReducer'
import AddModal from './addRecipe/AddModal'

function Profile (props) {
  const window = useSelector(state => state.users.openWindow);
  const addWindow = useSelector(state => state.cards.addWindow);


  const dispatch = useDispatch();

  const handleOpenWindow = () => {
    dispatch(openWindow())
  }
  const openAddWindow = () => {
  dispatch(addOpen())
  }


  return (
    <div className={classes.sign}>
      <div className={classes.myBook}>
        <div className={classes.book}>
          <FontAwesomeIcon icon={faBook} />
        </div>
        Моя книга рецептов
      </div>
      <div className={classes.addRecipes}>
        <div>
            <button type="button" className={classes.signIn} onClick={handleOpenWindow}>
              Войти
            </button>
        </div>
        <div className={classes.add} onClick={openAddWindow}>
          Добавить рецепт
        </div>
        {addWindow && <AddModal />}
      </div>
      {window? <Authorization /> : true}
    </div>
  )
}

export default Profile