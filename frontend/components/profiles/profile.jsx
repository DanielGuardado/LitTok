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
      return (
        <div className="container profile-name">
          <div className="row d-flex">
            <div className="col-1 col-md-2 col-lg-2 ml-5">
              <img
                id="profile-img"
                src="https://www.vippng.com/png/full/416-4161690_empty-profile-picture-blank-avatar-image-circle.png"
                className="p-1 rounded-circle img-thumbnail-p"
              />
            </div>
            <div className="col-4 col-md-6">
              <div className="d-flex mb-3">
                <h3 className="pr-5">{user.username}</h3>
              </div>
              <div className="d-flex mb-3">
                <button className="FollowButton">Follow</button>
              </div>
            </div>
            <p className="text-left p-left-profile pro-color">
              <span className="mr-5 p-sizing">
                <strong className="font-weight-bold">9</strong> Following
              </span>
              <span>
                <strong className="font-weight-bold">16.1k</strong> Followers
              </span>
              <span className="ml-5">
                <strong className="font-weight-bold">840</strong> Likes
              </span>
            </p>
          </div>
          <div className="text-left bio">This is a placeholder bio</div>
        </div>
      );
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
