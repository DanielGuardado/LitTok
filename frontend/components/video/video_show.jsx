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
    this.videoComments = this.videoComments.bind(this);
  }
  componentWillUnmount() {
    // this.setState({ comments: null });
    this.props.clearComments();
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId);
    this.props.fetchLikes();
  }
  editComments = (comments) => {
    this.setState({ comments: comments });
  };

  btnTrigger = () => {
    this.setState({ editTrigger: true });
  };

  cmntTrigger = () => {
    this.setState({ commentTrigger: true });
  };

  //REMEMBER  THIS!!!!!!!! HUGEEE!!!!!!
  //FLOW OF INFORMATION
  editDescrip = (description) => {
    this.setState({ description: description });
  };

  btnTriggerOff = () => {
    this.setState({ editTrigger: false });
  };

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

  deleteBtn() {
    if (
      JSON.stringify(this.props.currentUser.id) === this.props.video.uploader_id
    ) {
      return (
        <div>
          <button
            className="DelButton"
            onClick={() =>
              this.props
                .deleteVideo(this.props.video.id)
                .then(() => this.props.history.push("/foryou"))
            }
          >
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
          authorId={this.props.currentUser.id}
          videoId={this.props.video.id}
          cmntTrigger={this.cmntTrigger}
          editComments={this.editComments}
          comments={this.props.video.comments}
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
    const { video, currentUser, deleteComment } = this.props;
    if (video.comments) {
      const comment = this.props.video.comments.map((comment, idx) => {
        //keep this in mind
        if (comment.comment.author_id === currentUser.id) {
          return (
            <ul key={idx}>
              <li className="comment-author">{comment.author}</li>
              <li className="delete-comment">
                <Like commentId={comment.comment.id} />♡ {comment.comment.body}{" "}
                <button
                  title="Delete Comment"
                  className="red"
                  onClick={() => deleteComment(comment.comment.id)}
                >
                  ✘
                </button>
              </li>
            </ul>
          );
        } else {
          return (
            <ul key={idx}>
              <li className="comment-author">{comment.author}</li>
              <li>
                <Like commentId={comment.comment.id} /> ♡ {comment.comment.body}
              </li>
            </ul>
          );
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

  renderNewComment() {
    const { currentUser, deleteComment } = this.props;
    // debugger;
    if (this.state.comments) {
      if (JSON.stringify(currentUser.id) === this.props.video.uploader_id) {
        const com = Object.values(this.state.comments).map((comment, idx) => (
          <ul key={idx}>
            <li className="comment-author">{currentUser.username}</li>
            <li>
              ♡ {comment.body}{" "}
              <button
                title="Delete Comment"
                className="red"
                onClick={() => deleteComment(comment.id)}
              >
                ✘
              </button>
            </li>
          </ul>
        ));
        return com;
      } else {
        const com = Object.values(this.state.comments).map((comment, idx) => (
          <ul key={idx}>
            <li className="comment-author">{currentUser.username}</li>
            <li>♡ {comment.body}</li>
          </ul>
        ));
        return com;
      }
    }
  }

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
        ♡{this.props.video.likeCount} C{this.props.video.commentCount}
      </p>
    );
  }

  addLike() {
    return <Like videoId={this.props.video.id} />;
  }

  render() {
    const { video } = this.props;
    return (
      <div>
        {this.deleteBtn()}
        <Link className="closeVid" to="/foryou">
          ✘
        </Link>
        <div className="show-container">
          <div className="flex w-100">
            <div className="background-show">{this.vidShow()}</div>
            <div className="details">
              <h1 className="static-username">{video.username}</h1>
              <div className="comment-flex">
                <div className="desc-main">
                  <p className="desc">{video.description}</p>
                  {this.addLike()}
                  {this.likeCount()}
                </div>
                {this.videoComments()}
                {this.renderNewComment()}
              </div>
              {this.commentForm()}
            </div>
            {this.editBtn()}
            {this.editTrig()}
          </div>
        </div>
      </div>
    );
  }
}

export default VideoShow;
