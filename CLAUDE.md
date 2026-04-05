# EAD — 자율주행 프로젝트 포트폴리오 사이트 — CLAUDE.md

> 이 문서는 프로젝트의 모든 맥락을 담고 있다. 모든 작업 전에 이 문서를 참고하라.

## 프로젝트 개요

### EAD란?

EAD(Evolutionary Autonomous Driving)는 서울대학교 ADR 연구실이 주도하는 자율주행 프로젝트이다. "Evolutionary"는 점진적으로 발전해 나가겠다는 의미를 담고 있다.

### 배경 및 취지

국내 자율주행 업계는 미국·중국 대비 기술 격차가 크고, 투자도 활발하지 못하다. 진보적인 연구개발이 어려운 업계의 현실을 연구실 차원에서 돕기 위해 시작된 프로젝트이다.

### 역할 분담

- **연구실 (서울대 ADR Lab)**: 모델 연구개발, 데이터셋 큐레이팅, 모델 학습 등 진보적 기술
- **Alliance 기업들 (HL Klemove, A2Z, Rideflux, LG전자, 노타 등)**: 하드웨어, 데이터셋 취득 등 실무적 문제

각자 잘하는 것을 맡아 협업한다.

### 최종 목표

국내 자율주행 업계에 데이터셋과 모델을 공개하는 것.

### 기존 연구용 모델과의 차이

기존 연구용 모델(UniAD, VAD 등)은 실제 배포에 필요한 요구사항과 거리가 멀다. EAD는 실제 배포를 전제로 설계하며, sensor setup, interpretability, perception range 등에서 실용적 요구사항을 반영한다.

| 항목 | 연구용 모델 | EAD |
|------|-----------|-----|
| 카메라 | 3대 | 전방위 |
| Perception Range | 전방 32m | 전방위 |
| 설계 기준 | 벤치마크 성능 | 실제 배포 |

### 모델 구조 (사이트에서 개념 수준으로만 소개)

EAD v1.0은 **인코더 + 디코더** 구조로 이루어진다.

- **인코더 (Perception)**: Object Detection, BEV Map Segmentation, Occupancy Prediction, Vector Map Construction — 전방위 카메라 + LiDAR 입력을 통합하여 주변 환경을 구조화된 표현으로 변환. CVPR 2026 SafeDrive 논문의 Sparse World Model 개념을 차용.
- **디코더 (Planning)**: 인코더 출력을 바탕으로 주행 경로 계획 및 Safety Reasoning 수행 (E2E).
- v1.0은 Camera-Only / LiDAR-Camera 두 가지 구성을 제공한다.
- 코드베이스는 NAVSIM, TransFuser, GKT, BEVFormer, iPad 오픈소스를 기반으로 한다.

> **사이트에는 개념 수준만 노출.** 구체적인 아키텍처 세부사항은 포함하지 않는다 — 모식도는 사용자가 직접 제작하여 이미지로 삽입 예정.

### 데이터셋 요약

| 구분 | 이름 | 설명 |
|------|------|------|
| Real-world | NAVSIM | 실제 도로 데이터셋/벤치마크 |
| Closed-loop | Bench2Drive (CARLA) | CARLA 시뮬레이터 기반 폐쇄루프 평가 |
| In-house | 미정 | v2.0에서 직접 취득 예정 |

### 현재 상태

- v1.0 개발 완료, 배포 준비 중
- v1.0은 오픈소스 데이터셋/벤치마크(NAVSIM, Bench2Drive)에서 훈련 및 검증 수행
- Camera-Only / LiDAR-Camera 두 가지 모델 구성 제공
- 자체 데이터셋은 미취득 (v2.0에서 In-house Dataset 계획)
- Alliance 기업들과 협업 진행 중 (HL Klemove, LG전자, A2Z, Nota AI, 한양대학교, GIST)
- FMTC 2026 발표 완료, CVPR 2026 SafeDrive 논문 (연구실 발표)

### 타겟 오디언스

사이트의 주요 방문자는 다음과 같다:
1. 국내 자율주행 업계 종사자 (잠재적 데이터셋/모델 사용자)
2. Alliance 참여를 고려하는 기업 (잠재적 파트너)
3. 정부/투자 관계자

→ 사이트 톤은 **기술력에 대한 신뢰감**과 **협업 개방성**을 동시에 전달해야 한다.

