import React from "react";
import Modal from "react-modal";
import ModalShow from "./modalShow";
import Login from "../session_form/login_form_container";

class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <ModalShow show={this.state.show} handleClose={this.hideModal}>
        </ModalShow>
        <button className="LogButton" onClick={this.showModal}>
          Login
        </button>
      </div>
    );
  }
}

export default Modals;
