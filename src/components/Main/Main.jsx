import React from 'react';
import classes from './main.module.css'
import Recipes from './Recipes/Recipes'
import { Route } from 'react-router-dom'
import News from './News/News'
import Ideas from './Ideas/Ideas'
import Authors from './Authors/Authors'
import Kitchen from './Kitchen/Kitchen'
import Contacts from './Contacts'
import { useSelector } from 'react-redux'
import { Switch, Redirect } from 'react-router-dom'

function Main (props) {
  const token = useSelector(state => state.users.token);
  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Redirect to="/contacts" />
      </Switch>
    )
  }


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
      {routes}
    </div>
  )
}

export default Main