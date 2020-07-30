import React from "react";

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.vidRef = React.createRef();
    this.playVideo = this.playVideo.bind(this);
    this.pauseVideo = this.pauseVideo.bind(this);
  }
  playVideo() {
    this.refs.vidRef.play();
  }

  pauseVideo() {
    this.refs.vidRef.pause();
  }


  videoRender(){
    
    return (
      <div className="underline-vid">
        <video
          className="videoBox"
          width="350"
          height="520"
          loop
          muted
          src={this.props.video.videoUrl}
          value={this.props.video.id}
          onClick={this.playVideo}
          onMouseLeave={this.pauseVideo}
          ref="vidRef"
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.videoRender()}
      </div>
    );
  }
}

export default VideoIndexItem;
