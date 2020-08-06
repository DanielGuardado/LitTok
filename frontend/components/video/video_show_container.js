import { connect } from "react-redux";
import {
  fetchVideo,
  deleteVideo,
  updateVideo,
} from "../../actions/video_actions";
import { deleteComment } from "../../actions/comment_actions";
import { fetchLikes } from "../../actions/like_actions";
import VideoShow from "./video_show";

const mapStateToProps = (state, ownProps) => {
  // debugger;
  const video = state.entities.videos[ownProps.match.params.videoId];
  const comments = Object.values(state.entities.comments);
  return {
    //video: state.entities.videos,
    video,
    currentUser: state.session.currentUser
      ? state.entities.users[state.session.currentUser.id]
      : {},
    likes: Object.values(state.entities.likes),
    comments:
      video && comments.length > 0
        ? video.commentIds.map(
            (commentId) => state.entities.comments[commentId]
          )
        : [],
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
  deleteVideo: (videoId) => dispatch(deleteVideo(videoId)),
  updateVideo: (videoId) => dispatch(updateVideo(videoId)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  fetchLikes: () => dispatch(fetchLikes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);
