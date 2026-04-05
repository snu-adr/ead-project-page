import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionTitle from './common/SectionTitle';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import '../styles/components/Contributor.css';

const Contributor = () => {
  const { content } = useLanguage();
  const { sectionTitle, sectionTag, sectionSubtitle, rows } = content.contributors;
  const ref = useScrollFadeIn();

  const leadRows = rows.filter(r => !r.rowLabel);
  const teamRows = rows.filter(r => r.rowLabel);

  const renderRow = (row, i) => (
    <div key={i} className="contributor-row">
      {row.rowLabel && <p className="contributor-row-label">{row.rowLabel}</p>}
      <div className="contributor-grid">
        {row.members.map((member) => (
          <article key={member.name} className={`contributor-card${member.lead ? ' contributor-card--lead' : ''}`}>
            <div className="contributor-avatar-wrapper" aria-hidden="true">
              <div className="contributor-avatar">
                {member.name.charAt(0)}
              </div>
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </article>
        ))}
      </div>
    </div>
  );

  return (
    <section id="contributor" aria-label={sectionTitle}>
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} tag={sectionTag} />
      <div className="contributor-rows fade-in" ref={ref}>
        {leadRows.map((row, i) => renderRow(row, i))}
        {teamRows.length > 0 && (
          <div className="contributor-teams">
            {teamRows.map((row, i) => renderRow(row, i))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contributor;
