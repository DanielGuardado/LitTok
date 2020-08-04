import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const Auth = ({ path, component: Component, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      loggedIn ? <Redirect to="/foryou" /> : <Component {...props} />
    }
  />
);

const Protected = ({ path, component: Component, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      loggedIn ? <Component {...props} /> : <Redirect to="/foryou" />
    }
  />
);

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected)
);
