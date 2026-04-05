import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionTitle from './common/SectionTitle';
import VideoEmbed from './common/VideoEmbed';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import demoB2dGif from '../assets/images/demo_b2d.webm';
import demoRealworldGif from '../assets/images/demo_realworld.webm';
import '../styles/components/Overview.css';

const Overview = () => {
  const { content } = useLanguage();
  const { sectionTitle, sectionTag, sectionSubtitle, intro, demosTitle, demos } = content.overview;
  const videoPlaceholder = content.model.videoPlaceholder;

  const refIntro = useScrollFadeIn();
  const refDemos = useScrollFadeIn();

  const gifAssets = {
    'Real-world Demo': demoRealworldGif,
    'Simulation Closed-loop Demo': demoB2dGif,
  };

  return (
    <section id="overview" aria-label={sectionTitle}>
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} tag={sectionTag} />

      <p className="overview-intro fade-in" ref={refIntro}>
        {intro}
      </p>

      <div className="overview-demos fade-in" ref={refDemos}>
        <h3 className="overview-demos-title">{demosTitle}</h3>
        <div className="overview-demos-grid">
          {demos.map((demo) => {
            const url = demo.videoUrl || gifAssets[demo.title] || null;
            return (
              <article key={demo.title} className="overview-demo">
                <h4>{demo.title}</h4>
                <p>{demo.description}</p>
                <VideoEmbed url={url} title={demo.title} placeholder={videoPlaceholder} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Overview;
