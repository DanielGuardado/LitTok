import React from "react";
import Login from "../session_form/login_form_container";
import Logout from "../session_form/signup_form_container";

class ModalShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logForm: true };
    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleSignupClick() {
    this.setState({ logForm: false });
  }

  handleLoginClick() {
    this.setState({ logForm: true });
  }

  status() {
    if (this.state.logForm === true) {
      return (
        <p className="small-login">
          Don't have an account?{" "}
          <button className="red" onClick={this.handleSignupClick}>
            Signup
          </button>
        </p>
      );
    } else {
      return (
        <p className="small-login">
          Already have an account?{" "}
          <button className="red" onClick={this.handleLoginClick}>
            Login
          </button>
        </p>
      );
    }
  }

  render() {
    const { logForm } = this.state;
    const { handleClose, show } = this.props;
    let logForm2;
    const showHide = show ? "modal display-block" : "modal display-none";
    if (logForm === true) {
      logForm2 = <Login handleClose={handleClose} />;
    } else {
      logForm2 = (
        <Logout handleClose={handleClose} resetState={this.handleLoginClick} />
      );
    }

    return (
      <div className={showHide}>
        <section className="modal-main">
          {logForm2}
          {this.status()}
        </section>
      </div>
    );
  }
}

// const ModalShow = ({ handleClose, show }) => {
//   const showHide = show ? "modal display-block" : "modal display-none";
// let logForm = true;
// if (logForm === true) {
//   logForm = <Login handleClose={handleClose} />;
// } else {
//   logForm = <Logout handleClose={handleClose} />;
// }

//   return (
//     <div className={showHide}>
//       <section className="modal-main">
//         <button className="close-modal" onClick={handleClose}>
//           X
//         </button>
//         {logForm}
//         <p>
//           Don't have an account? <button>Signup</button>
//         </p>
//       </section>
//     </div>
//   );
// };

export default ModalShow;
