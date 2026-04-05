import React from 'react';
import content from '../data/content.json';
import snuLogo from '../assets/logos/snu.png';
import adrLogo from '../assets/logos/adr.png';
import '../styles/components/Footer.css';

function Footer() {
  const { copyright } = content.footer;

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logos">
          <img src={snuLogo} alt="서울대학교" className="footer-snu-logo" loading="lazy" />
          <img src={adrLogo} alt="ADR Lab" className="footer-adr-logo" loading="lazy" />
        </div>
        <span className="footer-logo" aria-hidden="true">{content.hero.title}</span>
        <p className="footer-copyright">{copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
