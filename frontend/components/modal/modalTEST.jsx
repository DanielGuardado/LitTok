import React, { Component, useState } from "react";
import Modal from "react-modal";

class Modal1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  showModal(e) {
    return (e) => this.setState({ show: true });
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="zindex3">
        <h3>BIGBIGBIGBIG</h3>
        <button onClick={(e) => {this.showModal();}}>
          {" "}
          show Modal{" "}
        </button>
        <Modal show={this.state.show} />
        <div>HELLLLLOOOOOOO</div>
      </div>
    );
  }
}

export default Modal1;
