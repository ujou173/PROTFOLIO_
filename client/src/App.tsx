import React from 'react';
import logo from './logo.svg';
import './App.css';

import Intro from './introPage/intro';
import Project from './ProjectPage/Project';
import Footer from './FooterPage/Footer';

function App() {
  return (
    <div>
      <Intro />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
