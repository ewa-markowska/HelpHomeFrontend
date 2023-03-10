export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_USER_ID = "SET_USER_ID";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_USER_LOGIN_STATUS = "SET_USER_LOGIN_STATUS";

export function setUserLoginStatus(status) {
  return {
    type: SET_USER_LOGIN_STATUS,
    payload: status,
  };
}

export function setUserEmail(email) {
  console.log(`Dispatching action SET_USER_EMAIL with payload ${email}`);
  return {
    type: SET_USER_EMAIL,
    payload: email,
  };
}

export function setUserId(userId) {
  console.log(`Dispatching action SET_USER_ID with payload ${userId}`);

  return {
    type: SET_USER_ID,
    payload: userId,
  };
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(setUserEmail(null));
    dispatch(setUserId(null));
    dispatch({
      type: LOGOUT_USER,
    });
  };
}