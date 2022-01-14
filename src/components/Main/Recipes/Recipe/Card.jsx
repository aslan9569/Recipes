import React from 'react';
import classes from './recipe.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeWindowRecipe, openWindowRecipe } from '../../../../redux/ducks/cardsReducer';




function Card (props) {
  const dispatch = useDispatch();

  const openRecipeWindow = (id) => {
    dispatch(openWindowRecipe(id))
  }

  return (
      <div>
         <div className={classes.container} onClick={() => openRecipeWindow(props.card.id)}>
           <div className={classes.image}>
             <img src={props.card.igm} alt=""/>
           </div>
           <div className={classes.info}>
             <h2>{props.card.title}</h2>
             <div className={classes.text}>{props.card.description}</div>
             <div className={classes.buttons}>
               <div className={classes.add}>
                 <button>Добавить в книгу рецептов</button>
               </div>
               <div className={classes.recipe}>
                 <button>Удалить</button>
               </div>
             </div>
           </div>
         </div>
      </div>
  )
}

export default Card