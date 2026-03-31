import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import '../styles/components/RoadMap.css';

const RoadMap = () => {
  const { sectionTitle, sectionSubtitle, versions } = content.roadmap;
  const ref = useScrollFadeIn();

  return (
    <section id="roadmap">
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} />
      <div className="roadmap-timeline fade-in" ref={ref}>
        {versions.map((v) => (
          <div key={v.version} className={`roadmap-card ${v.status}`}>
            <span className="roadmap-version">{v.version}</span>
            <h3 className="roadmap-card-title">{v.title}</h3>
            <span className="roadmap-period">{v.period}</span>
            <ul className="roadmap-items">
              {v.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {v.badge && <span className="roadmap-badge">{v.badge}</span>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoadMap;
