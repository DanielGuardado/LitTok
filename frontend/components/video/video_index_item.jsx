import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { Waypoint } from "react-waypoint";

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };
  }

  videoRender() {
    return (
      <Waypoint
        onEnter={() => this.setState({ playing: true })}
        onLeave={() => this.setState({ playing: false })}
      >
        <div className="underline-vid">
          <div className="title-desc">
            <h3>{this.props.video.username}</h3>
            <Link to={`/videos/${this.props.video.id}`}>
              <p>{this.props.video.description}</p>
            </Link>
          </div>
          <ReactPlayer
            playing={this.state.playing}
            className="videoBox"
            height={520}
            width={350}
            controls={true}
            volume={0}
            url={this.props.video.videoUrl}
          />
        </div>
      </Waypoint>
    );
  }

  render() {
    return <div className="margin-top10">{this.videoRender()}</div>;
  }
}

export default VideoIndexItem;
