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
      <div
        className="col-4 p5-1"
        onMouseEnter={() => this.setState({ playing: true })}
        onMouseLeave={() => this.setState({ playing: false })}
      >
        <Link to={`/videos/${this.props.video.id}`}>
          <ReactPlayer
            playing={this.state.playing}
            className=""
            height={360}
            width={280}
            controls={true}
            volume={0}
            url={this.props.video.videoUrl}
            className="videoBox1"
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