---

### 사이트 스펙

이 포트폴리오/소개 사이트의 기술적 성과와 모델 구조를 효과적으로 전달하는 것이 핵심 목적이다.

- **프로젝트명**: EAD (Evolutionary Autonomous Driving)
- **소속**: 서울대학교 ADR 연구실
- **GitHub 레포**: ead
- **형태**: 원페이지 스크롤 + 상단 네비게이션 탭 (클릭 시 해당 섹션으로 스무스 스크롤)
- **기술 스택**: React (JSX)
- **Node.js 관리**: nvm (시스템 환경 격리를 위해 conda 대신 nvm 사용)
- **배포**: GitHub Pages (`https://[username].github.io/ead`)
- **언어**: 한국어 (다국어 확장 대비 설계)
- **담당자**: 코딩은 Claude Code, 디자인·콘텐츠 감수 및 방향 결정은 사용자, 사실 확인(기술 내용, 이름, URL 등)은 반드시 사용자 확인 후 반영

## 작업 환경

- **서버**: 원격 서버에 VS Code Remote-SSH로 접속하여 작업
- **Claude Code**: 서버 터미널에서 실행
- **개발 확인**: `npm start` 실행 → VS Code가 자동 포트포워딩 → 로컬 브라우저에서 `localhost:3000` 확인
- **배포 확인**: GitHub Pages (`https://[username].github.io/ead`)

## 사이트 구조

아래 순서대로 섹션을 배치한다. 상단 네비게이션 탭에 각 섹션이 대응된다.

```
1. Hero — 프로젝트명, 한 줄 소개, 핵심 비주얼
2. Road Map — 버전별 타임라인
   - v1.0: [내용 추후 입력]
   - v2.0: In-house Dataset, VLM 등
3. 데이터셋
   - Real-world 데이터셋 설명
   - Closed-loop 데이터셋 설명
4. 모델 큰 그림
   - 연구용 모델과의 차이점 (비교 시각화)
     - 카메라: 3대 → 전방위
     - Range: 전방 32m → 전방위
   - 인코더 Concept 설명 + 데모 영상 임베드
   - 디코더 Concept 설명 + 데모 영상 임베드
5. 공지사항 — 최신 공지 목록
6. Contributor — 기여자 목록 (이름, 역할)
7. Alliance — 협력사 로고/이름 (HL Klemove, A2Z, Rideflux, LG전자, 노타 등)
8. Contact — 연락처, GitHub 링크
```

## 핵심 규칙 (반드시 준수)

### 텍스트 분리
- **모든 UI 텍스트는 `src/data/content.json`에서 관리한다.**
- 컴포넌트 내부에 한국어 텍스트를 하드코딩하지 않는다.
- 이유: 향후 `content-en.json`을 추가하여 다국어 전환을 구현할 예정이다.
- content.json 구조 예시:
```json
{
  "hero": {
    "title": "프로젝트명",
    "subtitle": "한 줄 소개",
    "description": "프로젝트 설명"
  },
  "roadmap": {
    "versions": [
      { "version": "v1.0", "title": "...", "items": ["...", "..."] },
      { "version": "v2.0", "title": "...", "items": ["...", "..."], "badge": "Coming Soon" }
    ]
  },
  "dataset": { ... },
  "model": { ... },
  "notice": { ... },
  "contributors": [ ... ],
  "alliance": [ ... ],
  "contact": { ... }
}
```

### 컴포넌트 구조
- 파일 위치: `src/components/`
- 파일명: PascalCase (Hero.jsx, RoadMap.jsx, Dataset.jsx, Model.jsx, Notice.jsx, Contributor.jsx, Alliance.jsx, Contact.jsx, Navbar.jsx)
- 각 섹션은 독립적인 컴포넌트로 분리한다.
- 공통 UI 요소(SectionTitle, VideoEmbed, Card 등)는 `src/components/common/`에 둔다.

### Hero 섹션 금지 요소
- **Highlight pill 뱃지는 넣지 않는다.** (content.json에 highlights 데이터가 있더라도 Hero에 렌더링하지 않음)
- **CTA 버튼은 넣지 않는다.** (ctaText, ctaHref 등 버튼 요소 금지)

