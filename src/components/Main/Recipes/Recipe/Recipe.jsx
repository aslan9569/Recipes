import React, { useEffect } from 'react';
import { Route, useParams } from 'react-router-dom';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllCards, loadCards } from '../../../../redux/ducks/cardsReducer';
import RecipeWindow from './RecipeWindow/RecipeWindow';
import ReactLoading from 'react-loading';
import classes from './recipe.module.css';
import ReviewsWindow from './ReviewsWindow/ReviewsWindow'


function Recipe (props) {
  const id = useParams().id;
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards.items);
  const allCards = useSelector(state => state.cards.allItems);
  const openRecipe = useSelector(state => state.cards.openWindow);
  const loadAllCards = useSelector(state => state.cards.loadAllCards);
  const loadingCards = useSelector(state => state.cards.loadingCards);
  const filterRecipe = useSelector(state => state.cards.filterRecipes);
  const reviewsOpen = useSelector(state => state.reviews.reviewsOpen);

  useEffect(() => {
    dispatch(loadCards(id))
  }, [id])

  const filteredAllCards = allCards.filter(card => {
    return card.title.toLowerCase().includes(filterRecipe.toLowerCase())
  });
  const filteredCards = cards.filter(card => {
    return card.title.toLowerCase().includes(filterRecipe.toLowerCase())
  });

  return (
    <div>
      {reviewsOpen && <ReviewsWindow />}
      {loadAllCards || loadingCards ? <div className={classes.spin}>
          <ReactLoading type={'spin'} color={'#7729b7'} height={'40px'} width={'40px'}  />
      </div> :
        (
        id === undefined ? filteredAllCards.map(card => <Card card={card} key={card.id} />) : filteredCards.map(card => <Card card={card} key={card.id} />)
      )}
      {openRecipe && <RecipeWindow allCards={allCards} cards={cards} />}
    </div>
  )
}

export default Recipe