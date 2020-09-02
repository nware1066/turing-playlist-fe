import React, { Component } from 'react';
import './App.css';
import SongController from '../SongController/SongController';
import { getSongs } from '../APICalls/APICalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: [],

    }
  }

  componentDidMount() {
    getSongs()
    .then(songs => this.setState({songQueue: songs.songs}))
    .catch(error => console.log('getSongs error'))

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
          </main>
        </div>
      </div>
    )
  }
}

export default App;
