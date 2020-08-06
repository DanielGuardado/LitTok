import React from "react";
import { Link } from "react-router-dom";
import { fetchLike } from "../../util/likes_api_util";

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { like: false };
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  handleLike() {
    if (this.props.videoId) {
      this.props
        .createLike({
          likeable_type: "Video",
          likeable_id: this.props.videoId,
          liker_id: this.props.currentUser.id,
        })
        .then(this.props.fetchLikes())
        .then(this.setState({ like: !this.state.like }));
    } else {
      this.props
        .createLike({
          likeable_type: "Comment",
          likeable_id: this.props.commentId,
          liker_id: this.props.currentUser.id,
        })
        .then(this.props.fetchLikes())
        .then(this.setState({ like: !this.state.like }));
    }
  }

  handleDislike(likeId) {
    this.props
      .deleteLike(likeId)
      .then(this.props.fetchLikes())
      .then(this.setState({ like: !this.state.like }));
  }

  button() {
    let status;
    const { like } = this.state;
    let typeId;
    if (this.props.videoId) {
      typeId = this.props.videoId;
    } else {
      typeId = this.props.commentId;
    }
    if (!like) {
      if (this.props.currentUser.likes) {
        this.props.currentUser.likes.forEach((like) => {
          if (like && like.likeable_id === typeId) {
            status = (
              <button
                className="red"
                onClick={() => this.handleDislike(like.id)}
              >
                <img
                  style={{ width: this.props.width }}
                  src={window.redheart}
                  alt=""
                />
              </button>
            );
          }
        });
      }
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

  // likeButton() {
  //   let status;
  //   let typeId;
  //   if (this.props.videoId) {
  //     typeId = this.props.videoId;
  //   } else {
  //     typeId = this.props.commentId;
  //   }
  //   if (this.props.currentUser.likes) {
  //     this.props.currentUser.likes.forEach((like) => {
  //       if (like && like.likeable_id === typeId) {
  //         status = (
  //           <button className="red" onClick={() => this.handleDislike(like.id)}>
  //             <img
  //               style={{ width: this.props.width }}
  //               src={window.redheart}
  //               alt=""
  //             />
  //           </button>
  //         );
  //       }
  //     });
  //   }
  //   if (status !== undefined) {
  //     return status;
  //   } else {
  //     if (this.props.currentUser.id) {
  //       return (
  //         <button onClick={this.handleLike}>
  //           <img
  //             style={{ width: this.props.width }}
  //             src={window.bwheart}
  //             alt=""
  //           />
  //         </button>
  //       );
  //     } else {
  //       return (
  //         <Link to="/login">
  //           <button>
  //             <img
  //               style={{ width: this.props.width }}
  //               src={window.bwheart}
  //               alt=""
  //             />
  //           </button>
  //         </Link>
  //       );
  //     }
  //   }
  // }

  render() {
    return <>{this.button()}</>;
  }
}
export default Like;