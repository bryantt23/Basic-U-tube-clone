import goldenRetrieverImg from './images/golden-retriever.jpg';
import dogeImg from './images/doge.jpg';
import catImg from './images/cat.jpg';
import Header from './components/Header';
import Video from './components/Video';
import Main from './components/Main';
import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: null,
      users: ['Jane', 'John'],
      videos: [
        {
          videoId: 0,
          title: 'Funny Golden Retriever Dogs',
          imageSrc: goldenRetrieverImg
        },
        { videoId: 1, title: 'Doge The Famous Dog Meme', imageSrc: dogeImg },
        { videoId: 2, title: 'Bizarre Cat videos', imageSrc: catImg }
      ]
    };
  }

  signIn = name => {
    this.setState({ loggedInUser: name });
  };

  signOut = () => {
    this.setState({ loggedInUser: null });
  };

  render() {
    const { loggedInUser, videos } = this.state;

    return (
      <Router>
        {' '}
        <div className='App'>
          <Header
            loggedInUser={loggedInUser}
            signOut={this.signOut}
            signIn={this.signIn}
          />{' '}
          <Switch>
            <Route
              path='/video'
              render={videoId => <Video videoId={videoId} videos={videos} />}
            />
            <Route path='/'>
              <Main videos={videos} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
