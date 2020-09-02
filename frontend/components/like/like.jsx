import React from "react";
import { Link } from "react-router-dom";
import { fetchLike } from "../../util/likes_api_util";

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
      pic: window.bwfire1,
      pic2: window.firered1,
      likeId: 0,
      first: false,
      picTrigger: false,
    };
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.likes.length !== nextProps.likes.length) {
      this.setState({ likeId: nextProps.likes[nextProps.likes.length - 1].id });
    }
  }

  handleLike() {
    this.setState({ like: !this.state.like });
    if (this.state.pic2 === window.bwfire1) {
      this.setState({ pic2: window.firered1 });
    } else if (this.state.pic2 === window.firered1) {
      this.setState({ pic2: window.bwfire1 });
    }
    if (this.state.pic === window.bwfire1) {
      this.setState({ pic: window.firered1 });
    } else if (this.state.pic === window.firered1) {
      this.setState({ pic: window.bwfire1 });
    }
    if (this.props.videoId) {
      this.props
        .createLike({
          likeable_type: "Video",
          likeable_id: this.props.videoId,
          liker_id: this.props.currentUser.id,
        })
        // .then(this.setState({ pic: window.firered1 }))

        .then(this.setState({ like: !this.state.like }));
    } else {
      this.props
        .createLike({
          likeable_type: "Comment",
          likeable_id: this.props.commentId,
          liker_id: this.props.currentUser.id,
        })
        // .then(this.setState({ pic: window.firered1 }))

        .then(this.setState({ like: !this.state.like }));
    }
  }

  handleDislike(likeId) {
    if (this.state.pic2 === window.bwfire1) {
      this.setState({
        pic2: window.firered1,
        pic: window.firered1,
        like: !this.state.like,
      });
    } else if (this.state.pic2 === window.firered1) {
      this.setState({
        pic2: window.bwfire1,
        pic: window.bwfire1,
        like: !this.state.like,
      });
    }
    // if (this.state.pic === window.bwfire1) {
    //   this.setState({ pic: window.firered1 });
    // } else if (this.state.pic === window.firered1) {
    //   this.setState({ pic: window.bwfire1 });
    // }
    // this.setState({ like: !this.state.like });
    this.props
      .deleteLike(likeId)
      .then(this.props.fetchLikes())
      .then(
        this.setState({
          like: !this.state.like,
          likeId: likeId + 1,
          first: true,
        })
      );
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
          if (like && like.likeable_id === typeId && !this.state.first) {
            status = (
              <button
                className="red"
                onClick={() => this.handleDislike(like.id)}
              >
                <img
                  style={{ width: this.props.width }}
                  src={this.state.pic2}
                  alt=""
                />
              </button>
            );
          } else if (like && like.likeable_id === typeId && this.state.first) {
            status = (
              <button
                className="red"
                onClick={() => this.handleDislike(this.state.likeId)}
              >
                <img
                  style={{ width: this.props.width }}
                  src={this.state.pic2}
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

  render() {
    return <>{this.button()}</>;
  }
}
export default Like;
