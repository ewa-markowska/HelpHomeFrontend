import { SET_USER_LOGIN_STATUS, SET_USER_EMAIL, SET_USER_ID, LOGOUT_USER } from "./actions";

const initialState = {
  userEmail: null,
  userId: null,
  isLoggedIn: false,
};

export const isLoggedInSelector = state => !!state.auth?.userEmail;

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case  SET_USER_LOGIN_STATUS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case SET_USER_EMAIL:
      return { ...state, userEmail: action.payload };
    case SET_USER_ID:
      return { ...state, userId: action.payload };
    case LOGOUT_USER:
      return { ...state, isLoggedIn: false}
    default:
      return state;
  }
};

export default reducers;
