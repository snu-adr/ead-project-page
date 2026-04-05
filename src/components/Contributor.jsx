import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionTitle from './common/SectionTitle';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import '../styles/components/Contributor.css';

const MemberCard = ({ member }) => (
  <article className={`contributor-card${member.lead ? ' contributor-card--lead' : member.teamLead ? ' contributor-card--team-lead' : ''}`}>
    <div className="contributor-avatar-wrapper" aria-hidden="true">
      <div className="contributor-avatar">
        {member.name.charAt(0)}
      </div>
    </div>
    <h3>{member.name}</h3>
    <p>{member.role}</p>
  </article>
);

const Contributor = () => {
  const { content } = useLanguage();
  const { sectionTitle, sectionTag, sectionSubtitle, rows } = content.contributors;
  const ref = useScrollFadeIn();

  const leadRows = rows.filter(r => !r.rowLabel);
  const teamRows = rows.filter(r => r.rowLabel);

  return (
    <section id="contributor" aria-label={sectionTitle}>
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} tag={sectionTag} />
      <div className="contributor-rows fade-in" ref={ref}>
        {/* Project Lead */}
        {leadRows.map((row, i) => (
          <div key={i} className="contributor-row">
            <div className="contributor-grid">
              {row.members.map(member => <MemberCard key={member.name} member={member} />)}
            </div>
          </div>
        ))}

        {/* Teams side by side */}
        {teamRows.length > 0 && (
          <div className="contributor-teams">
            {teamRows.map((row, i) => {
              const teamLeader = row.members.find(m => m.teamLead);
              const researchers = row.members.filter(m => !m.teamLead);
              return (
                <div key={i} className="contributor-row">
                  <p className="contributor-row-label">{row.rowLabel}</p>
                  <div className="contributor-team-leader-wrapper">
                    <MemberCard member={teamLeader} />
                  </div>
                  <div className="contributor-grid contributor-grid--researchers">
                    {researchers.map(member => <MemberCard key={member.name} member={member} />)}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contributor;
