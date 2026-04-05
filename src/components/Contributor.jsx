import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionTitle from './common/SectionTitle';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import '../styles/components/Contributor.css';

/* 기여자 사진 맵 (이름 → 이미지) */
const photoMap = {
  '최준원': require('../assets/images/contributors/최준원.jpg'),
  '최준원 교수': require('../assets/images/contributors/최준원.jpg'),
  '방건호': require('../assets/images/contributors/방건호.jpg'),
  '김정호': require('../assets/images/contributors/김정호.jpg'),
  '백근주': require('../assets/images/contributors/백근주.jpg'),
  '정원준': require('../assets/images/contributors/정원준.jpg'),
  '이동영': require('../assets/images/contributors/이동영.jpg'),
  '오지용': require('../assets/images/contributors/오지용.jpg'),
  '유승훈': require('../assets/images/contributors/유승훈.jpg'),
  '신홍재': require('../assets/images/contributors/신홍재.jpg'),
};

/* EN 이름 → KO 이름 역매핑 */
const enToKo = {
  'Prof. Jun Won Choi': '최준원',
  'Geonho Bang': '방건호',
  'Jungho Kim': '김정호',
  'Keunjoo Baek': '백근주',
  'Geunju Baek': '백근주',
  'Wonjun Jeong': '정원준',
  'Dongyoung Lee': '이동영',
  'Jiyong Oh': '오지용',
  'Seunghoon Yu': '유승훈',
  'Hongjae Shin': '신홍재',
};

const getPhoto = (name) => photoMap[name] || photoMap[enToKo[name]];

const splitName = (name) => {
  const idx = name.lastIndexOf(' ');
  if (idx === -1) return null;
  return { given: name.slice(0, idx), family: name.slice(idx + 1) };
};

const MemberCard = ({ member }) => {
  const photo = getPhoto(member.name);
  const isResearcher = !member.lead && !member.teamLead;
  const nameParts = isResearcher ? splitName(member.name) : null;

  return (
    <article className={`contributor-card${member.lead ? ' contributor-card--lead' : member.teamLead ? ' contributor-card--team-lead' : ''}`}>
      <div className="contributor-avatar-wrapper" aria-hidden="true">
        {photo
          ? <img className="contributor-avatar-photo" src={photo} alt={member.name} />
          : <div className="contributor-avatar">{member.name.charAt(0)}</div>
        }
      </div>
      <h3>
        {nameParts
          ? <><span className="contributor-name-given">{nameParts.given}</span><span className="contributor-name-family">{nameParts.family}</span></>
          : member.name
        }
      </h3>
      <p>{member.role}</p>
    </article>
  );
};

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
