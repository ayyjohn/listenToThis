import React from 'react';
import { Link } from 'react-router';

class CommentIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.renderDeleteButton = this.renderDeleteButton.bind(this);
  }

  renderDeleteButton() {
    if (this.props.comment.user_id !== this.props.currentUser.id) {
      return <div className="delete-comment-button"></div>;
    }
    else {
      return <button
        className="delete-comment-button"
        onClick={ this.props.removeComment }>Delete</button>;
    }
  }

  render() {
    return (
      <section className="comment-index-item">
        <section className="comment-index-item-1">
          <img className="comment-avatar"
            src={ this.props.comment.avatar_url }>
          </img>
          <section className="comment-main">
            <p className="comment-username">{ this.props.comment.username }</p>
            <p className="comment-body">{ this.props.comment.body }</p>
          </section>
        </section>
        { this.renderDeleteButton() }
      </section>
    );
  }
}

export default CommentIndexItem;
