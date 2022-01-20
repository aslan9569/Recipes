import React from 'react';
import classes from './main.module.css';
import Recipes from './Recipes/Recipes';
import { Route } from 'react-router-dom';
import News from './News/News';
import Ideas from './Ideas/Ideas';
import Authors from './Authors/Authors';
import Kitchen from './Kitchen/Kitchen';

function Main (props) {



  return (
    <div className={classes.container}>
      <Route exact path="/">
        <h1 style={{textAlign: 'center'}}>Главная</h1>
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
        <Authors />
      </Route>
      <Route path="/kitchen">
        <Kitchen />
      </Route>
    </div>
  )
}

export default Main