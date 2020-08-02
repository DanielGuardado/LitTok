import { connect } from "react-redux";
import Login from "./login_form";
import { login, clearErrors } from "../../actions/session_actions";

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  currentUser: state.session.currentUser
    ? state.entities.users[state.session.currentUser.id]
    : {},
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
