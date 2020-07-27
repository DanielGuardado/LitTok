import React, { Component, useState } from "react";
import logo from "../../../public/logo.png";
console.log(logo);
import Modal from "react-modal";
import Login from "../session_form/signup_form";
// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-light underline">
//         <a className="navbar-brand" href="#"></a>
//       </nav>
//     );
//   }
// }

function Navbar() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="flex-end navbar navbar-expand-lg navbar-light bg-light underline">
      <img src="" alt="" />
      <button onClick={openModal}>Login</button>
    </div>
  );
}

// class Navbar extends Component {
//   constructor(props){
//     super(props)
//     const [modalIsOpen, setModalIsOpen] = useState(false);
//   }
//   //WARNING! To be deprecated in React v17. Use componentDidMount instead.
//   componentWillMount() {
//     Modal.setAppElement('body');
//   }
//   render() {

//     return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light underline">
//       <a className="navbar-brand" href="#"></a>
//       <button onClick={() => setModalIsOpen(true)}>Open modal</button>
//       <Modal isOpen={modalIsOpen}>
//         <h2>Sign In</h2>
//         <p>blah blah</p>
//         <button onClick={() => setModalIsOpen(false)}>close</button>
//       </Modal>
//     </nav>
//   );
//   }
// }

export default Navbar;