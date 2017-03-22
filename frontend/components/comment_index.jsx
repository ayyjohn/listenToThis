import React from 'react';

import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      user_id: this.props.currentUser.id,
      track_id: this.props.track_id
    };
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const comment = this.state;
    this.props.createComment(comment);
    this.setState({
      body: ""
    });
  }

  updateBody(event) {
    event.preventDefault();
    this.setState({
      body: event.currentTarget.value
    });
  }

  render() {

    return (
      <section className="track-detail-add-comment-area">
        <section className="track-detail-add-comment-box">
          <img
            src={ this.props.currentUser.avatar_url }
            className="track-detail-add-comment-user-picture"></img>
          <form className="new-comment-form" onSubmit={ this.handleSubmit }>
            <input
              className="track-detail-new-comment"
              type="text"
              placeholder="What did you think of the song?"
              onChange={ this.updateBody }
              value={ this.state.body }>
            </input>
            <input type="submit" value=""></input>
          </form>
        </section>
        <p>{ this.props.errors }</p>
        <section className="track-detail-user-info">
          <img src={ this.props.user.avatar_url }
            className="track-detail-user-photo" />
          <p>{ this.props.user.location }</p>
          <p>{ this.props.user.username }</p>
        </section>
        <h1 className="comments-header">{ this.props.comments.length } comments</h1>
        <ul className="comment-index">
          {this.props.comments.map( (comment, index) => <CommentIndexItem
          key={`comment-${comment.id}`}
          removeComment={ () => this.props.removeComment(comment.id) }
          comment={ comment } /> )}
        </ul>
      </section>
    );
  }
}

export default CommentIndex;
