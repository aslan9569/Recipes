import { type } from "@testing-library/user-event/dist/type";

const initialState = {
  items: [],
  allItems: [],
  loadingCards: false,
  loadAllCards: false,
  openWindow: false,
  idWindow: null,
  filterRecipes: "",
  addWindow: false,
  updateWindow: false,
  useUpdateId: null,
  title: "",
  ingredients: "",
  recipe: "",
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cards/load/start":
      return {
        ...state,
        loadingCards: true,
      };
    case "cards/load/success":
      return {
        ...state,
        items: action.payload,
        loadingCards: false,
      };
    case "load/allCards/start":
      return {
        ...state,
        loadAllCards: true,
      };
    case "load/allCards/success":
      return {
        ...state,
        allItems: action.payload,
        loadAllCards: false,
      };
    case "recipe/open":
      return {
        ...state,
        openWindow: true,
        idWindow: action.payload,
      };
    case "recipe/close":
      return {
        ...state,
        openWindow: false,
      };
    case "recipe/filter":
      return {
        ...state,
        filterRecipes: action.payload,
      };
    case "open/add/recipe":
      return {
        ...state,
        addWindow: true,
      };
    case "close/add/recipe":
      return {
        ...state,
        addWindow: false,
      };
    case "add/recipe/success":
      return {
        ...state,
        allItems: [...state.allItems, action.payload],
        items: [...state.items, action.payload],
      };
    case "open/update/window":
      return {
        ...state,
        updateWindow: true,
        useUpdateId: action.payload,
        title: action.title,
        ingredients: action.ingredients,
        recipe: action.recipe,
      };
    case "change/title":
      return {
        ...state,
        title: action.payload,
      };
    case "change/ingredients":
      return {
        ...state,
        ingredients: action.payload,
      };
    case "change/recipe":
      return {
        ...state,
        recipe: action.payload,
      };
    case "change/load/success":
      return {
        ...state,
        allItems: state.allItems.map((item) => {
          if (item.id === action.id) {
            return action.payload;
          }
          return item;
        }),
        updateWindow: false,
        title: "",
        ingredients: "",
        recipe: "",
      };
    case "update/window/close":
      return {
        ...state,
        updateWindow: false,
      };
    case "delete/load/success":
      return {
        ...state,
        allItems: state.allItems.filter((item) => {
          if (item.id === action.payload) {
            return false;
          }
          return item;
        }),
        items: state.items.filter((item) => {
          if (item.id === action.payload) {
            return false;
          }
          return item;
        }),
      };
    case "favorite/load/success":
      return {
        ...state,
        allItems: state.allItems.map((item) => {
          if (item.id === action.id) {
            return action.payload;
          }
          return item;
        }),
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return action.payload;
          }
          return item;
        }),
      };
    case "favorite/delete/success":
      return {
        ...state,
        allItems: state.allItems.map((item) => {
          if (item.id === action.id) {
            return action.payload;
          }
          return item;
        }),
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return action.payload;
          }
          return item;
        }),
      };

    default:
      return state;
  }
};
export default cardsReducer;

// Actions

export const loadCards = (id) => {
  return (dispatch) => {
    dispatch({ type: "cards/load/start" });

    fetch(`/recipes?categoryId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "cards/load/success",
          payload: json,
        });
      });
  };
};
export const loadAllCards = () => {
  return (dispatch) => {
    dispatch({ type: "load/allCards/start" });

    fetch("/recipes")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load/allCards/success",
          payload: json,
        });
      });
  };
};
export const openWindowRecipe = (id) => {
  return {
    type: "recipe/open",
    payload: id,
  };
};
export const closeWindowRecipe = () => {
  return {
    type: "recipe/close",
  };
};
export const filterRecipe = (text) => {
  return {
    type: "recipe/filter",
    payload: text,
  };
};
export const addOpen = () => {
  return {
    type: "open/add/recipe",
  };
};
export const addClose = () => {
  return {
    type: "close/add/recipe",
  };
};
export const addRecipe = (
  id,
  category,
  image,
  title,
  description,
  ingredients,
  recipe
) => {
  return (dispatch) => {
    dispatch({ type: "add/recipe/start" });
    fetch("/recipes", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        igm: image,
        video: "",
        categoryId: category,
        title: title,
        description: description,
        favorite: false,
        ingredients: ingredients,
        recipe: recipe,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "add/recipe/success",
          payload: json,
        });
      });
  };
};
export const openUpdateWindow = (id, title, ingredients, recipe) => {
  return {
    type: "open/update/window",
    payload: id,
    title: title,
    ingredients: ingredients,
    recipe: recipe,
  };
};
export const changeTitle = (text, id) => {
  return {
    type: "change/title",
    payload: text,
  };
};
export const changeIngredients = (text) => {
  return {
    type: "change/ingredients",
    payload: text,
  };
};
export const changeRecipe = (text) => {
  return {
    type: "change/recipe",
    payload: text,
  };
};
export const updateItems = (id, title, ingredients, recipe) => {
  return (dispatch) => {
    fetch(`/recipes/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: title,
        ingredients: ingredients,
        recipe: recipe,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "change/load/success",
          payload: json,
          id: id,
        });
      });
  };
};
export const updateWindowClose = () => {
  return {
    type: "update/window/close",
  };
};
export const deleteRecipe = (id) => {
  return (dispatch) => {
    fetch(`/recipes/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "delete/load/success",
          payload: id,
        });
      });
  };
};
export const favoriteAdd = (id) => {
  return (dispatch) => {
    fetch(`/recipes/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        favorite: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "favorite/load/success",
          payload: json,
          id: id,
        });
      });
  };
};
export const favoriteDelete = (id) => {
  return (dispatch) => {
    fetch(`/recipes/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        favorite: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "favorite/delete/success",
          payload: json,
          id: id,
        });
      });
  };
};
