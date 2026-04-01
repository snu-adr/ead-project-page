import React from 'react';
import content from '../data/content.json';
import '../styles/components/Footer.css';

function Footer() {
  const { copyright } = content.footer;

  return (
    <footer className="footer">
      <p className="footer-copyright">{copyright}</p>
    </footer>
  );
}

export default Footer;
