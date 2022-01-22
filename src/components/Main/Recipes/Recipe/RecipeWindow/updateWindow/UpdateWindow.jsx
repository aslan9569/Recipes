import React from 'react';
import classes from './updateWindow.module.css';
import { useDispatch, useSelector } from 'react-redux'
import {
  changeIngredients,
  changeRecipe,
  changeTitle,
  updateItems,
  updateWindowClose
} from '../../../../../../redux/ducks/cardsReducer'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function UpdateWindow (props) {
  const useUpdateId = useSelector(state => state.cards.useUpdateId);
  const title = useSelector(state => state.cards.title);
  const ingredients = useSelector(state => state.cards.ingredients);
  const recipe = useSelector(state => state.cards.recipe);
  const dispatch = useDispatch();

  const titleChange = (e) => {
  dispatch(changeTitle(e.target.value))
  }
  const ingredientsChange = (e) => {
    dispatch(changeIngredients(e.target.value))
  }
  const recipeChange = (e) => {
    dispatch(changeRecipe(e.target.value))
  }
  const handleUpdate = (id, title, ingredients, recipe) => {
    dispatch(updateItems(id, title,ingredients, recipe))
  }
  const closeUpdateWindow = () => {
    dispatch(updateWindowClose())
  }

  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div style={{textAlign: 'right'}}>
          <FontAwesomeIcon icon={faTimes} className={classes.esq} onClick={closeUpdateWindow} />
        </div>
        <h2>Изменить</h2>
        <div><input type="text" value={title} onChange={titleChange}/></div>
        <div><input type="text" value={ingredients} onChange={ingredientsChange} /></div>
        <div><input type="text" value={recipe} onChange={recipeChange} /></div>
        <div>
          <button onClick={() => handleUpdate(useUpdateId, title, ingredients, recipe)}>
            Изменить
          </button>
        </div>
      </div>
    </div>
  )
}

export default UpdateWindow