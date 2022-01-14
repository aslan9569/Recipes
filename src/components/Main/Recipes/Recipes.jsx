import React, { useEffect } from 'react'
import Categories from './Categories/Categories';
import Input from './Input/Input';
import Recipe from './Recipe/Recipe';
import classes from './recipes.module.css';
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadAllCards } from '../../../redux/ducks/cardsReducer'

function Footer () {
  return null
}

function Recipes (props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllCards())
  }, [])



  return (
    <div>
     <div className={classes.fixed}>
       <Categories />
       <Input />
     </div>
      <Route path="/recipes/:id?">
        <Recipe />
      </Route>

    </div>
  )
}

export default Recipes