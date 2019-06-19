import { LOG_IN, LOG_OUT } from "./actionTypes";

export const logOut = () => ({
  type: LOG_OUT
});

export const logIn = (email) => ({
  data: email,
  type: LOG_IN
});