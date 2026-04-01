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
          <table className="comparison-table">
            <thead>
              <tr>
                <th></th>
                <th>Research</th>
                <th>EAD</th>
              </tr>
            </thead>
            <tbody>
              {comparison.items.map((item, i) => (
                <tr key={i}>
                  <td>{item.category}</td>
                  <td>{item.research}</td>
                  <td>{item.ead}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
