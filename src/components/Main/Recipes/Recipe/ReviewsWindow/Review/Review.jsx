import React from "react";
import classes from "./review.module.css";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../../../../../redux/ducks/reviewsReducer";

function Review(props) {
  const dispatch = useDispatch();

  const handleDeleteComment = (id) => {
    dispatch(deleteComment(id));
  };

  return (
    <div className={classes.comment}>
      <div className={classes.name}>{props.comment.name}</div>
      <p>{props.comment.body}</p>
      <button onClick={() => handleDeleteComment(props.comment.id)}>
        Удалить
      </button>
    </div>
  );
}

export default Review