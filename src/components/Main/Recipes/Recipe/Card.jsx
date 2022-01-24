import React, { useEffect } from 'react';
import classes from './recipe.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRecipe, favoriteAdd, favoriteDelete, openWindowRecipe, } from '../../../../redux/ducks/cardsReducer';
import { reviewsOpen } from '../../../../redux/ducks/reviewsReducer';




function Card (props) {
  const dispatch = useDispatch();

  const openRecipeWindow = (id) => {
    dispatch(openWindowRecipe(id))
  }
  const handleDeleteRecipe = (e, id) => {
    e.stopPropagation()
    dispatch(deleteRecipe(id))
  }
  const handleFavoriteRecipe = (e, id) => {
    e.stopPropagation()
    dispatch(favoriteAdd(id))
  }
  const handleDeleteFavorite = (e, id) => {
    e.stopPropagation()
    dispatch(favoriteDelete(id))
  }
  const handleReviewsOpen = (e, id, title) => {
    e.stopPropagation()
    dispatch(reviewsOpen(id, title))
  }


  const limitText = (str, n, symb) => {
  if (!n && !str) return str;
  symb = '...'
    return str.substr(0, n - symb.length) + symb;
  }

  return (
      <div>
         <div className={classes.container} onClick={() => openRecipeWindow(props.card.id)}>
           <div className={classes.image}>
             <img src={props.card.igm} alt=""/>
           </div>
           <div className={classes.info}>
             <h2>{props.card.title}</h2>
             <div className={classes.text}>{
               limitText(props.card.description, 224, '...')
             }</div>
             <div className={classes.buttons}>
               <div className={classes.add}>
                 {props.card.favorite ? (
                   <button onClick={e => handleDeleteFavorite(e, props.card.id)}>
                     Удалить из книги рецептов
                   </button>
                 ) : (
                   <button onClick={(e) => handleFavoriteRecipe(e, props.card.id)}>
                     Добавить в книгу рецептов
                   </button>
                 )}
               </div>
               <div className={classes.reviews}>
                 <button onClick={(e) => handleReviewsOpen(e, props.card.id, props.card.title)}>
                   Отзывы
                 </button>
               </div>
               <div className={classes.recipe}>
                 <button
                   onClick={(e) => handleDeleteRecipe(e,props.card.id)}
                 >
                   Удалить
                 </button>
               </div>
             </div>
           </div>
         </div>
      </div>
  )
}

export default Card