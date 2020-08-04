import Splash from "./splash";
import { fetchVideos } from "../../actions/video_actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    videos: Object.values(state.entities.videos).slice(0, 5),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVideos: () => dispatch(fetchVideos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
