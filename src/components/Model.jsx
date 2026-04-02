import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import VideoEmbed from './common/VideoEmbed';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import '../styles/components/Model.css';

const Model = () => {
  const { sectionTitle, sectionTag, sectionSubtitle, comparison, architecture, demos } = content.model;
  const refComparison = useScrollFadeIn();
  const refArchitecture = useScrollFadeIn();
  const refDemos = useScrollFadeIn();

  return (
    <div className="model-wrapper">
      <div className="model-grid-bg" aria-hidden="true" />
      <section id="model">
        <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} tag={sectionTag} />

        <div className="model-comparison fade-in" ref={refComparison}>
          <h3>{comparison.title}</h3>

          <div className="comparison-cards">
            {/* Previous Research card — muted style */}
            <div className="comparison-card comparison-card--research">
              <div className="comparison-card__header">
                <span className="comparison-card__label">{comparison.researchLabel}</span>
                <span className="comparison-card__badge">{comparison.researchBadge}</span>
              </div>
              <ul className="comparison-card__list">
                {comparison.items.map((item, i) => (
                  <li key={i} className="comparison-card__item">
                    <span className="comparison-card__category">{item.category}</span>
                    <span className="comparison-card__value">{item.research}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* VS divider */}
            <div className="comparison-vs">
              <div className="comparison-vs__line" />
              <span className="comparison-vs__text">VS</span>
              <div className="comparison-vs__line" />
            </div>

            {/* EAD card — bright accent style */}
            <div className="comparison-card comparison-card--ead">
              <div className="comparison-card__header">
                <span className="comparison-card__label">{comparison.eadLabel}</span>
                <span className="comparison-card__badge">{comparison.eadBadge}</span>
              </div>
              <ul className="comparison-card__list">
                {comparison.items.map((item, i) => (
                  <li key={i} className="comparison-card__item">
                    <span className="comparison-card__category">{item.category}</span>
                    <span className="comparison-card__value">{item.ead}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="model-architecture fade-in" ref={refArchitecture}>
          <h3>{architecture.title}</h3>
          <p>{architecture.description}</p>
        </div>

        <div className="model-demos fade-in" ref={refDemos}>
          {demos.map((demo, i) => (
            <div key={i} className="model-demo">
              <h4>{demo.title}</h4>
              <p>{demo.description}</p>
              <VideoEmbed url={demo.videoUrl} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Model;
