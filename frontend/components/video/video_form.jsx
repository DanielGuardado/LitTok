import React from "react";
import DropZone from "react-dropzone";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      videoFile: null,
      uploader_id: this.props.currentUser.id,
      videoUrl: null,
      statusTrigger: false,
      sizeTrigger: false,
    };
  }

  previewVid() {
    const url = this.state.videoUrl;
    if (this.state.videoUrl) {
      return (
        <ReactPlayer
          playing={true}
          className="video-preview"
          height={450}
          width={285}
          controls={true}
          volume={0}
          url={url}
        />
      );
    }
  }

  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ videoFile: file, videoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ videoFile: file, videoUrl: fileReader.result });
      this.setState({ statusTrigger: true });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("video[description]", this.state.description);
    formData.append("video[uploader_id]", this.state.uploader_id);
    if (this.state.videoFile) {
      formData.append("video[video]", this.state.videoFile);
    }
    this.props
      .createVideo(formData)
      .then(() => this.props.history.push("/foryou"));
  }

  errs() {
    let errors = this.props.errors ? this.props.errors : "";
    let errorMessages = errors.map((error, idx) => (
      <div key={idx}>{error}</div>
    ));
    return <div className="red">{errorMessages}</div>;
  }

  videoUploadForm() {
    return (
      <div className="caption">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label className="upload2" htmlFor="description">
            Caption
          </label>

          <input
            className="focus"
            type="text"
            name="description"
            onChange={this.handleInput("description")}
            value={this.state.description}
          />
          <button type="submit" className="upload-btn1">
            Upload
          </button>
        </form>
        <button className="discard-btn" onClick={() => this.discard()}>
          Discard
        </button>
      </div>
    );
  }

  discard() {
    this.setState({
      description: "",
      videoFile: null,
      uploader_id: this.props.currentUser.id,
      videoUrl: null,
      statusTrigger: false,
    });
  }

  uplaodedMessage() {
    if (this.state.statusTrigger) {
      return (
        <div className="no-file1">Your video has been succesfully loaded</div>
      );
    } else {
      return (
        <div className="no-file">
          No video is currently loaded, make sure video is less than 60 seconds
          long
        </div>
      );
    }
  }

  sizeError() {
    if (this.state.sizeTrigger) {
      return <div>Your video is too long!</div>;
    }
  }

  nav() {
    return (
      <div className="navbar2 underline flex space-between">
        <Link to="/foryou">
          <img src={window.logo} alt="littok" height="40" width="150" />
        </Link>
      </div>
    );
  }

  dropZone() {
    return (
      <div className="boxy">
        <DropZone
          onDrop={this.onDrop}
          accept="video/*"
          minSize={0}
          maxSize={160000000}
        >
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <div {...getRootProps()} className="heightUpload txt-light">
              <input {...getInputProps()} className="txt-light" />
              {!isDragActive && "Drag and drop a video"}
              {isDragActive && !isDragReject && "Drop Me!"}
              {isDragReject && "File type must be a video"}
            </div>
          )}
        </DropZone>
      </div>
    );
  }

  render() {
    return (
      <div className="push-down">
        {this.nav()}
        <div className="header-form">
          <h1 className="h1-upload">Upload video</h1>
          <p className="p-upload">
            This video will be published to @{this.props.currentUser.username}
          </p>
        </div>
        {this.videoUploadForm()}
        {this.dropZone()}
        {this.uplaodedMessage()}
        {this.sizeError()}
        {this.errs()}
        {this.previewVid()}
      </div>
    );
  }
}
export default VideoForm;
