import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import Sidebar from "./sidebar/sidebar_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import Navbar from "../components/navbar/navbar_conatiner";
import VideoForm from '../components/video/video_form_container'

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" exact component={LoginFormContainer} />
      <AuthRoute path="/signup" exact component={SignUpFormContainer} />
      <Route path="/">
        <Navbar />
        <Sidebar />
        <VideoForm />
      </Route>
    </Switch>
  </div>
);

export default App;
