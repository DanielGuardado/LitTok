import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
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
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Log in</Link>
        </div>
      );
    }
    return <div>{status}</div>;
  }
}

export default Greeting;
