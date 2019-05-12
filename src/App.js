import React, { Component } from 'react';
import Home from './Components/Home/Home';

class App extends Component {

  componentDidMount() {
    document.body.style.background = `
    linear-gradient(to right, #3f4c6b 0%,#3f4c6b 100%)
    `
  }

  render() {
    return (
      <Home />
    );
  }
}


export default App;
