import React, { Component } from 'react';

export class Comments extends Component {
  render() {
    const { loggedInUser } = this.props;
    return (
      <div>
        {loggedInUser === null ? (
          <p>Sign in to Comment </p>
        ) : (
          <p>Add a comment</p>
        )}
      </div>
    );
  }
}

export default Comments;
