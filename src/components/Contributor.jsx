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

  const leadRow = rows.find(r => !r.rowLabel);
  const teamRows = rows.filter(r => r.rowLabel);

  return (
    <section id="contributor" aria-label={sectionTitle}>
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} tag={sectionTag} />
      <div className="contributor-layout fade-in" ref={ref}>

        {/* Project Leader — 세로 중앙 */}
        {leadRow && (
          <div className="contributor-lead-col">
            {leadRow.members.map(member => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        )}

        {/* 팀 패널들 */}
        <div className="contributor-teams">
          {teamRows.map((row, i) => {
            const teamLeader = row.members.find(m => m.teamLead);
            const researchers = row.members.filter(m => !m.teamLead);
            return (
              <div key={i} className="contributor-team-panel">
                <p className="contributor-team-label">{row.rowLabel}</p>
                <div className="contributor-team-leader-wrapper">
                  <MemberCard member={teamLeader} />
                </div>
                <div className="contributor-team-divider" aria-hidden="true" />
                <div className="contributor-researcher-grid">
                  {researchers.map(member => (
                    <MemberCard key={member.name} member={member} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Contributor;
