import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import useStaggeredFadeIn from '../hooks/useStaggeredFadeIn';
import '../styles/components/Dataset.css';

const Dataset = () => {
  const { sectionTitle, sectionSubtitle, realworld, closedloop } = content.dataset;
  const ref = useStaggeredFadeIn();

  return (
    <section id="dataset">
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} />
      <div className="dataset-grid stagger-fade-in" ref={ref}>
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
