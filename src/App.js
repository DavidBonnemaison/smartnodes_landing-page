import React, { Component } from 'react';
import Particles from './Particles';
import discord from './discord.png';
import './App.css';
import Logo from './Logo';
import Countdown from './Countdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Countdown />
        <div className="Join">
          <div className="Join-soon">Coming soon.</div>
          <a
            href="https://discordapp.com/channels/365789833408413696/365789833408413698"
            target="_blank"
            rel="noopener noreferrer"
            className="App-discord"
          >
            <div className="Join-text">Join the presale on discord</div>
            <img src={discord} alt="discord"/>
          </a>
        </div>
        <Particles />
      </div>
    );
  }
}

export default App;
