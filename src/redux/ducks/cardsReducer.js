const initialState = {
  items: [],
  allItems: [],
  loadCards: false,
  openWindow: false,
  idWindow: null
}


const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cards/load/start':
      return {
        ...state,
        loadCards: true
      }
    case 'cards/load/success' :
      return {
        ...state,
        items: action.payload,
        loadCards: false
      }
    case 'load/all/cards':
      return {
        ...state,
        allItems: action.payload
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

    fetch('http://localhost:3001/recipes')
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'load/all/cards',
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
