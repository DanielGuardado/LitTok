import React from "react";
import VideoIndexItem from "./video_index_item";

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
    this.props.fetchLikes();
  }

  videosShow() {
    const vid = this.props.videos.map((video, idx) => (
      <VideoIndexItem
        fetchLikes={this.props.fetchLikes}
        key={idx}
        video={video}
        likes={this.props.likes}
        createFollow={this.props.createFollow}
        deleteFollow={this.props.deleteFollow}
        currentUser={this.props.currentUser}
        user={this.props.user}
        fetchUser={this.props.fetchUser}
      />
    ));
    return <div className="flex-root-child">{vid}</div>;
  }

  render() {
    return <div className="flex-root">{this.videosShow()}</div>;
  }
}
export default VideoIndex;
