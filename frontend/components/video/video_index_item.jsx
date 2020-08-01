import React from "react";
import ReactPlayer from "react-player";
import {Link} from 'react-router-dom'
class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  videoRender() {
    return (
      <div className="underline-vid">
        <div className="title-desc">
          <h3>{this.props.video.username}</h3>
          <Link to={`/videos/${this.props.video.id}`}><p>{this.props.video.description}</p></Link>
        </div>

        <ReactPlayer
          playing={true}
          className="videoBox"
          height={520}
          width={350}
          controls={true}
          volume={0}
          url={this.props.video.videoUrl}
        />
      </div>
    );
  }

  render() {
    return <div className="margin-top10">{this.videoRender()}</div>;
  }
}

export default VideoIndexItem;
