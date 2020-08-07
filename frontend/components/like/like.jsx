import React from "react";
import { Link } from "react-router-dom";
import { fetchLike } from "../../util/likes_api_util";

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { like: false, pic: window.bwfire1 };
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.like !== this.state.like) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  handleLike() {
    if (this.props.videoId) {
      this.props
        .createLike({
          likeable_type: "Video",
          likeable_id: this.props.videoId,
          liker_id: this.props.currentUser.id,
        })
        .then(this.setState({ pic: window.firered1 }))

        .then(this.setState({ like: !this.state.like }));
    } else {
      this.props
        .createLike({
          likeable_type: "Comment",
          likeable_id: this.props.commentId,
          liker_id: this.props.currentUser.id,
        })
        .then(this.setState({ pic: window.firered1 }))

        .then(this.setState({ like: !this.state.like }));
    }
  }

  // handleLike(typeId) {
  //   this.props
  //     .createLike({
  //       likeable_type: typeId,
  //       likeable_id: this.props.videoId,
  //       liker_id: this.props.currentUser,
  //     })
  //     .then(this.setState({ like: !this.state.like }));
  // }

  handleDislike(likeId) {
    this.props
      .deleteLike(likeId)
      .then(this.setState({ like: !this.state.like }));
  }

  // b1() {
  //   if (!this.props.likes) {
  //     return;
  //   }
  //   const { currentUser } = this.props;
  //   let status;
  //   let typeId;
  //   if (this.props.videoId) {
  //     typeId = this.props.videoId;
  //   } else {
  //     typeId = this.props.commentId;
  //   }

  //   const a = this.props.likes.map((like) => {
  //     if (like.liker_id !== currentUser.id) {
  //       debugger;
  //       return (
  //         <button onClick={() => this.handleDislike(like.id)}>Like</button>
  //       );
  //     } else {
  //       debugger;
  //       return (
  //         <button
  //           onClick={() => this.handleLike(like.likeable_type, currentUser.id)}
  //         >
  //           dislike
  //         </button>
  //       );
  //     }
  //   });
  //   return a;
  // }

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
                  src={window.firered1}
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
              src={this.state.pic}
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
                src={window.bwfire1}
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
    // return <>{this.likeButton()}</>;
    // return <>{this.b1()}</>;
  }
}
export default Like;
