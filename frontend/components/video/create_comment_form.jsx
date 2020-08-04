import React from "react";
import { fetchComment } from "../../util/comment_api_util";

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
    e.preventDefault();
    this.props
      .createComment(this.state)
      .then(() => this.props.editComments(this.props.comment));
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <label>
            <textarea
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
