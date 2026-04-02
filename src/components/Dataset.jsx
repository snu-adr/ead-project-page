import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import useStaggeredFadeIn from '../hooks/useStaggeredFadeIn';
import '../styles/components/Dataset.css';

const Dataset = () => {
  const { sectionTitle, sectionTag, sectionSubtitle, realworld, closedloop, inhouse } = content.dataset;
  const ref = useStaggeredFadeIn();

  return (
    <section id="dataset">
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} tag={sectionTag} />
      <div className="dataset-grid stagger-fade-in" ref={ref}>
        {/* Real-world Dataset Card */}
        <div className="dataset-card">
          <span className="dataset-card-number">01</span>
          <div className="dataset-card-icon" aria-hidden="true">
            <div className="dataset-icon-realworld">
              <div className="dataset-icon-globe">
                <div className="dataset-icon-globe-ring" />
                <div className="dataset-icon-globe-ring dataset-icon-globe-ring--tilted" />
                <div className="dataset-icon-globe-dot" />
              </div>
            </div>
          </div>
          <div className="dataset-card-body">
            <h3>{realworld.title}</h3>
            {realworld.badge && <span className="dataset-benchmark-badge">{realworld.badge}</span>}
            <p>{realworld.description}</p>
          </div>
        </div>

        {/* Closed-loop Dataset Card */}
        <div className="dataset-card">
          <span className="dataset-card-number">02</span>
          <div className="dataset-card-icon" aria-hidden="true">
            <div className="dataset-icon-loop">
              <div className="dataset-icon-loop-circle" />
              <div className="dataset-icon-loop-arrow dataset-icon-loop-arrow--top" />
              <div className="dataset-icon-loop-arrow dataset-icon-loop-arrow--bottom" />
            </div>
          </div>
          <div className="dataset-card-body">
            <h3>{closedloop.title}</h3>
            {closedloop.badge && <span className="dataset-benchmark-badge">{closedloop.badge}</span>}
            <p>{closedloop.description}</p>
          </div>
        </div>

        {/* In-house Dataset Card — upcoming, muted style */}
        <div className="dataset-card dataset-card--upcoming dataset-card--full">
          <span className="dataset-card-number">03</span>
          {inhouse.badge && <span className="dataset-upcoming-badge">{inhouse.badge}</span>}
          <div className="dataset-card-icon" aria-hidden="true">
            <div className="dataset-icon-future">
              <div className="dataset-icon-future-arrow" />
              <div className="dataset-icon-future-dots">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <div className="dataset-card-body">
            <h3>{inhouse.title}</h3>
            <p>{inhouse.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dataset;
