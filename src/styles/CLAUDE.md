# src/styles — CLAUDE.md

## 파일 구조

```
styles/
├── global.css              — CSS 변수, 리셋, 기본 스타일, 공통 클래스
└── components/             — 컴포넌트별 CSS
    ├── Navbar.css
    ├── Hero.css
    ├── RoadMap.css
    ├── Dataset.css
    ├── Overview.css
    ├── Model.css
    ├── Notice.css
    ├── Contributor.css
    ├── Alliance.css
    ├── Contact.css
    └── Footer.css
```

## CSS 변수 (global.css :root)

> `color-scheme: dark`가 `:root`에 설정됨 — 브라우저 기본 UI 요소(스크롤바 등)를 다크 모드로 처리

### 색상
| 변수 | 값 | 용도 |
|------|-----|------|
| `--color-bg` | #0a0f1a | 기본 배경 |
| `--color-bg-alt` | #111827 | 대체 배경 |
| `--color-bg-card` | #1a2235 | 카드 배경 |
| `--color-bg-nav` | rgba(10,15,26,0.9) | 네비게이션 배경 |
| `--color-text` | #e4e7ec | 기본 텍스트 |
| `--color-text-light` | #9ca3af | 보조 텍스트 |
| `--color-text-muted` | #6b7280 | 약한 텍스트 |
| `--color-accent` | #38bdf8 | 강조색 (시안) |
| `--color-accent-hover` | #7dd3fc | 강조색 호버 |
| `--color-accent-purple` | #a78bfa | 보조 강조색 (퍼플) |
| `--color-highlight` | #e94560 | 하이라이트 (레드) |
| `--color-warning` | #f97316 | 경고/예정 강조색 (오렌지) — Notice 예정 배지 |
| `--color-warning-hover` | #fb923c | 경고색 호버 |
| `--color-border` | #1e293b | 기본 테두리 |
| `--color-border-light` | #374151 | 밝은 테두리 |

### 타이포그래피
| 변수 | 값 |
|------|-----|
| `--font-primary` | 'Pretendard', system-ui, sans-serif |
| `--font-heading` | 'Pretendard', system-ui, sans-serif |

### 레이아웃
| 변수 | 값 |
|------|-----|
| `--max-width` | 1200px |
| `--nav-height` | 64px |

## 브레이크포인트

| 크기 | 적용 |
|------|------|
| 768px | 주요 모바일 브레이크포인트 (패딩 축소, 폰트 축소, 햄버거 메뉴 전환) |
| 480px | Hero stats 전용 — `flex-wrap: wrap`으로 2×2 배치 전환. 375px 기기에서 "PERCEPTION" 등 라벨(letter-spacing 2px)이 45px 컨테이너에 overflow하는 버그 방지 |

> 루트 CLAUDE.md에서 1440/1024/768/375px 4단계 정의하나, 현재 구현은 768px + 480px(Hero stats 전용) 사용

## 공통 클래스 (global.css)

- `.video-embed`: 16:9 비율 영상 임베드 (padding-top: 56.25%)
- `.video-placeholder`: 16:9 비율 플레이스홀더 (padding-top: 56.25%, 플레이 아이콘 + 텍스트 중앙 배치)
- `.card`: 카드 스타일 (배경, 테두리, 패딩, 라운드)
- `section`: `scroll-margin-top: var(--nav-height)` — 앵커 이동 시 네비게이션 바가 섹션 헤더를 가리지 않도록
- `:focus-visible`: 키보드 네비게이션 포커스 스타일 (2px 시안 outline, offset 3px)
- `::-webkit-scrollbar` / `scrollbar-width`: 다크 테마 커스텀 스크롤바 (6px, thin)
- `@media (prefers-reduced-motion: reduce)`: 모션 민감도 사용자 지원 — 모든 animation/transition 비활성화

## 스타일 컨벤션

