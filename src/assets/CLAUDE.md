# src/assets — CLAUDE.md

## 디렉토리 구조

```
assets/
├── images/    — 일반 이미지 (현재 비어 있음)
└── logos/     — Alliance 협력사 로고 (현재 비어 있음)
```

## 파일 네이밍 규칙

- 이미지: kebab-case (예: `hero-background.png`)
- 로고: 회사명 kebab-case (예: `hl-klemove.png`, `lg-electronics.png`)

## 이미지 포맷/크기 기준

- 로고: PNG (투명 배경 권장), 적절한 크기로 최적화
- 일반 이미지: WebP 또는 PNG
- 아직 준비되지 않은 이미지는 컴포넌트에서 플레이스홀더로 처리

## 현재 파일 목록

### logos/
- `lg.png` — LG전자 (Ecosystem 사용 중)
- `rideflux.png` — 라이드플럭스 (Ecosystem 사용 중, rideflux.com 공식 로고 756x187)
- `kakao-mobility.svg` — 카카오모빌리티 (Ecosystem 사용 중, kakaomobility.com 공식 SVG)
- `nota.png` — Nota AI (Ecosystem 사용 중)
- `manifest.json` — logo-fetcher 결과 매니페스트
- 그 외 `*.png/*.svg` — 이전 Ecosystem 후보 로고 보관 (a2z, gist, hanyang, hl-klemove, kaist, kookmin, sum, snu, netropy, visionary 등)

### images/
- (비어 있음 — 모델 모식도 이미지 추가 예정)
