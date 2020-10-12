import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import UpdateVideoForm from "./update_video_form_container";
import CreateCommentForm from "./create_comment_form_container";
import Like from "../like/like_container";

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editTrigger: false,
      commentTrigger: false,
      comments: null,
    };
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.videoComments = this.videoComments.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.video && nextProps.video !== this.props.video) {
      this.props.fetchUser(parseInt(nextProps.video.uploader_id));
    }
  }
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId);
    this.props.fetchLikes();
  }

  handleFollow(e) {
    e.preventDefault();
    this.props.createFollow({
      followee_id: this.props.user[parseInt(this.props.video.uploader_id)].id,
    });
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

  handleDelete(e) {
    e.preventDefault();

    this.props
      .deleteVideo(this.props.video.id)
      .then(() => this.props.history.push("/foryou"));
  }

  followButton() {
    if (!this.props.user[parseInt(this.props.video.uploader_id)]) {
      return;
    }
    let id = this.props.user[parseInt(this.props.video.uploader_id)].id;
    let button;
    if (this.props.currentUser.follower_relationships) {
      this.props.currentUser.follower_relationships.forEach((el) => {
        if (el.followee_id === id) {
          button = (
            <button onClick={this.handleUnfollow} className="FollowShow1">
              Following
            </button>
          );
        }
      });
    }
    if (parseInt(this.props.video.uploader_id) === this.props.currentUser.id) {
      return;
    } else if (!this.props.currentUser.id) {
      return (
        <div className="d-flex mb-3">
          <Link to="/login">
            <button className="FollowButton">Follow</button>
          </Link>
        </div>
      );
    } else if (!button) {
      return (
        <button onClick={this.handleFollow} className="FollowShow">
          Follow
        </button>
      );
    } else {
      return button;
    }
  }
  //REMEMBER  THIS!!!!!!!! HUGEEE!!!!!!
  //FLOW OF INFORMATION
  btnTrigger = () => {
    let edt = this.state.editTrigger;
    this.setState({ editTrigger: !edt });
  };
  editDescrip = (description) => {
    this.setState({ description: description });
  };

  btnTriggerOff = () => {
    this.setState({ editTrigger: false });
  };

  vidShow() {
    const h = "100%";
    return (
      <ReactPlayer
        playing={true}
        className="videoShowBox2"
        height={h}
        width={665}
        controls={true}
        volume={0.2}
        url={this.props.video.videoUrl}
      />
    );
  }

  deleteBtn() {
    if (
      JSON.stringify(this.props.currentUser.id) === this.props.video.uploader_id
    ) {
      return (
        <div>
          <button className="DelButton" onClick={this.handleDelete}>
            Delete Video
          </button>
        </div>
      );
    }
  }

  editTrig() {
    if (this.state.editTrigger) {
      return (
        <UpdateVideoForm
          btnTriggerOff={this.btnTriggerOff}
          video={this.props.video}
          updateVideo={this.props.updateVideo}
          editTrigger={this.editTrigger}
          editDescrip={this.editDescrip}
        />
      );
    }
  }
  commentForm() {
    if (this.props.video.id && this.props.currentUser.id) {
      return (
        <CreateCommentForm
          fetchVideo={this.props.fetchVideo}
          authorId={this.props.currentUser.id}
          videoId={this.props.video.id}
          cmntTrigger={this.cmntTrigger}
          editComments={this.editComments}
          comments={this.props.comments}
        />
      );
    } else {
      return (
        <footer className="footer-comment">
          <Link className="login-link" to="/login">
            Login
          </Link>{" "}
          to leave a comment!
        </footer>
      );
    }
  }

  videoComments() {
    const { currentUser, deleteComment, comments } = this.props;
    if (comments && comments.length > 0) {
      // debugger;
      const comment = this.props.comments.map((comment, idx) => {
        //keep this in mind
        if (comment && comment.author_id === currentUser.id) {
          return (
            <ul key={idx}>
              <li className="comment-author">{comment.author}</li>
              <li className="comment-section">
                <div>
                  <Like width={25} commentId={comment.id} />
                </div>
                <div className="comment-body">{comment.body}</div>
                <button
                  title="Delete Comment"
                  className="red"
                  onClick={() =>
                    deleteComment(comment.id).then(
                      this.props.fetchVideo(this.props.match.params.videoId)
                    )
                  }
                >
                  ✘
                </button>
              </li>
            </ul>
          );
        } else if (comment) {
          return (
            <ul key={idx}>
              <li className="comment-author">{comment.author}</li>
              <li className="comment-section">
                <div>
                  <Like
                    likes={this.props.likes}
                    width={25}
                    commentId={comment.id}
                  />
                </div>
                <div className="comment-body">{comment.body}</div>
              </li>
            </ul>
          );
        } else {
          return;
        }
      });
      return <ul className="comment-flex1">{comment}</ul>;
    }
  }

  editBtn() {
    if (
      JSON.stringify(this.props.currentUser.id) === this.props.video.uploader_id
    ) {
      return (
        <div>
          <button className="edit-btn" onClick={this.btnTrigger}>
            Edit
          </button>
        </div>
      );
    }
  }

  // renderNewComment() {
  //   const { currentUser, deleteComment } = this.props;
  //   // debugger;
  //   if (this.state.comments) {
  //     if (JSON.stringify(currentUser.id) === this.props.video.uploader_id) {
  //       const com = Object.values(this.state.comments).map((comment, idx) => (
  //         <ul key={idx}>
  //           <li className="comment-author">{currentUser.username}</li>
  //           <li>
  //             ♡ {comment.body}{" "}
  //             <button
  //               title="Delete Comment"
  //               className="red"
  //               onClick={() => deleteComment(comment.id)}
  //             >
  //               ✘
  //             </button>
  //           </li>
  //         </ul>
  //       ));
  //       return com;
  //     } else {
  //       const com = Object.values(this.state.comments).map((comment, idx) => (
  //         <ul key={idx}>
  //           <li className="comment-author">{currentUser.username}</li>
  //           <li>♡ {comment.body}</li>
  //         </ul>
  //       ));
  //       return com;
  //     }
  //   }
  // }

  likeCount() {
    // let count = 0;
    // if (this.props.likes && this.props.video.id) {
    //   this.props.likes.forEach((like) => {
    //     if (like.likeable_id === this.props.video.id) {
    //       count += 1;
    //     }
    //   });
    return (
      <p className="Likes">
        {this.addLike()}
        {this.props.video.likeCount} <img src={window.comment} />
        {this.props.video.commentCount}
      </p>
    );
  }

  addLike() {
    return <Like likes={this.props.likes} videoId={this.props.video.id} />;
  }

  render() {
    const { video, comments } = this.props;

    if (!video) {
      return null;
    }
    return (
      <div>
        <div
          className="closeVid"
          to="/foryou"
          onClick={() => this.props.history.goBack()}
        >
          ✘
        </div>
        <div className="show-container">
          <div className="flex w-100">
            <div className="background-show">{this.vidShow()}</div>
            <div className="details">
              <div className="d-flex align-items-baseline">
                <Link to={`/users/${this.props.video.uploader_id}`}>
                  <img
                    src={video.pro_pic}
                    className="p-1 rounded-circle img-thumbnail-p2"
                  />
                </Link>
                <Link to={`/users/${this.props.video.uploader_id}`}>
                  <h1 className="static-username">{video.username}</h1>
                </Link>
                {/* <button className="FollowShow">Follow</button> */}
                {this.followButton()}
              </div>
              <div className="comment-flex">
                <div className="desc-main">
                  <p className="desc">{video.description}</p>
                  {this.editBtn()}
                  {this.editTrig()}
                  {this.likeCount()}
                </div>
                {this.videoComments()}
                {this.deleteBtn()}
                {/* {this.renderNewComment()} */}
              </div>
              {this.commentForm()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoShow;
