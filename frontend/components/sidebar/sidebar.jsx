import React from "react";
import { Link } from "react-router-dom";
import Modals from "../modal/modal";
import Navbar from "../navbar/navbar_conatiner";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.demoUser();
  }

  sibarnav() {
    return <div></div>;
  }

  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    let status;
    if (this.props.currentUser.id) {
      status = (
        <div>
          <p>Welcome {this.props.currentUser.username}</p>
          <button onClick={this.props.logout}>Log out</button>
        </div>
      );
    } else {
      status = (
        <div>
          <p className="smallgrey">
            Log in to follow creators, like videos, and comments.
          </p>
          <div className="bpadding2">
            <Modals classname={"LogButtonSide2"} />
          </div>
          <div>
            <button className="LogButtonSide3" onClick={this.handleSubmit}>
              Demo User
            </button>
          </div>
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className="sidenav zin">
          <div className="bpadding">
            <span className="disp1 box active">
              <img src={window.house} alt="littok" height="35" width="35" />
              For You
            </span>
            <span className="disp1 box not-active">
              <img src={window.hash} alt="littok" height="30" width="30" />
              Discover
            </span>
            <span className="disp1 box not-active">
              <img src={window.social} alt="littok" height="30" width="35" />
              Following
            </span>
          </div>
          {status}
          <a href="https://github.com/DanielGuardado/LitTok">
            <img
              className="github-logo"
              src={window.github}
              alt=""
              width={170}
            />
          </a>
          <footer className="footer-wrapper">
            <ul className="footer-links">
              <li className="p5">Home</li>
              <li className="p5">About</li>
              <li className="p5">Newsroom</li>
              <li className="p5">Careers</li>
              <li className="p5">LitTok</li>
            </ul>
            <ul className="footer-links2">
              <li className="p5">Help</li>
              <li className="p5">Safety</li>
              <li className="p5">Community</li>
              <li className="p5">Guidelines</li>
              <li className="p5">Terms</li>
              <li className="p5">Privacy</li>
              <li className="p5">Copyright</li>
            </ul>
            <aside className="aside-footer">© 2020 LitTok</aside>
            <form action="#">
              <select className="footer-input" name="english" id="english">
                <option value="english">English</option>
              </select>
            </form>
          </footer>
          <Navbar className="padding-reset" login={<Modals />} />
        </div>
        <button className="scroll-back-button" onClick={this.scrollTop}>
          <img src={window.scrollup} alt="" />
        </button>
      </React.Fragment>
    );
  }
}

export default Sidebar;
