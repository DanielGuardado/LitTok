import React from "react";
import { Link } from "react-router-dom";

class Like extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLike = () => {
    this.props.createLike({
      likeable_type: "Video",
      likeable_id: this.props.videoId,
      liker_id: this.props.currentUser.id,
    });
  };

  handleDislike = (likeId) => {
    this.props.deleteLike(likeId);
  };

  likeButton() {
    let status;
    const videoId = this.props.videoId;
    if (this.props.currentUser.likes) {
      this.props.currentUser.likes.forEach((like) => {
        if (like && like.likeable_id === videoId) {
          status = (
            <button onClick={() => this.handleDislike(like.id)}>
              Delete Test
            </button>
          );
        }
      });
    }
    if (status !== undefined) {
      return status;
    } else {
      if (this.props.currentUser.id) {
        return <button onClick={this.handleLike}>Like test</button>;
      } else {
        return (
          <Link to="/login">
            <button>Login</button>
          </Link>
        );
      }
    }
  }

  render() {
    return <div>{this.likeButton()}</div>;
  }
}
export default Like;
