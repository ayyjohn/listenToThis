import React from 'react';
import { Link } from 'react-router';

const CommentIndexItem = ({ comment, removeComment }) => (
  <section className="comment-index-item">
    <img className="comment-avatar"
         src={ comment.avatar_url }>
    </img>
    <section className="comment-main">
      <p className="comment-username">{ comment.username }</p>
      <p className="comment-body">{ comment.body }</p>
      <button onClick={ removeComment }>Delete</button>
    </section>
  </section>
);

export default CommentIndexItem;
