import React, { Component } from 'react';

import Header from './pages/Header'
import Home from './pages/Home'
import ReactPlayer from 'react-player'

class App extends Component{
  render(){
    return(
      <div className="App">
        <Header />
        <Home />
        <ReactPlayer/>
      </div>
    )
  }
}

export default App;
