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
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <a href="#main-content" className="skip-link">주요 콘텐츠로 건너뛰기</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <RoadMap />
        <div className="section-alt">
          <Dataset />
        </div>
        <Model />
        <div className="section-alt">
          <Notice />
        </div>
        <Contributor />
        <div className="section-alt">
          <Alliance />
        </div>
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
