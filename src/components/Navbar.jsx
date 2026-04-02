import React, { useState, useEffect, useRef } from 'react';
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
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const toggleRef = useRef(null);

  const closeMenu = () => {
    setIsOpen(false);
    toggleRef.current?.focus();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.slice(1));
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.navbar')) {
        closeMenu();
      }
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleClick = () => {
    closeMenu();
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} aria-label="주요 내비게이션">
      <div className="navbar-container">
        <a className="navbar-logo" href="#hero">{content.hero.title}</a>
        <button
          type="button"
          ref={toggleRef}
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "내비게이션 메뉴 닫기" : "내비게이션 메뉴 열기"}
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
        >
          <span />
          <span />
          <span />
        </button>
        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
        <ul id="navbar-menu" className={`navbar-links ${isOpen ? 'open' : ''}`} role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={handleClick}
                className={activeSection === item.href.slice(1) ? 'active' : ''}
                aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
