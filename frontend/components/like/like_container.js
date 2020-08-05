import { connect } from "react-redux";
import { createLike, deleteLike,} from "../../actions/like_actions";
import Like from "./like";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
      ? state.entities.users[state.session.currentUser.id]
      : {},
    likes: Object.values(state.entities.likes),
  };
};

const mapDispatchToProps = (dispatch) => ({
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (likeId) => dispatch(deleteLike(likeId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Like);
