import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

class VideoShow extends React.Component {
  componentDidMount() {
    this.props.fetchVideo(this.props.video.id);
  }

  vidShow() {
    return (
      <ReactPlayer
        playing={true}
        className="videoShowBox2"
        height={885}
        width={665}
        controls={true}
        volume={0}
        url={this.props.video.videoUrl}
      />
    );
  }

  render() {
    const { video } = this.props;

    return (
      <div>
        <div className="show-container">
          <div className="background-show">{this.vidShow()}</div>
          <Link className="closeVid" to="/">
            X
          </Link>
          <div className="details">
            <h1 className="static-username">{video.username}</h1>
            <p className="desc">{video.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoShow;
