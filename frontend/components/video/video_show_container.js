import { connect } from "react-redux";
import {
  fetchVideo,
  deleteVideo,
  updateVideo,
} from "../../actions/video_actions";
import { deleteComment, clearComments } from "../../actions/comment_actions";
import VideoShow from "./video_show";

const mapStateToProps = (state) => {
  return {
    video: state.entities.videos,
    currentUser: state.session.currentUser
      ? state.entities.users[state.session.currentUser.id]
      : {},
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
  deleteVideo: (videoId) => dispatch(deleteVideo(videoId)),
  updateVideo: (videoId) => dispatch(updateVideo(videoId)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  clearComments: () => dispatch(clearComments()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);
