import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Main extends Component {
  render() {
    const videos = this.props.videos.map(video => (
      <Link to={`/video/${video.videoId}`}>
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
      </Link>
    ));

    return <div>{videos}</div>;
  }
}

export default Main;
