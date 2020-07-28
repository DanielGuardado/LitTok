import { connect } from "react-redux";
import { logout, demoUser } from "../../actions/session_actions";
import Sidebar from "./sidebar";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
    ? state.entities.users[state.session.currentUser.id]
    : {},
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  demoUser: () => dispatch(demoUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
