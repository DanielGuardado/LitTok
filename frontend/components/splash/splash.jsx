import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export default class Splash extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchVideos();
  }

  navRen() {
    return (
      <div className="navbar1 underline flex space-between fixed">
        <Link to="/">
          <img src={window.logo} alt="littok" height="40" width="150" />
        </Link>
        <Link to="/foryou">
          <img src={window.watch} alt="littok" height="45" width="120" />
        </Link>
      </div>
    );
  }
  videoRen() {
    const vid = this.props.videos.map((video, idx) => (
      <li key={idx}>
        <ReactPlayer
          playing={true}
          loop={true}
          className="video-splash"
          height={600}
          width={340}
          controls={false}
          volume={0}
          url={video.videoUrl}
        />
      </li>
    ));
    return vid;
  }

  render() {
    return (
      <>
        {this.navRen()}
        <div>
          <header className="splash-header">
            <h1 className="splash-title">It's Lit</h1>
            <h2 className="splash-caption">Real Lit People. Real Lit Videos</h2>
          </header>
        </div>
        <ul className="video-stream">{this.videoRen()}</ul>
        <footer className="footer-splash">
          <img src={window.logoInvert} alt="littok" className="footer-img" />
          {/* <form action="#">
            <select className="splash-footer-input" name="english" id="english">
              <option value="english">English</option>
            </select>
          </form> */}
          <ul className="splash-footer-ul">
            <li className="first-li">
              <a href="https://danielguardado.com/" target="_blank">
                Portfolio
              </a>
            </li>
          </ul>
          <ul className="splash-footer-ul">
            <li className="first-li">
              <a
                href="https://www.linkedin.com/in/danielguardado1/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <ul className="splash-footer-ul">
            <li className="first-li">
              <a href="https://angel.co/u/danielguardado" target="_blank">
                Angellist
              </a>
            </li>
          </ul>
          <ul className="splash-footer-ul">
            <li className="first-li">
              <a href="https://github.com/DanielGuardado" target="_blank">
                Github
              </a>
            </li>
          </ul>
          {/* <aside className="splash-aside-footer">© 2020 LitTok</aside> */}
        </footer>
      </>
    );
  }
}
