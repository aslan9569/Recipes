import React from 'react';
import classes from './window.module.css';

function RecipeInfo (props) {
  return (
    <div>
      <h1 className={classes.title}>{props.card.title}</h1>
      <p className={classes.ingredients}>{props.card.ingredients}</p>
      <div className={classes.recipe}>{props.card.recipe}</div>
      <div>
        <iframe className={classes.video} src={props.card.video} title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default RecipeInfo