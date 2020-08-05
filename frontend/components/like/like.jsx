import React from "react";
import { Link } from "react-router-dom";

class Like extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLike = () => {
    if (this.props.videoId) {
      this.props.createLike({
        likeable_type: "Video",
        likeable_id: this.props.videoId,
        liker_id: this.props.currentUser.id,
      });
    } else {
      this.props.createLike({
        likeable_type: "Comment",
        likeable_id: this.props.commentId,
        liker_id: this.props.currentUser.id,
      });
    }
  };

  handleDislike = (likeId) => {
    this.props.deleteLike(likeId);
  };

  likeButton() {
    let status;
    let typeId;
    if (this.props.videoId) {
      typeId = this.props.videoId;
    } else {
      typeId = this.props.commentId;
    }
    if (this.props.currentUser.likes) {
      this.props.currentUser.likes.forEach((like) => {
        if (like && like.likeable_id === typeId) {
          status = (
            <button className="red" onClick={() => this.handleDislike(like.id)}>
              <img style={{width: this.props.width}} src={window.redheart} alt="" />
            </button>
          );
        }
      });
    }
    if (status !== undefined) {
      return status;
    } else {
      if (this.props.currentUser.id) {
        return (
          <button onClick={this.handleLike}>
            <img
              style={{ width: this.props.width }}
              src={window.bwheart}
              alt=""
            />
          </button>
        );
      } else {
        return (
          <Link to="/login">
            <button>
              <img
                style={{ width: this.props.width }}
                src={window.bwheart}
                alt=""
              />
            </button>
          </Link>
        );
      }
    }
  }

  render() {
    return <>{this.likeButton()}</>;
  }
}
export default Like;
