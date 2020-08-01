import { connect } from "react-redux";
import { fetchVideo } from "../../actions/video_actions";
import VideoShow from "./video_show";

const mapStateToProps = (state, ownProps) => ({
  video: state.entities.videos[ownProps.match.params.videoId],
});

const mapDispatchToProps = (dispatch) => ({
  fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);