### 동영상
- 모든 데모 영상은 iframe 임베드 방식으로 처리한다.
- 영상 URL은 content.json에서 관리한다.
- 아직 영상이 준비되지 않은 곳은 플레이스홀더(회색 박스 + "데모 영상 준비 중" 텍스트)로 채운다.
- 비율은 16:9를 유지한다.

### 이미지
- 이미지 파일은 `src/assets/images/`에 저장한다.
- Alliance 로고 등은 `src/assets/logos/`에 저장한다.
- 아직 준비되지 않은 이미지는 플레이스홀더로 처리한다.

### 스타일링
- CSS 변수를 사용하여 색상, 폰트 등 테마를 관리한다.
- 반응형 브레이크포인트: 1440px / 1024px / 768px / 375px
- 768px 이하에서 네비게이션은 햄버거 메뉴로 전환한다.

### Git 규칙
- 작업 단위가 완료될 때마다 commit한다 (섹션 1개 완성, 버그 수정, 스타일 변경 등).
- commit 전에 `npm start`로 빌드 에러가 없는지 확인한다.
- **commit message는 반드시 영어로 작성한다.**
- commit message는 아래 형식을 따른다:
  ```
  [type] Short description in English

  Types:
  feat     — New feature or section
  fix      — Bug fix
  style    — Design/style changes (no functional change)
  refactor — Code restructuring (no functional change)
  content  — content.json text updates
  setup    — Environment or deployment config
  ```
- commit message 예시:
  ```
  feat: Implement Navbar component
  feat: Complete RoadMap section layout
  style: Apply dark theme globally
  fix: Fix navigation breaking on mobile
  content: Update Hero section text
  setup: Configure GitHub Pages deployment
  ```
- 사용자가 별도로 지시하지 않는 한, 작업 완료 후 자동으로 commit한다.
- push는 사용자가 직접 하거나 명시적으로 요청할 때만 수행한다.

## 콘텐츠 방향

### 톤 / 문체

- **대상 독자**: 자율주행 업계 종사자, 잠재적 파트너사, 정부/투자 관계자
- **기조**: "학술 논문"도 "마케팅 카피"도 아닌 중간 — 전문성은 유지하되 이해하기 쉽게
- **문장 길이**: 한 문장에 하나의 아이디어. 짧고 명확하게.
- **시제**: 현재 또는 완료형 위주. 미래 기능은 "예정", "계획" 등을 명시한다.

### 용어 통일 정책

| 구분 | 원칙 | 예시 |
|------|------|------|
| 고유명사 / 기술 용어 | 영문 유지 | BEV, E2E, VLM, NAVSIM, LiDAR |
| 설명 | 한국어 | "전방위 카메라", "실제 배포" |
| 영문 병기 | 허용 (괄호) | "점유 예측(Occupancy Prediction)" |
| 첫 등장 약어 | 풀네임 병기 필수 | "EAD(Evolutionary Autonomous Driving)" |

### 타겟별 핵심 메시지

| 타겟 | 핵심 메시지 |
|------|-----------|
| 업계 종사자 | "실배포 기준으로 설계된 국내 최초의 E2E 자율주행 모델. 곧 오픈소스 공개." |
| 잠재적 파트너사 | "우리가 기술을 담당, 여러분이 데이터·하드웨어를 담당. 역할 분담으로 빠르게 함께 성장." |
| 정부/투자 관계자 | "국내 자율주행 격차 해소를 위한 산학 협력 프로젝트. 검증된 기술, 확장 가능한 생태계." |

### 콘텐츠 작성 시 금지 사항

- 사실 확인이 안 된 수치나 성능 벤치마크 수치를 게재하지 않는다.
- "세계 최고", "혁신적" 같은 근거 없는 수식어를 쓰지 않는다.
- 아직 미정인 사항을 확정된 것처럼 쓰지 않는다 (반드시 "예정", "계획" 표기).

## 섹션별 콘텐츠 스펙

각 섹션의 핵심 메시지와 정보 우선순위를 정의한다.

### Hero

- **핵심 메시지**: "국내 자율주행의 새로운 기준을 만드는 E2E 모델"
- **포함**: 프로젝트명, 소속, 한 줄 설명, 핵심 지표(360° Perception, E2E Planning, 파트너 수, 버전)
- **제외**: CTA 버튼, Highlight pill 뱃지 (CLAUDE.md 금지 규칙 참고)

### 로드맵

