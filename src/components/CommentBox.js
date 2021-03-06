import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends React.Component {
    state = { comment: "" };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.comment}
                    />
                    <div>
                        <button disabled={this.validateComment()}>
                            Submit Comment
                        </button>
                    </div>
                </form>
                <button
                    className="fetch-comments"
                    type="button"
                    onClick={this.props.fetchComments}
                >
                    Fetch Comments
                </button>
            </div>
        );
    }
    handleChange = event => {
        this.setState({ comment: event.target.value });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: "" });
    };
    validateComment = () => {
        return !this.state.comment.length > 0;
    };
}

export default connect(
    null,
    actions
)(CommentBox);
