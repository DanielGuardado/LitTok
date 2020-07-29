import { connect } from "react-redux";
import Modals from "./modal";
import { login, clearErrors } from "../../actions/session_actions";

// const mapStateToProps = (state) => ({
//   errors: state.errors.session,
//   currentUser: state.session.currentUser
//     ? state.entities.users[state.session.currentUser.id]
//     : {},
// });

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(null, mapDispatchToProps)(Modals);
