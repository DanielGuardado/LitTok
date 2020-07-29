import React from "react";
import { Link } from "react-router-dom";
import Modals from "../modal/modal";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  // logo() {
  //   let loggedIn;
  //   if (this.props.currentUser) {
  //     loggedIn = <button onClick={this.props.logout}>Log out</button>;
  //   } else {
  //     loggedIn = (
  //       <Link to="/login" className="LogButton">
  //         Log in
  //       </Link>
  //     );
  //   }
  //   return (
  //     <div className="navbar navbar-expand-lg navbar-light bg-light underline flex space-between">
  //       <Link to="/">
  //         <img src={window.logo} alt="littok" height="40" width="150" />
  //       </Link>
  //       {loggedIn}
  //     </div>
  //   );
  // }

  render() {
    let loggedIn;
    if (this.props.currentUser.id) {
      loggedIn = (
        <button className="LogButton" onClick={this.props.logout}>
          Logout
        </button>
      );
    } else {
      loggedIn = <Modals classname={"LogButton"} />;
    }
    return (
      <div className="navbar1 underline flex space-between">
        <Link to="/">
          <img src={window.logo} alt="littok" height="40" width="150" />
        </Link>
        {loggedIn}
      </div>
    );
  }
}

export default Navbar;
