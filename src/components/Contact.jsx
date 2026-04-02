import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import '../styles/components/Contact.css';

const Contact = () => {
  const { sectionTitle, sectionTag, sectionSubtitle, body, email, github } = content.contact;
  const ref = useScrollFadeIn();

  return (
    <section id="contact">
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} tag={sectionTag} centered />
      <div className="contact-prose fade-in" ref={ref}>
        <p>
          {body.split(email).map((part, i, arr) => (
            <React.Fragment key={i}>
              {part.includes(github) ? (
                <>
                  {part.split(github).map((subpart, j, subarr) => (
                    <React.Fragment key={j}>
                      {subpart}
                      {j < subarr.length - 1 && (
                        <a href={github} target="_blank" rel="noopener noreferrer">{github}</a>
                      )}
                    </React.Fragment>
                  ))}
                </>
              ) : part}
              {i < arr.length - 1 && (
                <a href={`mailto:${email}`}>{email}</a>
              )}
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Contact;
