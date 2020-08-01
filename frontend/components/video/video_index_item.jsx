import React from "react";
import ReactPlayer from "react-player";

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  videoRender() {
    return (
      <div className="underline-vid">
        <ReactPlayer
          playing={true}
          className="videoBox"
          height={520}
          width={350}
          controls={true}
          volume={0}
          url={this.props.video.videoUrl}
        />
      </div>
    );
  }

  render() {
    return <div className="margin-top10">{this.videoRender()}</div>;
  }
}

export default VideoIndexItem;
