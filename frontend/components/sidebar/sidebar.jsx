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
          <button className="LogButton" onClick={this.handleSubmit}>
            Demo User
          </button>
        </div>
      );
    }
    return <div>{status}</div>;
  }
}

export default Sidebar;
