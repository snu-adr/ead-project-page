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
    ├── Model.css
    ├── Notice.css
    ├── Contributor.css
    ├── Alliance.css
    ├── Contact.css
    └── Footer.css
```

## CSS 변수 (global.css :root)

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

> 루트 CLAUDE.md에서 1440/1024/768/375px 4단계 정의하나, 현재 구현은 768px만 사용

## 공통 클래스 (global.css)

- `.fade-in` / `.fade-in.visible`: 스크롤 페이드인 애니메이션
- `.stagger-fade-in` / `.stagger-fade-in.visible`: 자식 요소 순차 페이드인
- `.video-embed`, `.video-placeholder`: 16:9 비율 영상 임베드
- `.card`: 카드 스타일 (배경, 테두리, 패딩, 라운드)
- `:focus-visible`: 키보드 네비게이션 포커스 스타일 (2px 시안 outline, offset 3px)
- `@media (prefers-reduced-motion: reduce)`: 모션 민감도 사용자 지원 — 모든 animation/transition 비활성화

## 스타일 컨벤션

- 다크 테마 기반
- backdrop-filter blur로 유리(frosted glass) 효과 (Navbar)
- hover 시 부드러운 transition (0.2s~0.6s)
- Alliance: 무한 마키 스크롤 (CSS animation, hover 시 일시정지)
- 컴포넌트 CSS 파일명은 JSX 파일명과 동일 (PascalCase)

## Hero.css 특수 효과

- `::before`: 멀티 레이어 glow (시안 2겹 + 퍼플 1겹 radial gradient)
- `::after`: 스캔라인 효과
- `.hero-grid`: 60px 센서 그리드 패턴 (mask-image로 중앙만 visible)
- `.hero-road`: 도로 원근 비주얼 (차선 4개 + 중앙 점선), glow/레이더 삭제됨
- `.hero-title`: gradient text (시안→화이트→퍼플, background-clip: text)
- `.hero-stats`: 핵심 지표 4개 (Perception, Planning, Partners, Release)

## Model.css 구조

- `.model-comparison`: Previous Research vs EAD 비교 카드 (4개 항목)
- `.model-architecture`: 모델 구조 통합 패널 (accent left border)
  - `.model-diagram-placeholder`: 모식도 이미지 준비 전 dashed border 플레이스홀더
  - `.model-arch-panels`: ENCODER + DECODER 2열 패널 (flex row)
  - `.model-arch-panel--encoder`: 시안 테마 (Object Detection, BEV Map Seg, Occupancy, Vector Map)
  - `.model-arch-panel--decoder`: 퍼플 테마 (Planning, Safety Reasoning)
  - `.model-arch-arrow`: ENCODER→DECODER 가로 화살표 (→, 모바일에서는 ↓)
- `.model-demos`: 2열 그리드 — Real-world / Simulation 데모

## Contributor.css 구조

- `.contributor-grid`: flex wrap + justify-content:center (9명, 5+4 자동 중앙 정렬)
- `.contributor-card`: flex: 0 1 200px (고정 너비 200px, 수축 허용)

## Alliance.css 구조

- `.alliance-marquee-wrapper`: 카드 배경 + 좌우 페이드
- `.alliance-marquee-track`: 무한 스크롤 (25s linear infinite)

## Contact.css 구조

- `#contact`: padding 60px (기본 100px보다 축소 — 콘텐츠가 적어 여백 최적화)
- `.contact-cards`: 중앙 정렬 flex 컨테이너 (max-width: 760px), 두 카드 래핑
- `.contact-card`: 이메일/GitHub 클릭 카드 (이메일=시안 테마, GitHub=퍼플 테마)
- `.contact-card-icon`, `.contact-card-label`, `.contact-card-value`, `.contact-card-arrow`: 카드 내부 요소

## Dataset.css 구조

- `.dataset-benchmark-badge`: NAVSIM/Bench2Drive 배지 (시안 테두리, 카드 제목 아래 표시)
