const initialState = {
  contacts: [],
  contactsLoading: false,
  token: "",
  authorizing: false,
  openWindow: false,
  error: false
}


const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'window/open' :
      return {
        ...state,
        openWindow: true
      }
    case 'window/close' :
      return {
        ...state,
        openWindow: false
      }
    case 'auth/started':
      return {
        ...state,
        authorizing: true
      }
    case 'auth/succeed':
    return {
      ...state,
      token: action.payload.token,
      authorizing: false,
      openWindow: false
    }
    case 'auth/fail':
      return {
        ...state,
        authorizing: false,
        error: true
      }



    default :
      return state
  }
}
export default usersReducer;


// Actions

export const openWindow = () => {
  return {
    type: 'window/open'
  }
}

export const closeWindow = () => {
  return {
    type: 'window/close'
  }
}
export const loginStart = (login, password) => {
  return dispatch => {
    dispatch({ type: 'auth/started' })
    fetch(`http://localhost:3001/admin`)
      .then(response => response.json())
      .then(json => {
        const random = Math.random()
        if (random < 0.5) {
          //error
          dispatch({
            type: 'auth/fail',
            payload: json
          })
        } else {
          dispatch({
            type: 'auth/succeed',
            payload: json
          })
        }
      })

  }
}



