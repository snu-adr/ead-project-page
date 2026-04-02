# src/components/common — CLAUDE.md

## 공통 컴포넌트 목록

### SectionTitle.jsx

섹션 상단의 제목/부제 헤더.

| Prop | 타입 | 필수 | 설명 |
|------|------|------|------|
| `title` | string | O | 섹션 제목 |
| `subtitle` | string | X | 섹션 부제 (없으면 렌더링 안 함) |
| `tag` | string | X | 섹션 태그 레이블 (예: "ROADMAP", "MODEL") |
| `centered` | bool | X | true이면 `section-title--centered` 클래스 추가 (중앙 정렬) |

**사용처**: RoadMap, Dataset, Model, Notice, Contributor, Alliance, Contact (centered: Alliance, Contact)

### VideoEmbed.jsx

iframe 영상 임베드 또는 플레이스홀더 표시.

| Prop | 타입 | 필수 | 설명 |
|------|------|------|------|
| `url` | string | X | 영상 URL (없으면 플레이스홀더 표시) |
| `title` | string | X | iframe title 속성 (접근성) |
| `placeholder` | string | X | URL 없을 시 표시할 텍스트 (기본값: "데모 영상 준비 중") |

**사용처**: Model (Real-world Demo, Simulation Closed-loop Demo)

플레이스홀더: URL 없을 시 회색 박스 + `placeholder` 텍스트. `placeholder` 미제공 시 "데모 영상 준비 중" 폴백. 비율 16:9.

### Card.jsx

범용 카드 래퍼 컴포넌트.

| Prop | 타입 | 필수 | 설명 |
|------|------|------|------|
| `title` | string | X | 카드 제목 |
| `children` | ReactNode | O | 카드 내부 콘텐츠 |

**사용처**: 현재 미사용 (향후 활용 가능)
