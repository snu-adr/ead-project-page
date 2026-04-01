import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import '../styles/components/Contributor.css';

const Contributor = () => {
  const { sectionTitle, sectionSubtitle, members } = content.contributors;
  const ref = useScrollFadeIn();

  return (
    <section id="contributor">
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} />
      <div className="contributor-grid fade-in" ref={ref}>
        {members.map((member, i) => (
          <div key={i} className="contributor-card">
            <div className="contributor-avatar-wrapper">
              <div className="contributor-avatar">
                {member.name.charAt(0)}
              </div>
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contributor;
