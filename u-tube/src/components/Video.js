import React, { Component } from 'react';
import Comments from './Comments';

export class Video extends Component {
  render() {
    const arr = this.props.videoId.history.location.pathname.split('/');
    const videoId = arr[arr.length - 1];
    const { videos, loggedInUser } = this.props.state;
    const { imageSrc, title } = videos[videoId];
    return (
      //   <div>
      //     {JSON.stringify(videoId)}
      //     {/* {JSON.stringify(videos)} */}
      //   </div>
      <div>
        <div
          key={videoId}
          style={{
            borderWidth: 2,
            borderStyle: 'solid',
            cursor: 'pointer',
            margin: 10
          }}
        >
          <img style={{ maxHeight: 300 }} alt='blah' src={imageSrc} />
          <h3>{title}</h3>
        </div>
        <Comments loggedInUser={loggedInUser} />
      </div>
    );
  }
}

export default Video;
