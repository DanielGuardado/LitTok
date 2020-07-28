import React from "react";
import { Link } from "react-router-dom";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      birthday: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    this.props.signUp(user);
  }

  signupForm() {
    const { birthday, email, password, username } = this.state;
    return (
      <div className="containerlog center">
        <form>
          <h2>Sign up</h2>
          <label>
            When's your birthday?
            <input
              type="date"
              name="birthday"
              onChange={this.handleInput("birthday")}
              value={birthday}
            />
          </label>
          <label>
            Email
            <input
              placeholder="Email address"
              type="text"
              name="email"
              onChange={this.handleInput("email")}
              value={email}
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              onChange={this.handleInput("password")}
              value={password}
            />
          </label>
          <label>
            Username
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleInput("username")}
              value={username}
            />
          </label>
          <button className="LogButton" onClick={this.handleSubmit}>
            Sign Up
          </button>
        </form>
        <footer>
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </footer>
      </div>
    );
  }
  errs() {
    return <div>{this.props.errors}</div>;
  }

  nav() {
    return (
      <div className="navbar2 underline flex space-between">
        <Link to="/">
          <img src={window.logo} alt="littok" height="40" width="150" />
        </Link>
      </div>
    );
  }

  render() {
    const errors = this.props.errors ? this.errs() : "";
    return (
      <div>
        {this.nav()}
        {this.signupForm()}
        {errors}
      </div>
    );
  }
}

export default Signup;
