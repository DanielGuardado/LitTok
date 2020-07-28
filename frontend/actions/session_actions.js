export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import * as APIUtil from "../util/session_api_util";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const login = (user) => (dispatch) =>
  APIUtil.login(user).then((user) => dispatch(receiveUser(user)));

export const logout = () => (dispatch) =>
  APIUtil.logout().then(() => dispatch(logoutUser()));

export const signUp = (user) => (dispatch) =>
  APIUtil.signUp(user).then((user) => dispatch(receiveUser(user)));

export const demoUser = () => (dispatch) =>
  APIUtil.demoUser().then(user => dispatch(receiveUser(user)))
