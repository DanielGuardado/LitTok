import { connect } from "react-redux";
import { fetchVideos } from "../../actions/video_actions";
import { fetchLikes } from "../../actions/like_actions";
import VideoIndex from "./video_index";

const mapStateToProps = (state) => ({
  videos: Object.values(state.entities.videos),
  likes: Object.values(state.entities.likes),
});

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
  fetchLikes: () => dispatch(fetchLikes())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);
