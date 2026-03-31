import React from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoadMap from './components/RoadMap';
import Dataset from './components/Dataset';
import Model from './components/Model';
import Notice from './components/Notice';
import Contributor from './components/Contributor';
import Alliance from './components/Alliance';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <RoadMap />
        <Dataset />
        <Model />
        <Notice />
        <Contributor />
        <Alliance />
        <Contact />
      </main>
    </div>
  );
}

export default App;
