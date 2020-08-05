import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import Like from "../like/like_container";

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
        <div>
          <div className="title-desc">
            <h3 className="video-title-text">{this.props.video.username}</h3>
            <p className="video-caption-text">{this.props.video.description}</p>
          </div>
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
          <div className="comment-index">
            <div>
              <Like
                fetchLikes={this.props.fetchLikes}
                videoId={this.props.video.id}
              />
              {this.props.video.likeCount}{" "}
            </div>
            <div>
              <Link to={`/videos/${this.props.video.id}`}>
                {" "}
                <img src={window.comment} /> {this.props.video.commentCount}{" "}
              </Link>
            </div>
          </div>
          <div className="border-bottom-gr"></div>
        </div>
      </Waypoint>
    );
  }

  render() {
    return <div className="margin-top10">{this.videoRender()}</div>;
  }
}

export default VideoIndexItem;
