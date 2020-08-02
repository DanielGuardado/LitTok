import React from "react";

class UpdateVideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.video;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateVideo(this.state);
    this.props.btnTriggerOff();
    this.props.editTrigger();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.description}
              onChange={this.update("description")}
            />
          </label>
          <button className="edit-btn" type="submit">
            Edit Caption
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateVideoForm;
