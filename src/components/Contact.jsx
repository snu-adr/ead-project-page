import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import '../styles/components/Contact.css';

const Contact = () => {
  const { sectionTitle, sectionTag, sectionSubtitle, collaborationNote, emailLabel, email } = content.contact;
  const ref = useScrollFadeIn();

  return (
    <section id="contact" aria-label={sectionTitle}>
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} tag={sectionTag} centered />
      <div className="contact-cards fade-in" ref={ref}>
        <p className="contact-note">{collaborationNote}</p>
        <a className="contact-card contact-card--email" href={`mailto:${email}`} aria-label={`이메일 보내기 — ${email}`}>
          <div className="contact-card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 7l10 7 10-7" />
            </svg>
          </div>
          <div className="contact-card-body">
            <span className="contact-card-label">{emailLabel}</span>
            <span className="contact-card-value">{email}</span>
          </div>
          <span className="contact-card-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
