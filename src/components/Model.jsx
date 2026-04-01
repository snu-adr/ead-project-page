import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import VideoEmbed from './common/VideoEmbed';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import '../styles/components/Model.css';

const Model = () => {
  const { sectionTitle, sectionSubtitle, comparison, encoder, decoder } = content.model;
  const refComparison = useScrollFadeIn();
  const refEncoder = useScrollFadeIn();
  const refDecoder = useScrollFadeIn();

  return (
    <div className="model-wrapper">
      <div className="model-grid-bg" aria-hidden="true" />
      <section id="model">
        <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} />

        <div className="model-comparison fade-in" ref={refComparison}>
          <h3>{comparison.title}</h3>

          <div className="comparison-cards">
            {/* Research card — muted style */}
            <div className="comparison-card comparison-card--research">
              <div className="comparison-card__header">
                <span className="comparison-card__label">Research</span>
                <span className="comparison-card__badge">기존 모델</span>
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
                <span className="comparison-card__label">EAD</span>
                <span className="comparison-card__badge">실배포 설계</span>
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

        <div className="model-section fade-in" ref={refEncoder}>
          <h3>{encoder.title}</h3>
          <p>{encoder.description}</p>
          <VideoEmbed url={encoder.videoUrl} />
        </div>

        <div className="model-section fade-in" ref={refDecoder}>
          <h3>{decoder.title}</h3>
          <p>{decoder.description}</p>
          <VideoEmbed url={decoder.videoUrl} />
        </div>
      </section>
    </div>
  );
};

export default Model;
