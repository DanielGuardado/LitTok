import React from "react";
import ReactDOM from "react-dom";
import configuereStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { currentUser: window.currentUser },
    };
    store = configuereStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configuereStore();
  }
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
