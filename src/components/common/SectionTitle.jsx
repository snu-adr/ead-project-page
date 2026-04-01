import React from 'react';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

const SectionTitle = ({ title, subtitle }) => {
  const ref = useScrollFadeIn();

  return (
    <div className="section-title fade-in" ref={ref}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