- 다크 테마 기반
- backdrop-filter blur로 유리(frosted glass) 효과 (Navbar)
- hover 인터랙션은 사용하지 않음 (사용자 요청으로 전 컴포넌트에서 `:hover`/`:focus-within` 규칙 및 그에 딸린 `transition` 속성을 모두 제거함)
- Alliance: 무한 마키 스크롤 (CSS animation, 일시정지 없이 항상 흐름)
- 컴포넌트 CSS 파일명은 JSX 파일명과 동일 (PascalCase)
- **한국어 letter-spacing 규칙**: 한국어 텍스트에 `letter-spacing` 을 적용 시 최대 `0.5px`로 제한. 그 이상(1.5px 등)이면 한글 글자 사이가 시각적으로 분리돼 가독성이 크게 떨어짐. 영문 전용 라벨(ENCODER, DECODER, VS 등)은 2px 이상 허용.

## Hero.css 특수 효과

- `::before`: 멀티 레이어 glow (시안 2겹 + 퍼플 1겹 radial gradient)
- `::after`: 스캔라인 효과
- `.hero-grid`: 60px 센서 그리드 패턴 (mask-image로 중앙만 visible)
- `.hero-road`: 도로 원근 비주얼 (차선 4개 + 중앙 점선), glow/레이더 삭제됨
- `.hero-title`: gradient text (시안→화이트→퍼플, background-clip: text)
- `.hero-stats`: 핵심 지표 4개 (Perception, Planning, Partners, Release) — `<dl>` 태그로 변경, `.hero-stat-value { order: 1 }` + `.hero-stat-label { order: 2 }` 로 DOM 순서(dt→dd)와 시각 순서(값→레이블)를 분리
- `@media (prefers-reduced-motion: reduce)` (Hero.css): `.hero-title`, `.hero-subtitle`, `.hero-affiliation`, `.hero-description`, `.hero-stats` 에 `animation: none !important; opacity: 1 !important` — animation-delay 때문에 지연 없이 즉시 표시되도록 보장

## Navbar.css 구조

- `backdrop-filter: blur(8px→20px)` — 스크롤 시 glassmorphism 강화
- 모바일 메뉴: `max-height` + `opacity` + `visibility` 조합으로 부드러운 펼침/접힘 구현
- `@media (prefers-reduced-motion: reduce)`: `.navbar-links { transition-delay: 0s !important }` — 글로벌 규칙이 `transition-duration`만 0.01ms로 줄이고 `transition-delay`는 건드리지 않아, 메뉴 닫힐 때 visibility가 0.3s 지연 후 hidden되는 접근성 버그 방지

## Model.css 구조

- `.model-comparison`: Previous Research vs EAD 비교 카드 (4개 항목)
- `.model-architecture`: 모델 구조 통합 패널 (accent left border)
  - `.model-diagram-placeholder`: 모식도 이미지 준비 전 dashed border 플레이스홀더
  - `.model-arch-panels`: ENCODER + DECODER 2열 패널 (flex row)
  - `.model-arch-panel--encoder`: 시안 테마 (Object Detection, BEV Map Seg, Occupancy, Vector Map)
  - `.model-arch-panel--decoder`: 퍼플 테마 (Planning, Safety Reasoning)
  - `.model-arch-arrow`: ENCODER→DECODER 가로 화살표 (→, 모바일에서는 ↓)
- `.model-flow-diagram .model-flow-arrow`: 텍스트 "→" 화살표, 모바일(flex column)에서 `transform: rotate(90deg)`으로 "↓" 방향으로 표시
- `.model-demos`: 2열 그리드 — Real-world / Simulation 데모 (`.model-demo h3` — 헤딩 계층 h2→h3 직계이므로 h3 사용)

## Contributor.css 구조