- **핵심 메시지**: "이미 v1.0이 완성됐고, v2.0은 더 크게 확장된다"
- **v1.0 확정 내용**: 오픈소스 데이터셋(NAVSIM, Bench2Drive) 기반 훈련·검증, 전방위 카메라+LiDAR, 360° Perception, E2E Planning, Camera-Only / LiDAR-Camera 제공
- **v2.0 계획**: 자체 데이터 파이프라인, Large-scale Dataset 기반 모델, VLM 통합

### 데이터셋

- **핵심 메시지**: "실도로 + 시뮬레이션 두 축에서 검증된 모델"
- **Real-world**: NAVSIM 벤치마크 (실제 도로 데이터)
- **Closed-loop**: Bench2Drive (CARLA 시뮬레이터 기반 폐쇄루프 평가)
- **In-house**: v2.0 계획, Alliance 기업과 협업하여 취득 예정
- **제외**: 구체적인 데이터 규모(미확정), 세부 annotation 스펙

### 모델

- **핵심 메시지**: "기존 연구 모델과 달리 실배포를 전제로 설계됨"
- **비교표**: 카메라 구성, Perception Range, 설계 기준 (기존 vs EAD)
- **구조 설명 (개념 수준)**:
  - 인코더: Perception (Object Detection, BEV Map Segmentation, Occupancy Prediction, Vector Map Construction) — Sparse World Model 개념 차용
  - 디코더: Planning + Safety Reasoning
- **모식도**: 사용자가 직접 제작한 이미지 삽입 예정 → 현재는 이미지 플레이스홀더
- **데모 영상**: 준비 중 → 플레이스홀더 유지
- **제외**: 코드 레벨 아키텍처 세부사항, 하이퍼파라미터, 성능 수치(미공개)

### 공지사항

- **핵심 메시지**: "활발히 진행 중인 살아있는 프로젝트"
- **현재 항목**: FMTC 2026 발표(2026-03-19), EAD v1.0 공식 발표 예정(2026-04-06)
- **추가 고려**: CVPR 2026 SafeDrive 논문 — 사이트 반영 여부는 사용자 결정

### Contributor

- **핵심 메시지**: "전문성을 갖춘 연구팀이 직접 개발"
- **현재 명단**: 최준원(Project Lead), 김정호·방건호·백근주·오지용·유승훈·정원준·신홍재·이동영(Researcher)

### Alliance

- **핵심 메시지**: "업계 실무 파트너들과 함께 만드는 생태계"
- **현재 파트너**: HL Klemove, LG전자, A2Z, Nota AI, 한양대학교, GIST
- **포함**: 파트너 로고/이름 (로고 준비 전까지 텍스트 플레이스홀더)

### Contact

- **핵심 메시지**: "문은 열려 있다 — 협업 제안 환영"
- **포함**: 이메일, GitHub, 소속
- **현재 상태**: 이메일/GitHub URL 미확정 (`contact@example.com`은 플레이스홀더)

## 디자인 방향

- **톤**: 다크 테마 — 기술력 신뢰감 + 자율주행 센서 UI 연상
- **폰트**: Pretendard (한국어 최적화, system-ui 폴백)
- **색상 팔레트** (CSS 변수로 관리):
  - 주 배경: `#0a0f1a` (딥 네이비)
  - 카드/대체 배경: `#1a2235`, `#111827`
  - 주 텍스트: `#e4e7ec` / 보조: `#9ca3af` / 약한: `#6b7280`
  - 주 액센트: `#38bdf8` (시안) — 자율주행 센서 UI 느낌
  - 보조 액센트: `#a78bfa` (퍼플) — Hero 그라데이션 등에 미세하게 사용
  - 하이라이트: `#e94560` (레드)
