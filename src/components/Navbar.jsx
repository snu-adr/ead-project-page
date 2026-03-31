import React, { useState } from 'react';
import content from '../data/content.json';
import '../styles/components/Navbar.css';

const navItems = [
  { label: content.roadmap.sectionTitle, href: '#roadmap' },
  { label: content.dataset.sectionTitle, href: '#dataset' },
  { label: content.model.sectionTitle, href: '#model' },
  { label: content.notice.sectionTitle, href: '#notice' },
  { label: content.contributors.sectionTitle, href: '#contributor' },
  { label: content.alliance.sectionTitle, href: '#alliance' },
  { label: content.contact.sectionTitle, href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-logo" href="#hero">{content.hero.title}</a>
        <button
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={handleClick}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
