import { connect } from "react-redux";
import VideoForm from "./video_form";
import { clearErrors, createVideo } from "../../actions/video_actions";
import React from "react";

const mapStateToProps = (state) => ({
  errors: state.errors.video,
  currentUser: state.session.currentUser
    ? state.entities.users[state.session.currentUser.id]
    : {},
});

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  createVideo: (video) => dispatch(createVideo(video))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);

