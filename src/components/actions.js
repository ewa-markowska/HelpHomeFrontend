export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_USER_ID = "SET_USER_ID";
export const LOGOUT_USER = "LOGOUT_USER";

export function setUserEmail(email) {
  return {
    type: SET_USER_EMAIL,
    payload: email,
  };
}

export function setUserId(userId) {
  return {
    type: SET_USER_ID,
    payload: userId,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}
