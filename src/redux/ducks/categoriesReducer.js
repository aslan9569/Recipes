const initialState = {
  items: [],
  loadCategories: false
}


const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'categories/load/start' :
      return {
        ...state,
        loadCategories: true
      }
    case 'categories/load/success' :
      return {
        ...state,
        items: action.payload,
        loadCategories: false
      }

    default :
      return state
  }
}
export default categoriesReducer;



// Actions

export const loadCategories = () => {
  return (dispatch) => {
    dispatch({type: 'categories/load/start'})

    fetch('/categories')
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'categories/load/success',
          payload: json
        })
      })
  }
}