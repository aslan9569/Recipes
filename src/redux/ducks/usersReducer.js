const initialState = {
  contactsLoading: false,
  openWindow: false,
  admin: JSON.parse(localStorage.getItem("admin")) || false,
  user: JSON.parse(localStorage.getItem("user")) || false,
  token: localStorage.getItem("token") || null,
  error: false,
  name: localStorage.getItem("name") || "",
  authorizing: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "window/open":
      return {
        ...state,
        openWindow: true,
      };
    case "window/close":
      return {
        ...state,
        openWindow: false,
      };
    case "access/admin":
      return {
        ...state,
        user: false,
        admin: true,
        error: false,
        openWindow: false,
        name: action.payload.name,
        token: action.payload.token,
        authorizing: true,
      };
    case "access/user":
      return {
        ...state,
        user: true,
        admin: false,
        error: false,
        openWindow: false,
        name: action.payload.name,
        token: action.payload.token,
        authorizing: true,
      };
    case "logout/start":
      return {
        ...state,
        openWindow: false,
        admin: false,
        user: false,
        token: null,
        error: false,
        name: "",
        authorizing: false,
      };

    default:
      return state;
  }
};
export default usersReducer;

// Actions

export const openWindow = () => {
  return {
    type: "window/open",
  };
};

export const closeWindow = () => {
  return {
    type: "window/close",
  };
};
export const loginStart = (login, password) => {
  return (dispatch) => {
    fetch(`/authorization`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login: login,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem("token", json.token);
        localStorage.setItem("name", json.name);
        localStorage.setItem("user", "true");
        localStorage.setItem("admin", "false");
        dispatch({
          type: "access/user",
          payload: json,
        });
        if (json.login === "admin" && json.password === "admin") {
          localStorage.setItem("token", json.token);
          localStorage.setItem("name", json.name);
          localStorage.setItem("user", "false");
          localStorage.setItem("admin", "true");
          dispatch({
            type: "access/admin",
            payload: json,
          });
        }
      });
  };
};
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  localStorage.removeItem("user");
  localStorage.removeItem("admin");
  return {
    type: "logout/start",
  };
};



