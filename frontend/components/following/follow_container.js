import { connect } from "react-redux";
import { createFollow, deleteFollow } from "../../actions/follow_actions";
import Follow from "./follow";

const mapDispatchToProps = (dispatch) => ({
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (followId) => dispatch(deleteFollow(followId)),
});

export default connect(null, mapDispatchToProps)(Follow);
