import goldenRetrieverImg from './images/golden-retriever.jpg';
import dogeImg from './images/doge.jpg';
import catImg from './images/cat.jpg';
import Header from './components/Header';
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
          videoId: 1,
          title: 'Funny Golden Retriever Dogs',
          imageSrc: goldenRetrieverImg
        },
        { videoId: 2, title: 'Doge The Famous Dog Meme', imageSrc: dogeImg },
        { videoId: 3, title: 'Bizarre Cat videos', imageSrc: catImg }
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
    const { loggedInUser } = this.state;

    return (
      <Router>
        {' '}
        <div className='App'>
          <Header
            loggedInUser={loggedInUser}
            signOut={this.signOut}
            signIn={this.signIn}
          />
          Hi
        </div>
      </Router>
    );
  }
}

export default App;
