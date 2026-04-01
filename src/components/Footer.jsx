import React from 'react';
import content from '../data/content.json';
import '../styles/components/Footer.css';

function Footer() {
  const { copyright } = content.footer;

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">{content.hero.title}</span>
        <p className="footer-copyright">{copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
