import React, { Component } from 'react';
import Particles from './Particles';
import logo from './logo.png';
import discord from './discord.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <a 
          href="https://discordapp.com/channels/365789833408413696/365789833408413698"
          target="_blank"
          className="App-discord"
        >
          <img src={discord} alt="discord" />
        </a>
        <Particles />
      </div>
    );
  }
}

export default App;
