import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import Navbar from "../components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const App = () => (
  <div>
    <Navbar />
    <Route path="/" exact component={GreetingContainer} />
    <AuthRoute path="/login" exact component={LoginFormContainer} />
    <AuthRoute path="/signup" exact component={SignUpFormContainer} />
  </div>
);

export default App;
