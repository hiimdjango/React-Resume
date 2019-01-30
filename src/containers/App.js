import React, { Component } from 'react';
import './App.css';
import Header from '../components/header/Header';
import About from '../components/about/About';
import Resume from '../components/resume/Resume';
import Portfolio from '../components/portfolio/Portfolio';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import resumeData from '../resumeData';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header data={resumeData} />
        <About data={resumeData} />
        <Resume data={resumeData} />
        <Portfolio data={resumeData}/>
        <Contact data={resumeData} />
        <Footer data={resumeData} />
      </div>
    );
  }
}

export default App;
