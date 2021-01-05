import React, { Component } from 'react';

export class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event, videoId, loggedInUser) {
    event.preventDefault();
    this.props.addComment(videoId, loggedInUser, this.state.value);
    this.setState({ value: '' });
  }

  render() {
    const { loggedInUser, comments, videoId } = this.props;
    const commentsRendered = comments.map((comment, index) => (
      <p key={index}>
        <strong>{comment.user}:</strong> {comment.comment}
      </p>
    ));
    return (
      <div style={{ textAlign: 'left' }}>
        {loggedInUser === null ? (
          <p>Sign in to add a comment </p>
        ) : (
          <div>
            <form onSubmit={e => this.handleSubmit(e, videoId, loggedInUser)}>
              <label>
                Add a comment:
                <input
                  type='text'
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <input type='submit' value='Submit' />
            </form>
          </div>
        )}
        {commentsRendered}
      </div>
    );
  }
}

export default Comments;
