import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/login" className="LogButtonSide">
              Login
            </Link>
          </div>
          <div>
            <button className="LogButtonSide2" onClick={this.handleSubmit}>
              Demo User
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="sidenav">
        <div className="bpadding">
          <span className="disp1 active">For You</span>
          <span className="disp1">Discover</span>
          <span className="disp1">Following</span>
        </div>
        <p className="smallgrey">
          Log in to follow creators, like videos, and comments.
        </p>
        {status}
      </div>
    );
  }
}

export default Sidebar;
