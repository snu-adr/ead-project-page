import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import useStaggeredFadeIn from '../hooks/useStaggeredFadeIn';
import '../styles/components/Alliance.css';

const Alliance = () => {
  const { sectionTitle, sectionSubtitle, partners } = content.alliance;
  const ref = useStaggeredFadeIn();

  return (
    <section id="alliance">
      <div className="centered">
        <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} />
      </div>
      <div className="alliance-showcase stagger-fade-in" ref={ref}>
        <div className="alliance-names">
          {partners.map((partner, i) => (
            <React.Fragment key={i}>
              <span className="alliance-name">{partner.name}</span>
              {i < partners.length - 1 && (
                <span className="alliance-separator" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="alliance-badge">
          <span>{partners.length} Partners</span>
        </div>
        <div className="alliance-divider" aria-hidden="true">
          <div className="alliance-divider-glow" />
        </div>
      </div>
    </section>
  );
};

export default Alliance;
