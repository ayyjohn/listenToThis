import React from 'react';

import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <section className="track-detail-add-comment-area">
        <section className="track-detail-add-comment-box">
          <img
            src="https://s3-us-west-1.amazonaws.com/listentothis-dev/no_user.jpg"
            className="track-detail-add-comment-user-picture"></img>
          <input
            className="track-detail-new-comment"
            type="text"
            placeholder="What did you think of the song?">
          </input>
        </section>
        <ul className="comment-index">
          {this.props.comments.map( (comment, index) => <CommentIndexItem
          key={`comment-${comment.id}`}
          comment={ comment } /> )}
        </ul>
      </section>
    );
  }
}

export default CommentIndex;
