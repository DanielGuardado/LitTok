import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import Like from "../like/like_container";

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   debugger;
  //   if (nextProps.video !== this.props.video) {
  //     this.props.fetchUser(parseInt(nextProps.video.uploader_id));
  //   }
  // }

  componentWillMount() {
    this.props.fetchUser(parseInt(this.props.video.uploader_id));
  }
  handleFollow(e) {
    e.preventDefault();
    this.props.createFollow({
      followee_id: this.props.user[parseInt(this.props.video.uploader_id)].id,
    });
  }

  followButton() {
    if (!this.props.user[parseInt(this.props.video.uploader_id)]) {
      return;
    }
    let id = this.props.user[parseInt(this.props.video.uploader_id)].id;
    let button;
    if (id === this.props.currentUser.id) {
      return;
    }
    if (!this.props.currentUser.id) {
      return (
        <Link to="/login">
          <button className="FollowIndex">Follow</button>
        </Link>
      );
    }
    if (this.props.currentUser.follower_relationships) {
      this.props.currentUser.follower_relationships.forEach((el) => {
        if (el.followee_id === id) {
          button = (
            <button onClick={this.handleUnfollow} className="FollowIndex1">
              Following
            </button>
          );
        }
      });
    }
    if (!button) {
      return (
        <button onClick={this.handleFollow} className="FollowIndex">
          Follow
        </button>
      );
    } else {
      return button;
    }
  }

  handleUnfollow(e) {
    e.preventDefault();
    let a;
    let id = this.props.user[parseInt(this.props.video.uploader_id)].id;
    this.props.currentUser.follower_relationships.forEach((el) => {
      if (el.followee_id === id) {
        a = el.id;
      }
    });
    this.props.deleteFollow(
      this.props.user[parseInt(this.props.video.uploader_id)].id
    );
  }

  videoRender() {
    return (
      <Waypoint
        onEnter={() => this.setState({ playing: true })}
        onLeave={() => this.setState({ playing: false })}
      >
        <div>
          <div className="title-desc">
            <Link to={`/users/${this.props.video.uploader_id}`}>
              <img
                src={this.props.video.pro_pic}
                className="p-1 rounded-circle img-thumbnail-p1"
              />
            </Link>
            <div>
              <div className="d-flex mb-3 justify-content-between align-items-baseline">
                <Link to={`/users/${this.props.video.uploader_id}`}>
                  <h3 className="video-title-text">
                    {this.props.video.username}
                  </h3>
                </Link>
                {/* <button className="FollowIndex">Follow</button> */}
                {this.followButton()}
              </div>
            </div>
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
                likes={this.props.likes}
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
