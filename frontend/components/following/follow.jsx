import React from "react";

class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      currentUser: this.props.currentUser,
    };
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  handleFollow(e) {
    e.preventDefault();
    this.props.createFollow({ followee_id: this.state.user.id });
  }

  handleUnfollow(e) {
    e.preventDefault();
    let a;
    let id = this.state.user.id;
    this.state.currentUser.follower_relationships.forEach((el) => {
      if (el.followee_id === id) {
        a = el.id;
      }
    });
    this.props.deleteFollow(this.state.user.id);
  }

  followButton() {
    let id = this.state.user.id;
    let button;
    if (this.state.currentUser.follower_relationships) {
      this.state.currentUser.follower_relationships.forEach((el) => {
        if (el.followee_id === id) {
          button = (
            <div className="d-flex mb-3">
              <button onClick={this.handleUnfollow} className="FollowButton">
                Unfollow
              </button>
            </div>
          );
        }
      });
    }
    if (!button) {
      return (
        <div className="d-flex mb-3">
          <button onClick={this.handleFollow} className="FollowButton">
            Follow
          </button>
        </div>
      );
    } else {
      return button;
    }
  }

  render() {
    return <div>{this.followButton()}</div>;
  }
}

export default Follow;