- **언어 통일**: 네비게이션, 섹션 제목 등 UI 텍스트는 모두 한국어로 통일
- **비주얼 모티프**: BEV(Bird's Eye View) 레이더, 센서 그리드 — 자율주행 분야임을 시각적으로 전달
- **애니메이션 원칙**: CSS-only, 외부 라이브러리 없음. 은은하고 느린 전환 (0.2s~2s)

### 반응형 동작 명세

| 요소 | Desktop (768px 초과) | Mobile (768px 이하) |
|------|---------------------|-------------------|
| Hero 타이틀 | 4.5rem, letter-spacing 8px | 3rem, letter-spacing 4px |
| Hero 설명 | 1.1rem | 0.95rem |
| 하이라이트 pill | 0.9rem, padding 6px 16px, gap 16px | 0.8rem, padding 5px 12px, gap 10px |
| CTA 버튼 | padding 12px 32px | padding 10px 24px |
| BEV 비주얼 | 600px | 400px |
| 센서 그리드 | 60px 셀 | 40px 셀 |
| 네비게이션 | 가로 링크 목록 | 햄버거 메뉴 |
| 섹션 패딩 | 100px 24px | 60px 16px |

## 파일 구조

```
ead/
├── CLAUDE.md                    ← 프로젝트 전체 맥락 (이 문서)
├── package.json
├── public/
│   └── index.html
└── src/
    ├── App.jsx                  ← 메인 앱 (섹션 배치)
    ├── index.js
    ├── assets/
    │   ├── CLAUDE.md            ← 이미지/로고 관리 규칙, 파일 목록
    │   ├── images/
    │   └── logos/
    ├── components/
    │   ├── CLAUDE.md            ← 컴포넌트 목록, 각 컴포넌트의 역할/props/의존성
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── RoadMap.jsx
    │   ├── Dataset.jsx
    │   ├── Model.jsx
    │   ├── Notice.jsx
    │   ├── Contributor.jsx
    │   ├── Alliance.jsx
    │   ├── Contact.jsx
    │   └── common/
    │       ├── CLAUDE.md        ← 공통 컴포넌트 목록, 사용법, props 정의
    │       ├── SectionTitle.jsx
    │       ├── VideoEmbed.jsx
    │       └── Card.jsx
    ├── data/
    │   ├── CLAUDE.md            ← content.json 구조 설명, 필드별 의미
    │   └── content.json
    └── styles/
        ├── CLAUDE.md            ← CSS 변수 목록, 색상 팔레트, 브레이크포인트 정리
        ├── global.css           ← CSS 변수, 리셋, 기본 스타일
        └── components/          ← 컴포넌트별 CSS (또는 CSS Modules)
```

## 디렉토리 문서화 규칙 (반드시 준수)

각 주요 디렉토리에 `CLAUDE.md`를 생성하고, 해당 디렉토리의 맥락을 관리한다. Claude Code는 작업 시 해당 디렉토리의 CLAUDE.md를 자동으로 읽으므로, 전체 코드를 탐색하지 않고도 디렉토리 단위로 빠르게 맥락을 파악할 수 있다.

### 핵심 원칙

> **코드를 변경하면 반드시 해당 디렉토리의 CLAUDE.md도 함께 변경한다. 이것은 선택이 아니라 필수다.**

### 규칙

1. **생성 시점**: 디렉토리에 첫 파일을 만들 때 CLAUDE.md도 함께 생성한다.
2. **업데이트 시점**: 해당 디렉토리 내 파일을 추가/수정/삭제할 때마다 CLAUDE.md도 함께 업데이트한다. 이를 절대로 빠뜨리지 않는다.
3. **commit 포함**: CLAUDE.md 변경사항도 해당 작업의 commit에 포함한다.

### CLAUDE.md 업데이트가 필요한 변경 유형

아래 변경이 발생하면 **반드시** 관련 CLAUDE.md를 업데이트한다:

| 변경 유형 | 업데이트할 CLAUDE.md |
|-----------|---------------------|
| 컴포넌트 추가/삭제/이름 변경 | `src/components/CLAUDE.md` |
| 컴포넌트의 props 변경 | `src/components/CLAUDE.md` |
| 컴포넌트 간 의존 관계 변경 | `src/components/CLAUDE.md` |
| 공통 컴포넌트 추가/삭제/props 변경 | `src/components/common/CLAUDE.md` |
| 공통 컴포넌트의 사용처 변경 | `src/components/common/CLAUDE.md` |
| content.json에 필드 추가/삭제/구조 변경 | `src/data/CLAUDE.md` |
| CSS 변수 추가/삭제/값 변경 | `src/styles/CLAUDE.md` |
| 새 CSS 파일 추가/삭제 | `src/styles/CLAUDE.md` |
| 브레이크포인트 추가/변경 | `src/styles/CLAUDE.md` |
| 이미지/로고 파일 추가/삭제 | `src/assets/CLAUDE.md` |
| 새 디렉토리 생성 | 해당 디렉토리에 CLAUDE.md 생성 |
| 커스텀 훅 추가/삭제/인터페이스 변경 | `src/components/CLAUDE.md` (훅 섹션) |

### 업데이트 체크리스트 (매 작업 완료 시)

작업을 마무리하기 전에 아래를 점검한다:

1. 이번 작업에서 변경한 파일이 속한 디렉토리의 CLAUDE.md를 확인했는가?
2. 새로 추가한 파일/컴포넌트가 CLAUDE.md에 반영되었는가?
3. 삭제한 파일/컴포넌트가 CLAUDE.md에서 제거되었는가?
4. props, 의존 관계, CSS 변수 등의 변경이 CLAUDE.md에 반영되었는가?
5. CLAUDE.md 변경이 이번 commit에 포함되었는가?

### 각 CLAUDE.md에 포함할 내용

**`src/components/CLAUDE.md`**:
- 전체 컴포넌트 목록과 각각의 한 줄 설명
- 각 컴포넌트가 사용하는 content.json 키
- 컴포넌트 간 의존 관계 (트리 형태)
- 커스텀 훅 목록과 설명
- 공통 패턴 요약

**`src/components/common/CLAUDE.md`**:
- 공통 컴포넌트 목록
- 각 컴포넌트의 props 정의 (타입, 필수 여부, 설명)
- 어떤 섹션에서 사용 중인지

**`src/data/CLAUDE.md`**:
- content.json의 전체 구조 설명 (트리 형태)
- 각 필드의 의미와 타입
- 새로운 섹션 추가 시 따라야 할 패턴

**`src/styles/CLAUDE.md`**:
- 파일 구조
- CSS 변수 목록 (이름, 값, 용도)
- 브레이크포인트 정리
- 공통 클래스 목록
- 스타일 컨벤션

**`src/assets/CLAUDE.md`**:
- 디렉토리 구조
- 이미지/로고 파일 목록
- 파일 네이밍 규칙
- 이미지 크기/포맷 기준

# CLAUDE.md 수정안 — "작업 진행 방식" 섹션

> 기존 CLAUDE.md에서 "## 작업 진행 방식" ~ "## 현재 진행 상태" 직전까지를 아래로 교체하세요.

---

## 작업 진행 방식

### 도구
- **Glance MCP**: localhost:3000의 스크린샷을 찍어 직접 확인할 수 있다.

### 역할 분리 원칙

> **Claude Code는 디자인 판단과 콘텐츠 판단을 하지 않는다.**

| 역할 | 담당 | 하는 일 |
|------|------|---------|
| 구현 + 검증 | Claude Code (메인) | 코드 작성, 빌드 확인, 레이아웃 버그 체크, content.json 초안 |
| 디자인 + 콘텐츠 리뷰 | 서브에이전트 | 스크린샷 기반 디자인 피드백 + 메시지/정보 위계 피드백 |
| 최종 판단 | 사용자 | 방향성 결정, 사실 확인, 승인 |

코드를 직접 작성한 에이전트는 자기 결과물에 확증 편향이 생긴다. "여백이 적절한가", "이 문장이 타겟에게 맞는가" 같은 주관적 판단은 Claude Code가 하지 않는다.

### 서브에이전트를 호출하지 않는 경우

- 사용자가 직접 디자인 방향을 질문하거나 의견을 구할 때 → 사용자와 직접 대화로 해결한다.
- 사용자가 구체적인 수정 지시를 내렸을 때 (예: "배경 바꿔", "여백 줄여") → 바로 구현한다.

서브에이전트는 **섹션 구현이 끝난 후 결과물을 평가할 때만** 호출한다.

### 섹션 개발 프로세스

```
1. 섹션별 콘텐츠 스펙 확인 (이 문서의 "섹션별 콘텐츠 스펙" 참고)
2. content.json 초안 작성 (사실 확인 필요한 항목은 플레이스홀더 유지)
3. 코드 구현
4. 셀프 검증 (객관적 항목만, 최대 2회)
5. 서브에이전트 디자인+콘텐츠 리뷰 호출
6. 리뷰 피드백 중 코드/콘텐츠로 해결 가능한 것 반영
7. 사용자에게 스크린샷 + 리뷰 결과 보고 (콘텐츠 사실 확인 요청 포함)
8. 사용자 승인 → commit → 다음 섹션
```

### Step 2: 셀프 검증

Glance로 스크린샷을 찍고, **아래 항목만** 점검한다:

- [ ] 빌드 에러 없음
- [ ] 텍스트 잘림, 요소 겹침, overflow 없음
- [ ] content.json과 실제 렌더링 일치
- [ ] 텍스트가 배경 위에서 읽히는가 (명백한 대비 문제만)
- [ ] 반응형 브레이크포인트에서 깨지는 요소 없음 (데스크톱 기준)

문제가 있으면 자체 수정 (최대 2회). 주관적 디자인 판단은 하지 않는다.

### Step 3: 서브에이전트 디자인 리뷰

셀프 검증을 통과하면, Task 도구로 서브에이전트를 호출하여 디자인 리뷰를 받는다.

- **리뷰 프롬프트**: `src/review-prompt.md` 전문을 전달
- **함께 전달**: 섹션명, 한 줄 설명, Glance 스크린샷, **리뷰 모드**
- **CLAUDE.md는 서브에이전트에 전달하지 않는다** (확증 편향 방지)

#### 리뷰 모드

| 모드 | 범위 | 용도 |
|------|------|------|
| `quick` | 구조, 레이아웃, 정보 위계 | 초기 구현, 빠른 방향 확인 |
| `detailed` | 타이포, 색상, 간격, 애니메이션까지 전부 | 디자인 마무리 단계 |

- **기본값은 `quick`**이다.
- 사용자가 "detailed로 리뷰해" 또는 "디테일하게 봐줘"라고 지시하면 `detailed`로 호출한다.
- 서브에이전트 호출 시 모드를 명시한다: `리뷰 모드: quick` 또는 `리뷰 모드: detailed`

#### 리뷰 결과 처리

메인 Claude Code가 서브에이전트 피드백을 받은 후:

1. 이전 리뷰에서 이미 반영한 항목은 무시한다.
2. 사용자가 이미 판단을 내린 항목 (예: "현재 상태로 유지")은 무시한다.
3. 새로운 지적만 필터링하여 반영하거나 사용자에게 전달한다.

### Step 5: 사용자 보고 형식

```
## [섹션명] 구현 완료

### 스크린샷
(Glance 데스크톱 스크린샷)

### 검증 결과
- 빌드: ✅
- 레이아웃 버그: ✅ 없음 / ⚠️ 수정함 (내용)

### 서브에이전트 디자인 리뷰 요약 (모드: quick/detailed)
- 잘 된 점: ...
- 반영한 개선사항: ... (N건)
- 사용자 판단이 필요한 사항: ... (있으면)

### 다음 섹션으로 넘어가도 될까요?
```

### 전체 총평 (모든 섹션 완료 후)

모든 섹션이 끝나면 풀페이지 스크린샷을 찍고, 서브에이전트에게 총평을 요청한다.
총평 시 `src/review-prompt.md`의 맥락에 아래를 추가 전달:

```
모든 섹션이 완성된 전체 사이트 스크린샷입니다.
개별 섹션이 아닌 전체 관점에서 총평해주세요:
1. 섹션 간 시각적 흐름과 리듬
2. 전체적으로 가장 시급하게 개선할 3가지
3. 하나만 바꿔도 인상이 크게 달라질 포인트
```

### 작업 시 주의사항
- 한 번에 전체 사이트를 만들지 않는다. 섹션 단위로 작업한다.
- 새 섹션을 만들기 전에 기존 코드와의 일관성을 확인한다 (스타일, 네이밍, 구조).
- content.json을 수정할 때 기존 구조를 깨뜨리지 않는다.
- 작업 완료 후 `npm start`로 빌드 에러가 없는지 확인한다.

## 현재 진행 상태

- [x] 프로세스 문서 작성
- [x] Phase 0: 환경 세팅 (React 프로젝트 초기화, GitHub 연결)
- [x] Phase 1: 레퍼런스 수집 및 디자인 방향 결정
- [x] Phase 2: 사이트 골격 만들기 (플레이스홀더)
- [ ] Phase 3: 디자인 + 콘텐츠 업그레이드 ← **현재 단계 (완료 없음, 계속 개선)**
- [ ] Phase 4: GitHub Pages 배포