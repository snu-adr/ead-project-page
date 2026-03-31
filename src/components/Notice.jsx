import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import '../styles/components/Notice.css';

const Notice = () => {
  const { sectionTitle, sectionSubtitle, items } = content.notice;
  const ref = useScrollFadeIn();

  return (
    <section id="notice">
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} />
      <div className="notice-list fade-in" ref={ref}>
        {items.map((item, i) => (
          <div key={i} className="notice-item">
            <span className="notice-date">{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Notice;
