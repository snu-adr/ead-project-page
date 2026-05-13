import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import snuLogo from '../assets/logos/snu.png';
import adrLogo from '../assets/logos/adr.png';
import eadLogo from '../assets/logos/ead_logo_icon.png';
import '../styles/components/Footer.css';

function Footer() {
  const { lang, content } = useLanguage();
  const { copyright } = content.footer;

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logos">
          <img src={snuLogo} alt={lang === 'ko' ? '서울대학교' : 'Seoul National University'} className="footer-snu-logo" loading="lazy" />
          <img src={adrLogo} alt="ADR Lab" className="footer-adr-logo" loading="lazy" />
        </div>
        <img src={eadLogo} alt={content.hero.title} className="footer-logo-img" />
        <span className="footer-logo" aria-hidden="true" hidden>{content.hero.title}</span>
        <p className="footer-copyright">{copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
