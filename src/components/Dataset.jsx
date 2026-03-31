import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import '../styles/components/Dataset.css';

const Dataset = () => {
  const { sectionTitle, sectionSubtitle, realworld, closedloop } = content.dataset;
  const ref = useScrollFadeIn();

  return (
    <section id="dataset">
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} />
      <div className="dataset-grid fade-in" ref={ref}>
        <div className="dataset-card">
          <h3>{realworld.title}</h3>
          <p>{realworld.description}</p>
        </div>
        <div className="dataset-card">
          <h3>{closedloop.title}</h3>
          <p>{closedloop.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Dataset;
