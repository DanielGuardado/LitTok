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
          <img className="upload-btn" src={window.upload} alt="upload" />
        </Link>
        // <Modals classname={"LogButton"}>
        //   <img className="upload-btn" src={window.upload} alt="upload" />
        // </Modals>
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
        <Link to="/">
          <img src={window.logo} alt="littok" height="40" width="150" />
        </Link>

        {/* <Link to="/upload">
          <img className="upload-btn" src={window.upload} alt="upload" />
        </Link> */}
        {this.uploadBtn()}
        {loggedIn}
      </div>
    );
  }
}

export default Navbar;
