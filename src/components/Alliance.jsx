import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import '../styles/components/Alliance.css';

const Alliance = () => {
  const { sectionTitle, sectionTag, sectionSubtitle, partners } = content.alliance;
  const ref = useScrollFadeIn();

  // Duplicate partners for seamless infinite scroll
  const marqueeItems = [...partners, ...partners];

  return (
    <section id="alliance">
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} tag={sectionTag} centered />
      <div className="alliance-marquee-wrapper fade-in" ref={ref}>
        <div className="alliance-marquee-fade alliance-marquee-fade--left" />
        <div className="alliance-marquee">
          <div className="alliance-marquee-track">
            {marqueeItems.map((partner, i) => (
              <div key={i} className="alliance-marquee-item">
                {partner.logo ? (
                  <img
                    src={require(`../assets/logos/${partner.logo}`)}
                    alt={partner.name}
                    className="alliance-logo"
                  />
                ) : (
                  <span className="alliance-name">{partner.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="alliance-marquee-fade alliance-marquee-fade--right" />
      </div>
    </section>
  );
};

export default Alliance;
