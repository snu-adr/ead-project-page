import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import '../styles/components/RoadMap.css';

const RoadMapEntry = ({ v, index }) => {
  const ref = useScrollFadeIn();
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`roadmap-entry ${isLeft ? 'left' : 'right'} fade-in`}
      ref={ref}
    >
      <div className={`timeline-node ${v.status}`}>
        <div className="timeline-node-inner" />
      </div>
      <div className={`roadmap-card ${v.status}`}>
        <div className="roadmap-card-header">
          <span className="roadmap-version">{v.version}</span>
          {v.badge && <span className="roadmap-badge">{v.badge}</span>}
        </div>
        <h3 className="roadmap-card-title">{v.title}</h3>
        <span className="roadmap-period">{v.period}</span>
        <ul className="roadmap-items">
          {v.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        {v.status === 'completed' && (
          <div className="roadmap-status-tag completed-tag">Completed</div>
        )}
      </div>
    </div>
  );
};

const RoadMap = () => {
  const { sectionTitle, sectionSubtitle, versions } = content.roadmap;

  return (
    <div className="roadmap-wrapper">
      <section id="roadmap">
        <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} />
        <div className="roadmap-timeline">
          <div className="timeline-line" />
          {versions.map((v, index) => (
            <RoadMapEntry key={v.version} v={v} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RoadMap;
