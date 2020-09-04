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
    this.handleX = this.handleX.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    this.props.signUp(user);
    if (this.props.handleClose && this.props.currentUser.id) {
      this.props.handleClose();
    }
  }

  handleX() {
    this.props.handleClose();
    this.props.clearErrors();
    this.props.resetState();
  }

  errs() {
    let errors = this.props.errors ? this.props.errors : "";
    let errorMessages = errors.map((error, key) => (
      <div key={key}>{error}</div>
    ));
    return <div className="red-errors">{errorMessages}</div>;
  }

  nav() {
    if (this.props.handleClose) {
      return;
    }
    return (
      <div className="navbar2 underline flex space-between">
        <Link to="/foryou">
          <img src={window.logo} alt="littok" height="40" width="150" />
        </Link>
      </div>
    );
  }

  signupForm() {
    const { birthday, email, password, username } = this.state;
    const isEnabled =
      username.length > 0 &&
      password.length > 0 &&
      email.length > 0 &&
      birthday.length > 0;
    return (
      <div className="containerlog center">
        <form>
          <h2>Sign up</h2>
          <label>
            When's your birthday?{" "}
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
          <label className="username-label">
            Username
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleInput("username")}
              value={username}
            />
          </label>
          {this.errs()}
          <button
            disabled={!isEnabled}
            style={{ width: "92%" }}
            className="LogButton"
            onClick={this.handleSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }

  footerForm() {
    if (!this.props.handleClose) {
      return (
        <footer>
          <p className="small-login">
            Already have an account?{" "}
            <Link className="red" to="/login">
              Log in
            </Link>
          </p>
        </footer>
      );
    }
  }

  buttonStatus() {
    if (this.props.handleClose) {
      return (
        <button className="close-modal" onClick={this.handleX}>
          ✘
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        {this.buttonStatus()}
        {this.nav()}
        {this.signupForm()}
        {this.footerForm()}
      </div>
    );
  }
}

export default Signup;
