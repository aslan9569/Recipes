import React from "react";
import classes from "./window.module.css";
import { useDispatch, useSelector } from "react-redux";
import { openUpdateWindow } from "../../../../../redux/ducks/cardsReducer";
import UpdateWindow from "./updateWindow/UpdateWindow";
import PropTypes from 'prop-types';

function RecipeInfo(props) {
  const dispatch = useDispatch();
  const updateWindow = useSelector((state) => state.cards.updateWindow);
  const updateTextWindow = (id, title, ingredients, recipe) => {
    dispatch(openUpdateWindow(id, title, ingredients, recipe));
  };
  return (
    <div>
      {updateWindow && <UpdateWindow />}
      <h1 className={classes.title}>{props.card.title}</h1>
      <p className={classes.ingredients}>{props.card.ingredients}</p>
      <div className={classes.recipe}>
        {props.card.recipe}
        <div>
          <button
            className={classes.update}
            onClick={() =>
              updateTextWindow(
                props.card.id,
                props.card.title,
                props.card.ingredients,
                props.card.recipe
              )
            }
          >
            Изменить
          </button>
        </div>
      </div>
      <div>
        <iframe
          className={classes.video}
          src={props.card.video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
RecipeInfo.propTypes = {
  card: PropTypes.object.isRequired
}

export default RecipeInfo