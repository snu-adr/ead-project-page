import React from 'react';
import './styles/global.css';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
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

function AppInner() {
  const { lang } = useLanguage();
  const skipLabel = lang === 'ko' ? '주요 콘텐츠로 건너뛰기' : 'Skip to main content';

  return (
    <div className="App">
      <a href="#main-content" className="skip-link">{skipLabel}</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <RoadMap />
        <div className="section-alt">
          <Model />
        </div>
        <Dataset />
        <div className="section-alt">
          <Notice />
        </div>
        <Contributor />
        <div className="section-alt">
          <Alliance />
        </div>
        <div className="section-divider" aria-hidden="true" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}

export default App;
