import React, { useEffect } from "react";
import Categories from "./Categories/Categories";
import Input from "./Input/Input";
import Recipe from "./Recipe/Recipe";
import classes from "./recipes.module.css";
import { Route } from "react-router-dom";

function Recipes(props) {
  return (
    <div>
      <div className={classes.fixed}>
        <Categories />
        <Input />
      </div>
      <Route path="/recipes/:id?">
        <Recipe />
      </Route>
    </div>
  );
}

export default Recipes;
