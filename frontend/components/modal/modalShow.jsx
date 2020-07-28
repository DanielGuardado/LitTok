import React from "react";
import Login from "../session_form/login_form_container";
const ModalShow = ({ handleClose, show}) => {
  const showHide = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHide}>
      <section className="modal-main">
        <Login handleClose={handleClose}/>
        <button onClick={handleClose}>X</button>
      </section>
    </div>
  );
};

export default ModalShow;
