import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";
import CreateCommentForm from "./create_comment_form";

const mapStateToProps = (state) => {
  return {
  errors: state.errors.session,
  comment: state.entities.comments,
  }
};

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCommentForm);
