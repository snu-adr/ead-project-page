import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import '../styles/components/Alliance.css';

const Alliance = () => {
  const { sectionTitle, sectionTag, sectionSubtitle, partners } = content.alliance;
  const ref = useScrollFadeIn();

  return (
    <section id="alliance" aria-label={sectionTitle}>
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} tag={sectionTag} centered />
      <div className="alliance-marquee-wrapper fade-in" ref={ref}>
        <div className="alliance-marquee-fade alliance-marquee-fade--left" aria-hidden="true" />
        <div className="alliance-marquee">
          <div className="alliance-marquee-track" role="list" aria-label="협력사 목록">
            {partners.map((partner) => (
              <div key={partner.name} className="alliance-marquee-item" role="listitem">
                {partner.logo ? (
                  <img
                    src={require(`../assets/logos/${partner.logo}`)}
                    alt={partner.name}
                    className="alliance-logo"
                    loading="lazy"
                  />
                ) : (
                  <span className="alliance-name">{partner.name}</span>
                )}
              </div>
            ))}
            {/* Duplicate for seamless infinite scroll — hidden from screen readers */}
            {partners.map((partner) => (
              <div key={`dup-${partner.name}`} className="alliance-marquee-item" aria-hidden="true">
                {partner.logo ? (
                  <img
                    src={require(`../assets/logos/${partner.logo}`)}
                    alt=""
                    className="alliance-logo"
                    loading="lazy"
                  />
                ) : (
                  <span className="alliance-name">{partner.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="alliance-marquee-fade alliance-marquee-fade--right" aria-hidden="true" />
      </div>
    </section>
  );
};

export default Alliance;
