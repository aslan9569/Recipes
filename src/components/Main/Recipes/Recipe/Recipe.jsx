import React, { useEffect } from 'react'
import { Route, useParams } from 'react-router-dom'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { loadAllCards, loadCards } from '../../../../redux/ducks/cardsReducer'
import RecipeWindow from './RecipeWindow/RecipeWindow'


function Recipe (props) {
  const id = useParams().id;
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards.items);
  const allCards = useSelector(state => state.cards.allItems);
  const openRecipe = useSelector(state => state.cards.openWindow);

  useEffect(() => {
    dispatch(loadCards(id))
  }, [id])

  return (
    <div>
      {id === undefined ? allCards.map(card => <Card card={card} key={card.id} />) : cards.map(card => <Card card={card} key={card.id} />)}
      {openRecipe && <RecipeWindow allCards={allCards} cards={cards} />}
    </div>
  )
}

export default Recipe