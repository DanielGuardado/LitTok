import { connect } from "react-redux";
import Login from "./login_form";
import { login } from "../../actions/session_actions";
import React from "react";

const mapStateToProps = (state) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
