import React from "react";
import classes from "./firstPage.module.css";

function FirstPage(props) {
  return (
    <div>
      <h1>Главная</h1>
      <div className={classes.text}>
        <div className={classes.imageBlock}>
          <div className={classes.fon}>
            <div className={classes.title}>
              Только лучшиие рецепты на нашем сайте....
            </div>
            <div className={classes.description}>
              Погрузитесь в атмосферу гастрономичсеского удовольствия Выбери
              рецепт по вкусу и добавь его в свою книгу!
              <br />
              Есть прикольный рецуепт? Ты можешь добавить его!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage