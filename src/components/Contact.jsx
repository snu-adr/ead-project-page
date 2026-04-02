import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import '../styles/components/Contact.css';

const Contact = () => {
  const { sectionTitle, sectionTag, sectionSubtitle, emailLabel, githubLabel, email, github, address } = content.contact;
  const ref = useScrollFadeIn();

  return (
    <section id="contact" aria-label={sectionTitle}>
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} tag={sectionTag} centered />
      <div className="contact-cards fade-in" ref={ref}>
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
        <a className="contact-card contact-card--github" href={github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub — ${address} — 새 탭에서 열림`}>
          <div className="contact-card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </div>
          <div className="contact-card-body">
            <span className="contact-card-label">{githubLabel}</span>
            <span className="contact-card-value">{address}</span>
          </div>
          <span className="contact-card-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
