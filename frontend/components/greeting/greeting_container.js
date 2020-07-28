import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Greeting from "./greeting";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
    ? state.entities.users[state.session.currentUser.id]
    : {},
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
