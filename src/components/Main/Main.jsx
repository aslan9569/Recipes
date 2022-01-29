import React from 'react';
import classes from './main.module.css';
import Recipes from './Recipes/Recipes';
import { Route } from 'react-router-dom';
import News from './News/News';
import Ideas from './Ideas/Ideas';
import MyRecipes from './MyRecipes/MyRecipes'
import Info from './Info/Info'
import FirstPage from './FirstPage/FirstPage'

function Main (props) {



  return (
    <div className={classes.container}>
      <Route exact path="/">
        <FirstPage />
      </Route>
      <Route path="/myrecipes">
        <MyRecipes />
      </Route>
      <Route path="/recipes">
        <Recipes />
      </Route>
      <Route path="/news">
        <News />
      </Route>
      <Route path="/ideas">
        <Ideas />
      </Route>
      <Route path="/authors">
        <Info />
      </Route>
    </div>
  )
}

export default Main