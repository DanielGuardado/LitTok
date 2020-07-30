import React from "react";
import VideoIndexItem from "./video_index_item";

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  videosShow() {
    const vid = this.props.videos.map((video, idx) => (
      <VideoIndexItem key={idx} video={video} />
    ));
    return <div>{vid}</div>;
  }

  render() {
    return <div>{this.videosShow()}</div>;
  }
}
export default VideoIndex;
