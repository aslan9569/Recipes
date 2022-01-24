import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src'
import usersReducer from './ducks/usersReducer'
import categoriesReducer from './ducks/categoriesReducer'
import cardsReducer from './ducks/cardsReducer'
import reviewsReducer from './ducks/reviewsReducer'

const logger = createLogger({
  diff: true,
  collapsed: true
})

const rootReducer = combineReducers({
  users: usersReducer,
  categories: categoriesReducer,
  cards: cardsReducer,
  reviews: reviewsReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;