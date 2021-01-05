import React, { Component } from 'react';

export class Main extends Component {
  render() {
    const videos = this.props.videos.map(video => (
      <div
        key={video.videoId}
        style={{
          borderWidth: 2,
          borderStyle: 'solid',
          cursor: 'pointer',
          margin: 10
        }}
      >
        <img style={{ maxHeight: 300 }} alt='blah' src={video.imageSrc} />
        <h3>{video.title}</h3>
      </div>
    ));

    return <div>{videos}</div>;
  }
}

export default Main;
