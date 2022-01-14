import React, { useEffect } from 'react'
import classes from './categories.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { loadCategories } from '../../../../redux/ducks/categoriesReducer'
import Category from './Category'

function Categories (props) {
  const categories = useSelector(state => state.categories.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories())
  },[])


  return (
    <div className={classes.container}>
      {categories.map(category => <Category category={category} id={category.id} key={category.id} />)}
    </div>
  )
}

export default Categories