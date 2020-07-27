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
    const user = Object.assign({}, this.state);
    this.props.signUp(user);
  }

  formHeader() {
    return (
      <div>
        <form>
          <h2>Sign up</h2>
          <label>
            When's your birthday?
            <input
              type="date"
              name="birthday"
              onChange={this.handleInput("birthday")}
              value={this.state.birthday}
            />
          </label>
          <label>
            Email
            <input
              placeholder="Email address"
              type="text"
              name="email"
              onChange={this.handleInput("email")}
              value={this.state.email}
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              onChange={this.handleInput("password")}
              value={this.state.password}
            />
          </label>
          <label>
            Username
            <input
              type="text"
              name="username"
              onChange={this.handleInput("username")}
              value={this.state.username}
            />
          </label>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
        <footer>
          <p>Don't have an account?</p>
          <Link to="/login">Log in</Link>
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

export default Signup;
