# src/components — CLAUDE.md

## 컴포넌트 목록

| 파일 | 역할 | content.json 키 |
|------|------|-----------------|
| Navbar.jsx | 고정 네비게이션 바, 모바일 햄버거 메뉴 | `hero.title`, 각 섹션의 `sectionTitle` |
| Hero.jsx | 랜딩 히어로 섹션 (그라데이션 제목, 부제, 설명, stats, 스크롤 인디케이터). 레이더/glow 삭제됨. | `hero.*` |
| RoadMap.jsx | 버전별 타임라인 (좌우 교대 레이아웃) | `roadmap.*` |
| Dataset.jsx | 데이터셋 3카드: 실세계(NAVSIM) / 클로즈드루프(Bench2Drive) / 향후 계획 | `dataset.*` |
| Model.jsx | 이전 연구 vs EAD 비교 카드 + 모델 구조 패널 + 데모 영상 2개 | `model.*` |
| Notice.jsx | 공지사항 목록 (날짜순, 컴팩트) | `notice.*` |
| Contributor.jsx | 기여자: flex wrap 그리드 (9명), Project Lead 카드만 시안 테마로 시각 강조 | `contributors.*` |
| Alliance.jsx | 협력사 무한 마키 스크롤 (오른쪽→왼쪽). partners를 두 번 렌더링: 첫 번째는 `role="listitem"` 실제 항목, 두 번째는 `aria-hidden="true"` 복사본. 트랙에 `role="list" aria-label="협력사 목록"` | `alliance.*` |
| Contact.jsx | 연락처 — 이메일/GitHub 두 개의 클릭 가능 카드 레이아웃 (중앙 정렬) | `contact.*` |
| Footer.jsx | 하단 푸터 (저작권 텍스트) | `footer.*` |

## 공통 패턴

- 모든 섹션 컴포넌트는 props 없이 `content.json`에서 직접 데이터를 import
- `SectionTitle` 공통 컴포넌트로 섹션 헤더 통일
- `useScrollFadeIn` 훅으로 스크롤 페이드인 애니메이션 적용 (Hero, Navbar 제외)
- `useStaggeredFadeIn` 훅으로 자식 요소 순차 페이드인 (Dataset, Contributor 등)
- 각 컴포넌트의 CSS는 `src/styles/components/`에 동일 파일명으로 존재
- 자립적 콘텐츠 단위(공지사항 항목, 기여자 카드, 모델 데모, 데이터셋 카드, 로드맵 항목)는 `<article>` 요소 사용
- 장식 요소(timeline node, BEV 자동차, 스크롤 인디케이터 등)는 `aria-hidden="true"` 적용
- Navbar: 모바일 메뉴 닫힐 때(Escape/외부클릭/링크클릭) `toggleRef`로 버튼에 포커스 복귀
- Navbar: 햄버거 버튼 `aria-label`은 상태에 따라 동적으로 변경 (`isOpen ? "닫기" : "열기"`)
- 모든 `<section>` 요소에 `aria-label={sectionTitle}` 적용 — 스크린 리더 landmark 네비게이션 지원
- 리스트 스타일 제거 `<ul>`에는 VoiceOver 대응을 위해 `role="list"` 추가 + ESLint 예외 주석
- 목록 컨텍스트가 필요한 경우 `<ul>`에 `aria-label` 추가 (roadmap items, comparison lists)

## 의존 관계

```
App.jsx
 ├── Navbar.jsx
 ├── Hero.jsx
 ├── RoadMap.jsx ── common/SectionTitle.jsx
 ├── Dataset.jsx ── common/SectionTitle.jsx (useStaggeredFadeIn + useScrollFadeIn)
 ├── Model.jsx ─── common/SectionTitle.jsx, common/VideoEmbed.jsx
 ├── Notice.jsx ── common/SectionTitle.jsx
 ├── Contributor.jsx ── common/SectionTitle.jsx (useStaggeredFadeIn)
 ├── Alliance.jsx ── common/SectionTitle.jsx (useScrollFadeIn)
 ├── Contact.jsx ── common/SectionTitle.jsx (useScrollFadeIn)
 └── Footer.jsx
```

## 커스텀 훅

- `useScrollFadeIn` (`src/hooks/useScrollFadeIn.js`): IntersectionObserver 기반, 요소가 뷰포트에 진입하면 `visible` 추가, 벗어나면 제거 (양방향 트리거). threshold 0.1.
- `useStaggeredFadeIn` (`src/hooks/useStaggeredFadeIn.js`): IntersectionObserver 기반, 자식 요소에 순차적으로 `visible` 클래스 추가. 한 번만 트리거 (unobserve 호출). threshold 파라미터 지원.
