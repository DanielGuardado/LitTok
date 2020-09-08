import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

class ProfileItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };
  }

  videoRender() {
    return (
      <div>
        <Link to={`/videos/${this.props.video.id}`}>
          <ReactPlayer
            playing={this.state.playing}
            className="videoBox"
            height={520}
            width={350}
            controls={true}
            volume={0}
            url={this.props.video.videoUrl}
          />
        </Link>
        <div className="border-bottom-gr"></div>
      </div>
    );
  }

  render() {
    return <div className="margin-top10">{this.videoRender()}</div>;
  }
}

export default ProfileItem;
