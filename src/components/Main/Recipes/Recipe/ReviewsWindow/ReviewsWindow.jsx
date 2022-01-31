import React, { useEffect, useState } from "react";
import classes from "./reviewsWindow.module.css";
import Review from "./Review/Review";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  loadComments,
  postComment,
  reviewsClose,
} from "../../../../../redux/ducks/reviewsReducer";
import ReactLoading from "react-loading";

function ReviewsWindow(props) {
  const dispatch = useDispatch();
  const commentId = useSelector((state) => state.reviews.commentId);
  const comments = useSelector((state) => state.reviews.items);
  const loadingComments = useSelector((state) => state.reviews.loadingComments);
  const nameRecipe = useSelector((state) => state.reviews.nameRecipe);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleReviewsClose = () => {
    dispatch(reviewsClose());
  };
  useEffect(() => {
    dispatch(loadComments(commentId));
  }, [commentId]);

  const handlePostComment = (commentId, id, name, comment) => {
    dispatch(postComment(commentId, id, name, comment));
    setName("");
    setComment("");
  };

  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.close}>
          <FontAwesomeIcon
            icon={faTimes}
            className={classes.esq}
            onClick={handleReviewsClose}
          />
        </div>
        <h2>{nameRecipe}</h2>
        <div className={classes.text}>
          {loadingComments ? (
            <div className={classes.load}>
              <ReactLoading
                type={"spin"}
                color={"#7729b7"}
                height={25}
                width={25}
              />
            </div>
          ) : (
            comments.map((comment) => {
              return <Review comment={comment} key={comment.id} />;
            })
          )}
        </div>
        <div className={classes.input}>
          <div className={classes.ipt}>
            <input
              type="text"
              placeholder="Введите свое имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <textarea
              placeholder="Ведите свой комментарий"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button
              onClick={() =>
                handlePostComment(commentId, comments.length, name, comment)
              }
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsWindow