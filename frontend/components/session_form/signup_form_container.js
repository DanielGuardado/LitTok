import { connect } from "react-redux";
import Signup from "./signup_form";
import { signUp, clearErrors } from "../../actions/session_actions";
import React from "react";

const mapStateToProps = (state) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
  clearErrors: () => dispatch(clearErrors()),
  closeModal: () => dispatch(closeModal()),
  openModal: (
    <button onClick={() => dispatch(openModal("signup"))}>Signup</button>
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
