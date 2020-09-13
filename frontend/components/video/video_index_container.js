import { connect } from "react-redux";
import { fetchVideos } from "../../actions/video_actions";
import { fetchLikes } from "../../actions/like_actions";
import VideoIndex from "./video_index";
import { createFollow, deleteFollow } from "../../actions/follow_actions";
import { fetchUser } from "../../actions/user_actions";
const mapStateToProps = (state) => {
  return {
    videos: Object.values(state.entities.videos),
    likes: Object.values(state.entities.likes),
    currentUser: state.session.currentUser
      ? state.entities.users[state.session.currentUser.id]
      : {},
    user: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
  fetchLikes: () => dispatch(fetchLikes()),
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (followId) => dispatch(deleteFollow(followId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);
