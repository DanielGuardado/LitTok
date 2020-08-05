import React from "react";
import VideoIndexItem from "./video_index_item";

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidUpdate(prev) {
  //   debugger;
  //   if (this.state.likes && prev.likes.length !== this.state.likes.length) {
  //     this.setState({ likes: this.props.likes });
  //   }
  // }
  // shouldComponentUpdate(prevProps) {
  //   debugger
  //   return true
  //   // if (prevProps !== this.props) {
  //   //   debugger;
  //   //   return true;
  //   // } else {
  //   //   debugger;
  //   //   false;
  //   // }
  // }

  // componentWillReceiveProps(a) {
  //   if (a.likes.length !== this.props.likes.length) {
  //     this.setState({status:true})
  //     console.log(this.state.status)
  //     true;
  //   } else {
  //     false;
  //   }
  // }

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
      />
    ));
    return <div className="flex-root-child">{vid}</div>;
  }

  render() {
    return <div className="flex-root">{this.videosShow()}</div>;
  }
}
export default VideoIndex;
