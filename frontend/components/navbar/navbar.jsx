import React from "react";
import { Link } from "react-router-dom";
import Modals from "../modal/modal";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  uploadBtn() {
    if (this.props.currentUser.id) {
      return (
        <div>
          <Link to="/upload">
            <img className="upload-btn" src={window.upload} alt="upload" />
          </Link>
        </div>
      );
    } else {
      return (
        <Link to="/login">
          <img className="upload-btn2" src={window.upload} alt="upload" />
        </Link>
        // <Modals classname={"LogButton"}>
        //   <img className="upload-btn" src={window.upload} alt="upload" />
        // </Modals>
      );
    }
  }

  avatar() {
    if (this.props.currentUser.id) {
      return (
        <div>
          <Link to={`/users/${this.props.currentUser.id}`}>
            <img
              className="p-1 rounded-circle img-thumbnail-p3"
              src={this.props.currentUser.pro_pic}
              alt="avi"
            />
          </Link>
        </div>
      );
    }
  }

  render() {
    let loggedIn;
    if (this.props.currentUser.id) {
      loggedIn = (
        <button className="LogoutButton" onClick={this.props.logout}>
          Logout
        </button>
      );
    } else {
      loggedIn = <Modals classname={"LogButton"} />;
      // loggedIn = this.props.login
    }
    return (
      <div className="navbar1 underline flex space-between fixed">
        <Link to="/foryou">
          <img src={window.logo} alt="littok" height="40" width="150" />
        </Link>

        {/* <Link to="/upload">
          <img className="upload-btn" src={window.upload} alt="upload" />
        </Link> */}
        {this.uploadBtn()}
        {this.avatar()}
        {loggedIn}
      </div>
    );
  }
}

export default Navbar;
