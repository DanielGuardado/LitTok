import React from "react";
import ModalShow from "./modalShow";
import { clearErrors } from "../../actions/session_actions";

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
    const { classname } = this.props;
    return (
      <div>
        <ModalShow
          show={this.state.show}
          handleClose={this.hideModal}
        ></ModalShow>
        <button className={classname} onClick={this.showModal}>
          Login
        </button>
      </div>
    );
  }
}

export default Modals;
