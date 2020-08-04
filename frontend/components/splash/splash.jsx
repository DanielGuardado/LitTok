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
        <h2 className="splash-apps">Download now</h2>
        <ul className="splash-links">
          <li className="img-pad-splash">
            <img src={window.qr} alt="" />
          </li>
          <li className="img-pad-splash">
            <img src={window.apple} alt="" />
          </li>
          <li className="img-pad-splash">
            <img src={window.google} alt="" />
          </li>
          <li className="img-pad-splash">
            <img src={window.amazon} alt="" />
          </li>
        </ul>
        <footer className="footer-splash">
          <img src={window.logoInvert} alt="littok" className="footer-img" />
          <form action="#">
            <select className="splash-footer-input" name="english" id="english">
              <option value="english">English</option>
            </select>
          </form>
          <ul className="splash-footer-ul">
            <li className="first-li">Company</li>
            <li>About LitTok</li>
            <li>Newsroom</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>LitDance</li>
          </ul>
          <ul className="splash-footer-ul">
            <li className="first-li">Programs</li>
            <li>LitTok for Good</li>
            <li>LitTok for Developers</li>
            <li>Advertise on LitTok</li>
          </ul>
          <ul className="splash-footer-ul">
            <li className="first-li">Support</li>
            <li>Help Center</li>
            <li>Safety Center</li>
            <li>Community Guidelines</li>
            <li>Transparency</li>
          </ul>
          <ul className="splash-footer-ul">
            <li className="first-li">Legal</li>
            <li>Cookies Policy</li>
            <li>Privacy Policy for Younger Users</li>
            <li>Intellectual Property Policy</li>
            <li>Law Enforcement</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
          <aside className="splash-aside-footer">© 2020 LitTok</aside>
        </footer>
      </>
    );
  }
}
