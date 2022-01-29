import React, { useState } from 'react'
import classes from './authorization.module.css';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from 'react-redux'
import { closeWindow, loginStart } from '../../../redux/ducks/usersReducer'



function Authorization (props) {
  const dispatch = useDispatch();
  const handleCloseWindow = () => {
    dispatch(closeWindow())
  }
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");


  const handleClick = () => {
  dispatch(loginStart(login, pass))
  }



  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <div className={classes.esc}>
          <div onClick={handleCloseWindow}>
              <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        <h1>Авторизация</h1>
        <form>
          <div><input
            type="text"
            className={classes.ipt}
            placeholder="Логин"
            value={login}
            onChange={e => setLogin(e.target.value)}
          /></div>
          <div><input
            type="password"
            className={classes.ipt}
            placeholder="Пароль"
            value={pass}
            onChange={e => setPass(e.target.value)}
          /></div>
          <div className={classes.error}>login: admin, password: admin</div>
          <div>
            <button
              type="button"
            className={classes.button}
            onClick={handleClick}
          >Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Authorization