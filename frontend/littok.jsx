import React from "react";
import ReactDOM from "react-dom";
import { login, logout, signUp } from "./actions/session_actions";
import configuereStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id },
    };
    store = configuereStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configuereStore();
  }
  const root = document.getElementById("root");
  window.login = login;
  window.logout = logout;
  window.signUp = signUp;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, root);
});
