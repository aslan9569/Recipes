import React from 'react';
import classes from './categories.module.css';
import { Link, useParams } from 'react-router-dom'

function Category (props) {

  return (
    <div>
      <Link to={`/recipes/${props.id}`}>
        <div className={classes.category}>
          {props.category.category}
        </div>
      </Link>
    </div>
  )
}

export default Category