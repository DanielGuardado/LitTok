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
      <div className="col-4">
        <Link to={`/videos/${this.props.video.id}`}>
          <ReactPlayer
            playing={this.state.playing}
            className=""
            height={520}
            width={350}
            controls={true}
            volume={0}
            url={this.props.video.videoUrl}
          />
        </Link>
        <div className=""></div>
      </div>
    );
  }

  render() {
    return <div className="">{this.videoRender()}</div>;
  }
}

export default ProfileItem;
