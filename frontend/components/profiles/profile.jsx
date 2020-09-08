import React from "react";
import ProfileItem from "./profile_item";
import NavBar from "../navbar/navbar_conatiner";
import SideBar from "../sidebar/sidebar_container";

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
      return <div className="profile-name">{user.username}</div>;
    }
  }
  vids() {
    const vid = this.props.videos.map((video, idx) => (
      <ProfileItem key={idx} video={video} />
    ));
    return <div className="row">{vid}</div>;
  }

  render() {
    return (
      <div>
        <NavBar />
        <SideBar />
        {this.user()}
        <div className="container vids1">{this.vids()}</div>
      </div>
    );
  }
}
export default Profile;
