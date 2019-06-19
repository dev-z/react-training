import { createStore } from "redux";

import { LOG_IN, LOG_OUT } from "./actionTypes";

const initialState = {
  auth: {
    loggedIn: false
  },
  user: null
};

export default function createMyStore() {
  const store = createStore((state = initialState, action) => {
    switch (action.type) {
      case LOG_IN:
        return { ...state, auth: {loggedIn: true}, user: { email: action.data } };
      case LOG_OUT:
        return initialState;
      default:
        return state;
    }
  });
  return store;
}
