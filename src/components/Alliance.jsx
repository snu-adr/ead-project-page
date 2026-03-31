import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import '../styles/components/Alliance.css';

const Alliance = () => {
  const { sectionTitle, sectionSubtitle, partners } = content.alliance;
  const ref = useScrollFadeIn();

  return (
    <section id="alliance">
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} />
      <div className="alliance-grid fade-in" ref={ref}>
        {partners.map((partner, i) => (
          <div key={i} className="alliance-card">
            {partner.logo ? (
              <img src={partner.logo} alt={partner.name} />
            ) : (
              <span>{partner.name}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Alliance;
