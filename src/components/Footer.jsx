import React from 'react';
import content from '../data/content.json';
import snuLogo from '../assets/logos/snu.svg';
import '../styles/components/Footer.css';

function Footer() {
  const { copyright } = content.footer;

  return (
    <footer className="footer">
      <div className="footer-inner">
        <img src={snuLogo} alt="서울대학교" className="footer-snu-logo" loading="lazy" />
        <span className="footer-logo" aria-hidden="true">{content.hero.title}</span>
        <p className="footer-copyright">{copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
