import React from "react";

class CreateCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      video_id: this.props.videoId,
      author_id: this.props.authorId,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    // let com = {};
    e.preventDefault();
    this.props.createComment(this.state).then(this.props.fetchVideo(this.state.video_id));
    // .then(() => this.props.editComments(this.props.comment));
    // .createComment(this.state)
    // .then(() => this.props.editComments(this.props.comment));
    this.setState({ body: "" });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  errs() {
    let errors = this.props.errors ? this.props.errors : "";
    let errorMessages = errors.map((error, idx) => (
      <div key={idx}>{error}</div>
    ));
    return <div className="red">{errorMessages}</div>;
  }

  render() {
    return (
      <div className="comment-container">
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <label>
            <textarea
              className="textarea"
              placeholder="Leave a comment"
              type="text"
              value={this.state.body}
              onChange={this.update("body")}
            />
          </label>
          <button className="comment-btn" type="submit">
            Submit
          </button>
        </form>
        {this.errs()}
      </div>
    );
  }
}

export default CreateCommentForm;
