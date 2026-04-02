import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import useStaggeredFadeIn from '../hooks/useStaggeredFadeIn';
import '../styles/components/Contributor.css';

const Contributor = () => {
  const { sectionTitle, sectionTag, sectionSubtitle, members } = content.contributors;
  const ref = useStaggeredFadeIn();

  return (
    <section id="contributor">
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} tag={sectionTag} />
      <div className="contributor-grid stagger-fade-in" ref={ref}>
        {members.map((member, i) => (
          <div key={member.name} className={`contributor-card${member.lead ? ' contributor-card--lead' : ''}`}>
            <div className="contributor-avatar-wrapper" aria-hidden="true">
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
