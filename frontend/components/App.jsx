import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import Sidebar from "./sidebar/sidebar_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Navbar from "../components/navbar/navbar_conatiner";
import VideoForm from "../components/video/video_form_container";
import VideoIndex from "../components/video/video_index_container";
import VideoShow from "../components/video/video_show_container"


const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" exact component={LoginFormContainer} />
      <AuthRoute path="/signup" exact component={SignUpFormContainer} />
      <ProtectedRoute path="/upload" exact component={VideoForm} />
      <Route path="/videos/:videoId" exact component={VideoShow} />
      <Route path="/">
        <Sidebar />
        {/* <VideoForm /> */}
        <VideoIndex />
        {/* <Navbar /> */}
      </Route>
      {/* <Route component={Error} /> */}
    </Switch>
  </div>
);

export default App;
