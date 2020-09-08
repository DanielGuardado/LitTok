import React from "react";
import ProfileItem from "./profile_item";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
    this.props.fetchVideos();
  }

  user() {
    const { user } = this.props;
    if (user) {
      return <div>{user.username}</div>;
    }
  }
  vids() {
    const vid = this.props.videos.map((video, idx) => (
      <ProfileItem key={idx} video={video} />
    ));
    return <div className="flex-root-child">{vid}</div>;
  }

  render() {
    return (
      <div>
        {this.user()}
        {this.vids()}
      </div>
    );
  }
}
export default Profile;
