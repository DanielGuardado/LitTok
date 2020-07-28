import React from "react";
import { Link } from "react-router-dom";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  formHeader() {
    return (
      <div className="containerlog center">
        <form className="center">
          <h2 className="bold">Log in</h2>
          <label htmlFor="username">Username</label>
            <input
              placeholder="Username"
              type="text"
              name="username"
              onChange={this.handleInput("username")}
              value={this.state.username}
            /> 
            <label htmlFor="password"></label>
            <input
              placeholder="Password"
              type="password"
              name="password"
              onChange={this.handleInput("password")}
              value={this.state.password}
            />
          <p>Forgot password?</p>
          <button onClick={this.handleSubmit} className="LogButton">
            Log in
          </button>
        </form>
        <footer>
          <p>Don't have an account?</p>
          <Link to="/signup">Sign Up</Link>
        </footer>
      </div>
    );
  }
  errs() {
    return <div>{this.props.errors}</div>;
  }

  render() {
    const errors = this.props.errors ? this.errs() : "";
    return (
      <div>
        {this.props.navLink}
        {this.formHeader()}
        {errors}
      </div>
    );
  }
}

export default Login;
