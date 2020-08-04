import { connect } from "react-redux";
import VideoForm from "./video_form";
import { createVideo } from "../../actions/video_actions";

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  currentUser: state.session.currentUser
    ? state.entities.users[state.session.currentUser.id]
    : {},
});

const mapDispatchToProps = (dispatch) => ({
  createVideo: (video) => dispatch(createVideo(video)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);
