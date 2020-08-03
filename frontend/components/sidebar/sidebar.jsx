import React from "react";
import { Link } from "react-router-dom";
import Modals from "../modal/modal";
import Navbar from "../navbar/navbar_conatiner";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.demoUser();
  }

  sibarnav() {
    return <div></div>;
  }

  render() {
    let status;
    if (this.props.currentUser.id) {
      status = (
        <div>
          <p>Welcome {this.props.currentUser.username}</p>
          <button onClick={this.props.logout}>Log out</button>
        </div>
      );
    } else {
      status = (
        <div>
          <div className="bpadding2">
            <Modals classname={"LogButtonSide2"} />
          </div>
          <div>
            <button className="LogButtonSide3" onClick={this.handleSubmit}>
              Demo User
            </button>
          </div>
        </div>
      );
    }
    return (
      <div>
          <Navbar className="padding-reset" />
        <div className="sidenav zin">
          <div className="bpadding">
            <span className="disp1 box active">
              <img src={window.house} alt="littok" height="35" width="35" />
              For You
            </span>
            <span className="disp1 box not-active">
              <img src={window.hash} alt="littok" height="30" width="30" />
              Discover
            </span>
            <span className="disp1 box not-active">
              <img src={window.social} alt="littok" height="30" width="35" />
              Following
            </span>
          </div>
          <p className="smallgrey">
            Log in to follow creators, like videos, and comments.
          </p>
          {status}
        </div>
      </div>
    );
  }
}

export default Sidebar;
