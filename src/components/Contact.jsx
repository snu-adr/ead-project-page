import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import useStaggeredFadeIn from '../hooks/useStaggeredFadeIn';
import '../styles/components/Contact.css';

const Contact = () => {
  const { sectionTitle, sectionSubtitle, email, github, address } = content.contact;
  const ref = useStaggeredFadeIn();

  return (
    <section id="contact">
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} />
      <div className="contact-grid stagger-fade-in" ref={ref}>
        <div className="contact-card">
          <span className="contact-icon">@</span>
          <span className="contact-label">Email</span>
          <span className="contact-value">
            <a href={`mailto:${email}`}>{email}</a>
          </span>
        </div>
        <div className="contact-card">
          <span className="contact-icon">&lt;/&gt;</span>
          <span className="contact-label">GitHub</span>
          <span className="contact-value">
            <a href={github} target="_blank" rel="noopener noreferrer">{github}</a>
          </span>
        </div>
        <div className="contact-card">
          <span className="contact-icon">&bull;</span>
          <span className="contact-label">Address</span>
          <span className="contact-value">{address}</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
