import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "./AuthContant";

export const registerUser = (data) => ({
  type: REGISTER_USER,
  payload: data,
});

export const loginUser = (data) => ({
  type: LOGIN_USER,
  payload: data,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
