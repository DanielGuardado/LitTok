import React from "react";

class CreateCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      video_id: this.props.videoId,
      author_id: this.props.authorId,
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createComment(this.state);
    this.props.cmntTrigger();
  };

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
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
      </div>
    );
  }
}

export default CreateCommentForm;
