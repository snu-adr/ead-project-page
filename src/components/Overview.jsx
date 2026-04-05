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
  const { sectionTitle, sectionTag, sectionSubtitle, introLead, introLines, demos } = content.overview;
  const videoPlaceholder = content.model.videoPlaceholder;

  const refIntro = useScrollFadeIn();
  const refDemos = useScrollFadeIn();

  const gifAssets = {
    'Real-world Demo': demoRealworldGif,
    'Simulation Closed-loop Demo': demoB2dGif,
  };

  return (
    <section id="overview" aria-label={sectionTitle}>
      <div className="overview-glow" aria-hidden="true" />
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} tag={sectionTag} />

      <div className="overview-intro fade-in" ref={refIntro}>
        <p className="overview-intro-lead">{introLead}</p>
        <div className="overview-intro-body">
          {introLines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>

      <div className="overview-demos fade-in" ref={refDemos}>
        {demos.map((demo) => {
          const url = demo.videoUrl || gifAssets[demo.title] || null;
          return (
            <article key={demo.title} className={`overview-demo overview-demo--${demo.accent}`}>
              <div className="overview-demo-header">
                <h3>{demo.title}</h3>
              </div>
              <VideoEmbed url={url} title={demo.title} placeholder={videoPlaceholder} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Overview;
