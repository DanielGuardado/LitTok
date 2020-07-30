import React from "react";

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "test",
      videoFile: null,
      uploader_id: this.props.currentUser.id,
      videoUrl: null,
    };
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleFile = this.handleFile.bind(this)
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

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("video[description", this.state.description);
    formData.append("video[uploader_id]", this.state.uploader_id);
    if (this.state.videoFile) {
      formData.append("video[video]", this.state.videoFile);
    }
    this.props.createVideo(formData);
  }

  errs() {
    let errors = this.props.errors ? this.props.errors : "";
    let errorMessages = errors.map((error, idx) => (
      <div key={idx}>{error}</div>
    ));
    return <div>{errorMessages}</div>;
  }

  videoUploadForm() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="file"
          onChange={this.handleFile.bind(this)}
          accept="video/*"
        />
        <button type="submit">Post</button>
      </form>
    );
  }

  render() {
    return (
      <div className="push-down">
        {this.videoUploadForm()}
        {this.errs()}
      </div>
    );
  }
}
export default VideoForm;
