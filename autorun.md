# Autorun — 자율 실행 지침서

> 사용자가 "autorun 시작"이라고 하면 이 파일의 지침을 따라 토큰이 소진될 때까지 자율 실행한다.
> 각 섹션은 사용자 승인 없이 완료 후 바로 다음 섹션으로 넘어간다.
> 단, 아래 **멈춤 조건**에 해당하면 즉시 사용자에게 보고하고 대기한다.

---

## 실행 전 준비

1. 현재 브랜치 확인 (`git branch`) → `design-content-upgrade` 브랜치인지 확인
2. `npm start`가 실행 중인지 확인 (Glance 사용 전제)
3. CLAUDE.md의 `## 현재 진행 상태 > Phase 3` 체크리스트를 읽고 **첫 번째 미완료 항목**부터 시작

---

## 루프 구조

```
WHILE (Phase 3 미완료 항목이 남아 있음):
  1. 다음 미완료 섹션 선택
  2. 콘텐츠 업데이트 (content.json)
  3. 코드 구현 / 개선
  4. 셀프 검증
  5. 서브에이전트 리뷰
  6. 피드백 반영
  7. CLAUDE.md 진행 상태 업데이트
  8. commit
  9. 루프 반복

END → 모든 섹션 완료 시 풀페이지 총평 요청 후 사용자 보고
```

---

## 각 단계 세부 지침

### Step 1: 섹션 선택

CLAUDE.md `## 현재 진행 상태 > Phase 3` 에서 `[ ]`(미완료) 항목 중 가장 위에 있는 것 선택.
이미 `[x]`(완료)된 항목은 건너뛴다.

### Step 2: 콘텐츠 업데이트 (content.json)

- CLAUDE.md `## 섹션별 콘텐츠 스펙`에서 해당 섹션의 핵심 메시지와 포함/제외 항목 확인
- content.json의 해당 섹션 텍스트를 스펙에 맞게 개선
- **사실 확인이 필요한 항목** (이메일, GitHub URL 등 CLAUDE.md에 명시되지 않은 것) → `[PLACEHOLDER - 사용자 확인 필요]` 유지하고 넘어감
- src/data/CLAUDE.md도 함께 업데이트

### Step 3: 코드 구현 / 개선

- 해당 섹션 컴포넌트(`src/components/`)와 CSS(`src/styles/components/`) 개선
- CLAUDE.md 디자인 방향 (색상, 폰트, 애니메이션 원칙) 준수
- 기존 코드와의 일관성 유지 (네이밍, 구조, 공통 컴포넌트 활용)
- 관련 CLAUDE.md 파일 업데이트 (컴포넌트 변경 시 `src/components/CLAUDE.md` 등)

### Step 4: 셀프 검증

Glance로 스크린샷을 찍고 아래만 확인:

- [ ] 빌드 에러 없음
- [ ] 텍스트 잘림, 요소 겹침, overflow 없음
- [ ] content.json과 실제 렌더링 일치
- [ ] 명백한 텍스트 대비 문제 없음

문제 발견 시 최대 2회 자체 수정. 2회 후에도 해결 안 되면 → **멈춤 조건** 처리.

### Step 5: 서브에이전트 리뷰

Task 도구로 서브에이전트 호출:
- `review-prompt.md` 전문 전달
- 섹션명, 섹션 한 줄 설명, Glance 스크린샷 전달
- 리뷰 모드: `quick` (기본값)
- CLAUDE.md는 전달하지 않음

### Step 6: 피드백 반영

서브에이전트 피드백 수신 후:
1. 코드/콘텐츠로 즉시 해결 가능한 것 → 바로 반영
2. 사용자 판단이 필요한 것 → commit 메시지 또는 CLAUDE.md Note에 기록하고 넘어감
3. 이미 반영된 항목, 이전 리뷰와 중복된 항목 → 무시

### Step 7: CLAUDE.md 진행 상태 업데이트

해당 섹션을 `[ ]` → `[x]`로 변경.

### Step 8: commit

```
git add -p  (관련 파일만)
git commit -m "[type]: [섹션] 내용"
```

커밋 메시지 예시:
- `style: Improve Hero section visual impact`
- `content: Update Dataset section with NAVSIM/Bench2Drive details`
- `feat: Add encoder/decoder concept to Model section`

---

## 멈춤 조건 (즉시 사용자에게 보고)

아래 상황 중 하나라도 해당되면 **즉시 작업을 멈추고** 사용자에게 보고한다:

| 조건 | 처리 |
|------|------|
| 빌드 에러가 2회 수정 후에도 해결 안 됨 | 에러 내용 + 시도한 방법 보고 |
| 사용자가 확인해야 하는 사실 정보 발견 | 해당 항목 목록 정리 후 보고 |
| 섹션 구조를 크게 바꿔야 하는 판단이 필요한 상황 | 현황 + 선택지 정리 후 보고 |
| 모든 Phase 3 항목 완료 | 완료 보고 + 풀페이지 총평 |

---

## 완료 보고 형식 (모든 섹션 완료 시)

```
## Phase 3 자율 실행 완료

### 처리한 섹션
- [x] Hero — (변경 요약)
- [x] 로드맵 — (변경 요약)
... (전체 목록)

### 사용자 확인이 필요한 항목
- Contact 섹션 이메일: 현재 플레이스홀더 상태
- (기타 항목)

### 서브에이전트 리뷰에서 미반영한 제안 (사용자 판단 필요)
- (항목별 정리)

### 풀페이지 스크린샷
(Glance 전체 페이지 스크린샷)
```

---

## 참고 파일

- `CLAUDE.md` — 프로젝트 전체 맥락, 섹션별 콘텐츠 스펙, 진행 상태 체크리스트
- `review-prompt.md` — 서브에이전트 디자인+콘텐츠 리뷰 프롬프트
- `src/data/content.json` — 모든 UI 텍스트
- `src/components/` — 섹션 컴포넌트
- `src/styles/` — CSS
