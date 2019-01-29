import React, { Component } from 'react';
import './App.css';
import Header from '../components/header/Header';
import About from '../components/about/About';
import resumeData from '../resumeData';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header data={resumeData} />
        <About data={resumeData} />
      </div>
    );
  }
}

export default App;
