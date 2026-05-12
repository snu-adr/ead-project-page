# src/data — CLAUDE.md

## content.json 구조

모든 UI 텍스트를 관리하는 중앙 데이터 파일. 컴포넌트에 텍스트를 하드코딩하지 않고 이 파일에서 관리한다.

## 다국어 파일

| 파일 | 언어 | 설명 |
|------|------|------|
| `content.json` | 한국어 | 기본 언어 |
| `content-en.json` | 영어 | 동일한 구조, 영문 번역 |

두 파일은 **구조가 동일**하다. 새 필드를 추가할 때 두 파일을 모두 업데이트해야 한다.
언어 전환은 `src/contexts/LanguageContext.jsx`에서 처리한다.

### 컴포넌트에서 content 접근 방법

```jsx
import { useLanguage } from '../contexts/LanguageContext';

const { content } = useLanguage();
// content는 현재 언어에 따라 content.json 또는 content-en.json을 반환
```

> ❌ `import content from '../data/content.json'` — 직접 import 사용 금지 (언어 전환 불가)

### 필드 구조

```
overview
 ├── sectionTitle: string — "개요" / "Overview"
 ├── sectionTag: string — "OVERVIEW"
 ├── sectionSubtitle: string
 ├── intro: string — 1단락 소개 텍스트
 ├── demosTitle: string — 데모 섹션 소제목
 ├── demos: [{ title, description, videoUrl }] — Real-world Demo, Simulation Closed-loop Demo (model.demos에서 이동)
 └── performance — 벤치마크 결과 블록 (데모 아래 표 2개)
      ├── heading: string — 블록 타이틀 (예: "Benchmark Results")
      ├── subheading: string — 한 줄 부제
      └── tables: array (현재 NAVSIM / Bench2Drive 2개)
           ├── label: string — 표 헤더 ("NAVSIM (Open-loop)" 등)
           ├── accent: "cyan" | "purple" — perf-table--{accent} 클래스로 색 결정
           ├── columns: string[] — 헤더 셀 라벨 (첫 컬럼은 모델)
           ├── rows: array
           │    ├── model: string — 모델 식별자 (monospace로 표시)
           │    ├── config: string — 모델 변형 설명 (LiDAR + Camera 등)
           │    └── values: string[] — columns 개수보다 1 적음 (첫 컬럼은 model)
           └── footnote: string — 표 하단 캡션 (출처/제외된 지표 등)

hero
 ├── title: string — 프로젝트명
 ├── sectionLabel: string — `<section>` aria-label (스크린 리더용 섹션 식별자)
 ├── subtitle: string — 한 줄 소개
 ├── affiliation: string — 소속
 ├── description: string — 프로젝트 설명 (E2E 모델 언급 포함)
 ├── highlights: string[] — 키워드 pill 뱃지 목록 (렌더링하지 않음)
 └── stats: [{ value, label }] — 핵심 지표 (360° Perception, E2E Planning, 5+ Partners, v1.0 Release)

roadmap
 ├── sectionTitle: string
 ├── sectionTag: string
 ├── sectionSubtitle: string
 └── versions: array
      ├── version: string — "v1.0", "v2.0"
      ├── status: string — "completed" | "upcoming"
      ├── statusLabel: string | undefined — 완료 시 표시할 텍스트 (예: "출시 완료")
      ├── badge: string | undefined — 상태 배지 ("Coming Soon" 등)
      ├── title: string — 버전 제목
      ├── period: string — 기간
      └── items: string[] — 세부 항목

dataset
 ├── sectionTitle: string
 ├── sectionTag: string
 ├── sectionSubtitle: string
 ├── realworld: { title, badge, description } — badge: "NAVSIM"
 ├── closedloop: { title, badge, description } — badge: "Bench2Drive"
 └── inhouse: { title, description, badge } — badge: "Coming Soon"

model
 ├── sectionTitle: string
 ├── sectionTag: string
 ├── sectionSubtitle: string
 ├── comparison
 │    ├── title: string
 │    ├── researchLabel: string — "Previous Research"
 │    ├── researchBadge: string — "이전 연구 모델"
 │    ├── eadLabel: string — "EAD"
 │    ├── eadBadge: string — "실배포 설계"
 │    └── items: [{ category, research, ead }] — 카메라, LiDAR, Perception Range, 설계 기준 (4 items)
 ├── architecture
 │    ├── title: string
 │    ├── description: string
 │    ├── diagramPlaceholder: string — "모식도 준비 중" (이미지 삽입 예정)
 │    ├── encoder: { label, title, description, tasks[] } — ENCODER/Perception 패널
 │    └── decoder: { label, title, description, tasks[] } — DECODER/Planning 패널
 ├── videoPlaceholder: string — 영상 준비 중 플레이스홀더 텍스트 (Overview.jsx의 VideoEmbed에 전달)
 └── flowLabels: { camera, lidar, trajectory } — 아키텍처 플로우 다이어그램 레이블
 (demos 필드는 overview.demos로 이동됨)

notice
 ├── sectionTitle: string
 ├── sectionTag: string
 ├── sectionSubtitle: string
 └── items: [{ date, status?, badge?, title, content }] — 날짜 내림차순 정렬
      status: "upcoming"→오렌지 테마, "complete"→시안 테마 (opacity 0.8), 없음→기본 시안
      badge: 표시할 텍스트 (예: "예정", "완료") — status와 독립적으로 관리

contributors
 ├── sectionTitle: string
 ├── sectionTag: string
 ├── sectionSubtitle: string
 └── rows: [{ rowLabel, members }]
      rowLabel: null → Project Leader 행, string → 팀 이름 (Team Perception / Team Planning)
      members: [{ name, role, lead?, teamLead? }]
        lead: true → Project Leader (왼쪽 큰 카드)
        teamLead: true → Team Leader (팀 패널 상단 카드)
        없음 → Researcher (3열 그리드 카드)

alliance
 ├── sectionTitle: string
 ├── sectionTag: string
 ├── sectionSubtitle: string
 └── partners: [{ name, logo }] — 마키 스크롤. 로고 사이즈는 Alliance.css의 `[data-name="..."]` 셀렉터로 개별 조정.

contact
 ├── sectionTitle: string
 ├── sectionTag: string
 ├── sectionSubtitle: string
 ├── collaborationTitle: string — intro 영역 타이틀
 ├── collaborationNote: string — intro 영역 본문 (줄바꿈은 \n, white-space: pre-line)
 ├── collaborationTopics: string[] — 협업 유형 pill tag 목록
 ├── downloadLabel: string — Download 카드 상단 라벨 (예: "Download")
 ├── downloadTitle: string — Download 카드 제목 (예: "EAD 다운로드 신청")
 ├── downloadNote: string — Download 카드 설명
 ├── downloadCta: string — Download 카드 CTA 버튼 텍스트
 ├── downloadUrl: string — 구글 폼 URL (외부 링크, 새 창)
 ├── emailLabel: string — 이메일 카드 라벨 (기본: "이메일" / "Email")
 ├── emailSub: string — 이메일 수신자 표시명 (예: "최준원 교수")
 ├── email: string — 이메일 주소
 ├── addressLabel: string — 연구실 카드 라벨
 ├── address: string — 연구실 이름
 ├── addressDetail: string — 연구실 영문 풀네임
 └── labUrl: string — 연구실 웹사이트 URL

footer
 └── copyright: string — 저작권 텍스트
```

### 새 섹션 추가 시 패턴

1. content.json에 `sectionTitle`, `sectionTag`, `sectionSubtitle` 포함하는 최상위 키 추가
2. 대응하는 컴포넌트에서 `import content from '../data/content.json'`
3. `SectionTitle` 컴포넌트에 title/subtitle/tag 전달
