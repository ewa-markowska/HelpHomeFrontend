import { SET_USER_EMAIL, SET_USER_ID, LOGOUT_USER } from "./actions";

const initialState = {
  userEmail: null,
  userId: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_EMAIL:
      return { ...state, userEmail: action.payload };
    case SET_USER_ID:
      return { ...state, userId: action.payload };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;