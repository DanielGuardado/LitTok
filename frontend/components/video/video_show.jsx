import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import UpdateVideoForm from "./update_video_form_container";

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editTrigger: false,
      description: this.props.video.description,
      descTrigger: false,
    };
  }
  componentDidMount() {
    this.props.fetchVideo(this.props.video.id);
  }

  btnTrigger = () => {
    debugger;
    this.setState({ editTrigger: true });
  };

  editTrigger = () => {
    debugger;
    this.setState({ descTrigger: true });
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
            onClick={() => this.props.deleteVideo(this.props.video.id)}
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
        />
      );
    }
  }

  editBtn() {
    if (
      JSON.stringify(this.props.currentUser.id) === this.props.video.uploader_id
    ) {
      return (
        <div>
          <button onClick={this.btnTrigger}>Edit</button>
        </div>
      );
    }
  }

  editDesc() {
    if (!this.state.descTrigger) {
      return <p className="desc">{this.props.video.description}</p>;
    } else {
      return <p className="desc">{this.props.video.description}</p>;
    }
  }

  render() {
    const { video } = this.props;

    return (
      <div>
        {this.deleteBtn()}
        <div className="show-container">
          <div className="background-show">{this.vidShow()}</div>
          <Link className="closeVid" to="/">
            X
          </Link>
          <div className="details">
            <h1 className="static-username">{video.username}</h1>
            {this.editDesc()}
            {this.editBtn()}
            {this.editTrig()}
          </div>
        </div>
      </div>
    );
  }
}

export default VideoShow;
