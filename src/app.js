import React, { Component } from 'react';
import './App.css';
import Resume from './components/resume'
import Blogs from './components/blogs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Joseph Lawson</h1>
        <div>
          <Resume/>
          <Blogs/>
        </div>
      </div>
    );
  }
}

export default App;
