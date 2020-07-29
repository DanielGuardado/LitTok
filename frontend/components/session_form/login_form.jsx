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
    this.handleX = this.handleX.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.errors === this.props.errors) {
  //     this.props.clearErrors();
  //   }
  // }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
    this.setState({ username: "", password: "" });
    if (this.props.handleClose && this.props.currentUser.id) {
      //IT WORKED!!!!!
      this.props.handleClose();
    }
  }

  handleX() {
    this.props.handleClose();
    this.props.clearErrors();
  }

  nav() {
    if (this.props.handleClose) {
      return;
    }
    return (
      <div className="navbar2 underline flex space-between">
        <Link to="/">
          <img src={window.logo} alt="littok" height="40" width="150" />
        </Link>
      </div>
    );
  }
  footerForm() {
    if (!this.props.handleClose) {
      return (
        <footer>
          <p>
            Don't have an account?<Link to="/signup">Sign Up</Link>
          </p>
        </footer>
      );
    }
  }

  loginForm() {
    const { username, password } = this.state;
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
            value={username}
          />
          <label htmlFor="password"></label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={this.handleInput("password")}
            value={password}
          />
          <p>Forgot password?</p>
          <button onClick={this.handleSubmit} className="LogButton">
            Log in
          </button>
        </form>
      </div>
    );
  }
  errs() {
    let errors = this.props.errors ? this.props.errors : "";
    let errorMessages = errors.map((error, idx) => (
      <div key={idx}>{error}</div>
    ));
    return <div>{errorMessages}</div>;
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
        {this.loginForm()}
        {this.footerForm()}
        {this.errs()}
      </div>
    );
  }
}

export default Login;
