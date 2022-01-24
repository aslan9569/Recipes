import { type } from '@testing-library/user-event/dist/type'

const initialState = {
  items: [],
  loadingComments: false,
  reviewsOpen: false,
  commentId: null,
  nameRecipe: ''
}


const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'reviews/open':
      return {
        ...state,
        reviewsOpen: true,
        commentId: action.id,
        nameRecipe: action.title
      }
    case 'reviews/close':
      return {
        ...state,
        reviewsOpen: false
      }
    case 'comments/load/start':
      return {
        ...state,
        loadingComments: true
      }
    case 'comments/load/success':
      return {
        ...state,
        items: action.payload,
        loadingComments: false
      }
    case 'post/comment/success':
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case 'delete/load/success':
      return {
        ...state,
        items: state.items.filter(item => {
          if(item.id === action.payload) {
            return false
          } return item;
        })
      }

    default :
      return state
  }
}
export default reviewsReducer;


// Actions

export const reviewsOpen = (id, title) => {
  return {
    type: 'reviews/open',
    id: id,
    title: title
  }
}
export const reviewsClose = () => {
  return {
    type: 'reviews/close'
  }
}
export const loadComments = (commentId) => {
  return dispatch => {
    dispatch({ type: 'comments/load/start' })

   fetch(`http://localhost:3001/comments?postId=${commentId}`)
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: 'comments/load/success',
        payload: json
      })
    })
  }
}
export const postComment = (commentId, id, name, comment) => {
  return dispatch => {
    fetch('http://localhost:3001/comments', {
      method: 'POST',
      body: JSON.stringify({
        postId: commentId,
        name: name,
        body: comment
      }),
      headers: {
        'Content-type' : 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'post/comment/success',
          payload: json
        })
      })
  }
}
export const deleteComment = (id) => {
  return dispatch => {
    fetch(`http://localhost:3001/comments/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'delete/load/success',
          payload: id
        })
      })

  }
}