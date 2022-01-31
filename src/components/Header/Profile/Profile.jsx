import classes from './profile.module.css';
import React from 'react';
import Authorization from "../Authorization/Authorization";
import { useDispatch, useSelector } from "react-redux";
import { logout, openWindow } from "../../../redux/ducks/usersReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { addOpen } from "../../../redux/ducks/cardsReducer";
import AddModal from "./addRecipe/AddModal";
import { Link } from "react-router-dom";

function Profile(props) {
  const window = useSelector((state) => state.users.openWindow);
  const addWindow = useSelector((state) => state.cards.addWindow);
  const userName = useSelector((state) => state.users.name);
  const login = useSelector((state) => state.users.token);

  const dispatch = useDispatch();

  const handleOpenWindow = () => {
    dispatch(openWindow());
  };
  const openAddWindow = () => {
    dispatch(addOpen());
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={classes.sign}>
      <div className={classes.myBook}>
        <div className={classes.book}>
          <Link to="/myrecipes">
            <FontAwesomeIcon icon={faBook} />
          </Link>
        </div>
        <Link to="/myrecipes">
          <div>Моя книга рецептов</div>
        </Link>
      </div>
      <div className={classes.addRecipes}>
        <div className={classes.user}>
          {userName === "" ? "вы вошли как гость" : `${userName}`}
        </div>
        <div>
          {login === null ? (
            <button
              type="button"
              className={classes.signIn}
              onClick={handleOpenWindow}
            >
              Войти
            </button>
          ) : (
            <button
              type="button"
              className={classes.signIn}
              onClick={handleLogout}
            >
              Выйти
            </button>
          )}
        </div>
        <div className={classes.add} onClick={openAddWindow}>
          Добавить рецепт
        </div>
      </div>
      {addWindow && <AddModal />}
      {window ? <Authorization /> : true}
    </div>
  );
}

export default Profile