import React from "react";
import { Link } from "react-router-dom";
import Modals from "../modal/modal";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
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
    }
    return (
      <div className="navbar1 underline flex space-between fixed">
        <Link to="/">
          <img src={window.logo} alt="littok" height="40" width="150" />
        </Link>
        {loggedIn}
      </div>
    );
  }
}

export default Navbar;
