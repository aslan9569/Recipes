import React from "react";
import classes from "./myRecipes.module.css";
import { useSelector } from "react-redux";
import Card from "../Recipes/Recipe/Card";
import RecipeWindow from "../Recipes/Recipe/RecipeWindow/RecipeWindow";
import ReactLoading from "react-loading";
import Input from "../Recipes/Input/Input";

function MyRecipes(props) {
  const allCards = useSelector((state) => state.cards.allItems);
  const openRecipe = useSelector((state) => state.cards.openWindow);
  const loadAllCards = useSelector((state) => state.cards.loadAllCards);
  const filterRecipe = useSelector((state) => state.cards.filterRecipes);
  const filteredAllCards = allCards.filter((card) => {
    return card.title.toLowerCase().includes(filterRecipe.toLowerCase());
  });
  return (
    <div>
      {loadAllCards ? (
        <div className={classes.spin}>
          <ReactLoading
            type={"spin"}
            color={"#7729b7"}
            height={"40px"}
            width={"40px"}
          />
        </div>
      ) : (
        <div className={classes.container}>
          <h1>Мои рецепты</h1>
          <Input />
          {filteredAllCards.map((card) => {
            if (card.favorite === true) {
              return <Card card={card} key={card.id} />;
            }
          })}
          {openRecipe && <RecipeWindow allCards={allCards} />}
        </div>
      )}
    </div>
  );
}

export default MyRecipes