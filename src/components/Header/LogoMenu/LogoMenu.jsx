import React from "react";
import classes from "./logomenu.module.css";
import { Link } from "react-router-dom";

function LogoMenu(props) {
  return (
    <div className={classes.menu}>
      <Link to="/">
        <div className={classes.logo}>Еда</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/recipes">Рецепты</Link>
          </li>
          <li>
            <Link to="/news">Новости</Link>
          </li>
          <li>
            <Link to="/ideas">Идеи</Link>
          </li>
          <li>
            <Link to="/authors">Информация</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LogoMenu