import { type } from '@testing-library/user-event/dist/type'

const initialState = {
  items: [],
  allItems: [],
  loadingCards: false,
  loadAllCards: false,
  openWindow: false,
  idWindow: null,
  filterRecipes: '',
  addWindow: false
}


const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cards/load/start':
      return {
        ...state,
        loadingCards: true
      }
    case 'cards/load/success' :
      return {
        ...state,
        items: action.payload,
        loadingCards: false
      }
    case 'load/allCards/start':
      return {
        ...state,
        loadAllCards: true
      }
    case 'load/allCards/success':
      return {
        ...state,
        allItems: action.payload,
        loadAllCards: false
      }
    case 'recipe/open':
      return {
        ...state,
        openWindow: true,
        idWindow: action.payload
      }
    case 'recipe/close' :
      return {
        ...state,
       openWindow: false
      }
    case 'recipe/filter' :
      return {
        ...state,
        filterRecipes: action.payload
      }
    case 'open/add/recipe':
      return {
        ...state,
        addWindow: true
      }
    case 'close/add/recipe':
    return {
      ...state,
      addWindow: false
    }
    case 'add/recipe/success':
      return {
        ...state,
        allItems: [...state.allItems, action.payload]
      }


    default :
      return state
  }
}
export default cardsReducer;



// Actions

export const loadCards = (id) => {
  return dispatch => {
    dispatch({ type: 'cards/load/start' })

    fetch(`http://localhost:3001/recipes?categoryId=${id}`)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'cards/load/success',
          payload: json
        })
      })

  }
}
export const loadAllCards = () => {
  return dispatch => {
    dispatch({ type: 'load/allCards/start' })

    fetch('http://localhost:3001/recipes')
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'load/allCards/success',
          payload: json
        })
      })

  }
}
export const openWindowRecipe = (id) => {
  return {
    type: 'recipe/open',
    payload: id
  }
}
export const closeWindowRecipe = () => {
  return {
    type: 'recipe/close'
  }
}
export const filterRecipe = (text) => {
  return {
    type: 'recipe/filter',
    payload: text
  }
}
export const addOpen = () => {
  return {
    type: 'open/add/recipe'
  }
}
export const addClose = () => {
  return {
    type: 'close/add/recipe'
  }
}
export const addRecipe = (id,category, image, title, description, ingredients, recipe) => {
  return dispatch => {
    dispatch({ type: 'add/recipe/start' })
    fetch('http://localhost:3001/recipes', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        igm: image,
        video: '',
        categoryId: category,
        title: title,
        description: description,
        favorite: false,
        ingredients: ingredients,
        recipe: recipe
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'add/recipe/success',
          payload: json
        })
      })
  }
}