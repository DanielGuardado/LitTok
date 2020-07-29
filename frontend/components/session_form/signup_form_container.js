import { connect } from "react-redux";
import Signup from "./signup_form";
import { signUp } from "../../actions/session_actions";

const mapStateToProps = (state) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
