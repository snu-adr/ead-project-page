import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import '../styles/components/Contact.css';

const Contact = () => {
  const {
    sectionTitle, sectionTag, sectionSubtitle,
    collaborationTitle, collaborationNote, collaborationTopics,
    emailLabel, email,
    addressLabel, address, addressDetail, labUrl,
  } = content.contact;
  const ref = useScrollFadeIn();

  return (
    <section id="contact" aria-label={sectionTitle}>
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} tag={sectionTag} centered />

      <div className="contact-body fade-in" ref={ref}>
        <div className="contact-intro">
          <h3 className="contact-intro-title">{collaborationTitle}</h3>
          <p className="contact-note">{collaborationNote}</p>
          <ul className="contact-topics" aria-label="협업 유형">
            {collaborationTopics.map((topic) => (
              <li key={topic} className="contact-topic-tag">{topic}</li>
            ))}
          </ul>
        </div>

        <div className="contact-cards">
          {/* Email */}
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

          {/* Lab website */}
          <a className="contact-card contact-card--lab" href={labUrl} target="_blank" rel="noreferrer" aria-label={`${address} 웹사이트`}>
            <div className="contact-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="contact-card-body">
              <span className="contact-card-label">{addressLabel}</span>
              <span className="contact-card-value">{address}</span>
              <span className="contact-card-sub">{addressDetail}</span>
            </div>
            <span className="contact-card-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