- `.contributor-layout`: flex row — 왼쪽 `.contributor-lead-col` (Project Leader) + 오른쪽 `.contributor-teams` (Team 패널들)
- `.contributor-team-panel`: 팀 단위 카드 (background gradient + border + border-radius 20px). 내부: 팀 라벨 → Team Leader 카드 → `.contributor-team-divider` → 3열 researcher grid
- `.contributor-team-divider`: 가로 구분선 (gradient transparent→border-light→transparent)
- `.contributor-researcher-grid`: `grid-template-columns: repeat(3, 110px)` — 리서처 3명 배치
- 카드 크기 3단계: lead=180px/72px avatar, team-lead=130px/60px avatar, researcher=110px/56px avatar
- `.contributor-card--lead`: 애니메이션 그라데이션 avatar (lead-gradient 4s), purple role text, accent 계열 border
- `.contributor-card--team-lead`: 약한 시안 border, 90% opacity role text
- `.contributor-card p`: `letter-spacing: 0; white-space: nowrap` — "RESEARCHER" 텍스트가 110px 카드에서 줄바꿈되지 않도록
- `@media (prefers-reduced-motion: reduce)`: lead 카드의 `lead-gradient` 배경 애니메이션을 정지하고 초기 위치(`background-position: 0% 50%`)에 고정
- `@media (max-width: 768px)`: layout → flex-direction:column, teams → flex-direction:column

## Alliance.css 구조

- `.alliance-marquee-wrapper`: 카드 배경 + 좌우 페이드
- `.alliance-marquee-track`: 무한 스크롤 (25s linear infinite), `will-change: transform` 적용
- `.alliance-name`: `letter-spacing: 0.5px` (한국어 파트너명 포함으로 Korean letter-spacing 규칙 준수, `text-transform: uppercase` 없음)
- 모바일 반응형: `.alliance-name`에 명시적 `font-size: 1.1rem` 적용 — 부모(`alliance-marquee-item`)의 font-size를 자식이 상속하지 않는 문제 해결
- `@media (prefers-reduced-motion: reduce)`: 마키 애니메이션 제거 + `[aria-hidden="true"]` 복사본 `display: none` + `.alliance-marquee { overflow: visible }` — 글로벌 reduced-motion 규칙만으로는 트랙이 `-50%` 위치에 고정되어 절반이 사라지는 버그를 방지

## Overview.css 성능 표

- `.overview-performance`: 데모 아래 벤치마크 표 컨테이너 (max-width 1200px, 중앙 정렬)
- `.overview-performance-grid`: 2열 그리드, 768px 이하 1열
- `.perf-table`: 표 카드. `--cyan` / `--purple` modifier로 상단 보더와 라벨 색상 변경
- `.perf-table table`: `font-variant-numeric: tabular-nums` 적용 — 숫자 자릿수 정렬
- `.perf-model`: monospace 모델 식별자 (`EAD_navsim_LC` 등). `.perf-config`: 보조 설명 라벨 (작은 회색)
- `.perf-footnote`: 표 하단 캡션 (어두운 배경 strip)

## Contact.css 구조

- `#contact`: padding 60px (기본 100px보다 축소 — 콘텐츠가 적어 여백 최적화)
- `.contact-download`: 풀와이드 다운로드 CTA 배너 (시안→퍼플 그라데이션 보더/배경). 좌측 아이콘 + 가운데 텍스트(label/title/note) + 우측 그라데이션 CTA 버튼. 768px 이하: column stack + CTA 버튼 풀폭.
- `.contact-cards`: 중앙 정렬 flex 컨테이너 (max-width: 760px), 두 카드 래핑
- `.contact-card`: 이메일/연구실 클릭 카드 (이메일=시안 테마, 연구실=퍼플 테마)
- `.contact-card-icon`, `.contact-card-label`, `.contact-card-value`, `.contact-card-arrow`: 카드 내부 요소

## RoadMap.css 구조

- `.roadmap-card-title`: `display: flex; flex-direction: column` — 내부에 `.roadmap-version` (v1.0 등)과 `.roadmap-title-text` (Foundation 등)이 수직 배치. 두 요소를 하나의 `<h3>` 안에 포함하여 스크린리더가 "v1.0 Foundation"으로 읽도록 함

## Dataset.css 구조

- `.dataset-benchmark-badge`: NAVSIM/Bench2Drive 배지 (시안 테두리, 카드 제목 아래 표시)
