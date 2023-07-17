import React from 'react';
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
