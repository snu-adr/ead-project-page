# EAD Project Page

서울대학교 ADR 연구실의 EAD(Evolutionary Autonomous Driving) 프로젝트 소개 사이트.

- 배포: https://snu-adr.github.io/EAD-project-page
- 기술 스택: React 19 (Create React App)
- 언어: 한국어 / 영어 (다국어 지원)

---

## 1. 환경 세팅

### 요구 사항
- **Node.js 18 LTS 이상** (CRA 5 + React 19 호환)
- **npm 9+** (Node.js 설치 시 동봉)

### Node.js 설치 — Linux / macOS (nvm 권장)

시스템 환경 격리를 위해 `conda`가 아닌 `nvm`을 사용한다.

```bash
# nvm 설치 (이미 설치되어 있으면 생략)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# 새 셸을 열거나 source ~/.bashrc 후
nvm install 20
nvm use 20
node -v   # v20.x 확인
```

### Node.js 설치 — Windows

세 가지 옵션 중 하나를 선택한다. **WSL을 가장 권장한다** (위 Linux 가이드를 그대로 사용할 수 있고, 빌드 도구와의 호환성이 가장 좋다).

#### 옵션 A. WSL (Windows Subsystem for Linux) — 권장

PowerShell을 **관리자 권한으로** 열고:

```powershell
wsl --install -d Ubuntu
```

설치 후 재부팅 → Ubuntu 실행 → 사용자 계정 생성 → 위의 **Linux/macOS 가이드를 그대로 따른다**.
VS Code를 쓰면 [WSL 확장](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)을 설치해 WSL 안의 폴더를 직접 열 수 있다.

#### 옵션 B. nvm-windows (Node 버전 전환이 필요한 경우)

[nvm-windows Releases](https://github.com/coreybutler/nvm-windows/releases)에서 `nvm-setup.exe`를 받아 설치한 뒤, **PowerShell을 관리자 권한으로** 열고:

```powershell
nvm install 20.11.0
nvm use 20.11.0
node -v
```

> nvm-windows는 Linux용 nvm과 별개 프로젝트라 정확한 버전 번호(`20` ❌ → `20.11.0` ✅)를 요구한다.

#### 옵션 C. Node.js 공식 설치 파일 (가장 간단)

[nodejs.org](https://nodejs.org)에서 **20 LTS** 설치 파일(`.msi`)을 받아 실행한다. 설치 마법사에서 기본값 그대로 진행하면 된다.

```powershell
node -v   # v20.x 확인
npm -v
```

> 설치 후 PowerShell 창을 새로 열어야 PATH가 반영된다.

#### Windows 공통 주의사항

- **PowerShell** 또는 **Windows Terminal** 사용을 권장 (cmd도 동작은 함)
- Git이 없다면 [Git for Windows](https://git-scm.com/download/win) 설치 (`git clone` 사용)
- 줄바꿈 자동 변환 문제를 피하려면 clone 전에 한 번:
  ```powershell
  git config --global core.autocrlf input
  ```
- 이후의 `npm install`, `npm start` 등 npm 명령어는 Linux/macOS와 **동일하게** 동작한다

### 의존성 설치

```bash
git clone https://github.com/snu-adr/EAD-project-page.git
cd EAD-project-page
npm install
```

### 개발 서버 실행

```bash
npm start
```

- 브라우저에서 http://localhost:3000 접속
- VS Code Remote-SSH로 작업 중이면 자동 포트 포워딩으로 로컬 브라우저에서 그대로 열린다
- 파일을 저장하면 자동 리로드된다

### 프로덕션 빌드 / 배포

```bash
npm run build         # build/ 폴더 생성 (로컬 검증용)
npm run deploy        # gh-pages 브랜치에 푸시 → GitHub Pages 갱신
```

> `deploy`는 `predeploy`가 자동으로 `build`를 실행하므로 별도로 빌드를 부를 필요 없다.

---

## 2. 페이지 글 수정 가이드

### 핵심 원칙

> **모든 UI 텍스트는 `src/data/content.json` (한국어) / `src/data/content-en.json` (영어)에서 관리한다.**
> 컴포넌트(.jsx) 안에 한국어/영어 문자열을 직접 쓰지 않는다.

두 파일은 **구조가 완전히 동일**하다. 한 쪽에 필드를 추가/수정하면 다른 쪽도 같이 맞춰야 한다.

### 수정 절차

1. `src/data/content.json` 에서 원하는 섹션 키를 찾아 텍스트만 수정한다.
2. 같은 위치를 `src/data/content-en.json` 에서도 영어로 수정한다.
3. `npm start` 가 켜져 있으면 즉시 반영된다. 새로고침해서 확인.
4. 빌드 에러가 없는지 확인하고 commit.

### 섹션별 위치

| 섹션 | content.json 키 | 컴포넌트 파일 |
|------|-----------------|--------------|
| Hero (상단) | `hero` | `src/components/Hero.jsx` |
| Project 개요 | `overview` | `src/components/Overview.jsx` |
| 로드맵 | `roadmap` | `src/components/RoadMap.jsx` |
| 데이터셋 | `dataset` | `src/components/Dataset.jsx` |
| 모델 (비교/구조) | `model` | `src/components/Model.jsx` |
| 공지사항 | `notice` | `src/components/notice.items` |
| Contributor | `contributors` | `src/components/Contributor.jsx` |
| Alliance | `alliance` | `src/components/Alliance.jsx` |
| Contact | `contact` | `src/components/Contact.jsx` |
| Footer | `footer` | `src/components/Footer.jsx` |

각 필드의 의미와 타입은 `src/data/CLAUDE.md` 에 자세히 정리되어 있다.

### 자주 하는 수정

**공지사항 추가** — `notice.items` 배열에 항목 추가 (날짜 내림차순 유지):
```json
{
  "date": "2026-04-06",
  "status": "upcoming",      // "upcoming" | "complete" | (생략)
  "badge": "예정",            // 표시할 텍스트
  "title": "EAD v1.0 공식 발표",
  "content": "..."
}
```

**Contributor 추가** — `contributors.rows[].members` 배열에 추가:
```json
{ "name": "홍길동", "role": "Researcher" }
```
- `lead: true` → Project Leader (왼쪽 큰 카드)
- `teamLead: true` → Team Leader (팀 패널 상단 카드)
- 옵션 없음 → 일반 Researcher

**Alliance 파트너 추가** — `alliance.partners` 배열에 추가하고, 로고 파일을 `src/assets/logos/` 에 저장:
```json
{ "name": "회사명", "logo": "logo-file.svg" }
```
로고 크기 조정은 `src/components/Alliance.css` 의 `[data-name="..."]` 셀렉터로.

**Contact 정보 변경** — `contact` 객체의 `email`, `downloadUrl`, `address`, `labUrl` 등을 수정.

### 이미지 / 로고 교체

- 이미지: `src/assets/images/`
- 로고: `src/assets/logos/`
- 새 파일을 추가한 뒤 `src/assets/CLAUDE.md` 에 파일 목록을 갱신한다.

### 하지 말 것

- 컴포넌트 .jsx 파일 안에 한국어/영어 문자열 하드코딩 (다국어 전환이 깨진다)
- `import content from '../data/content.json'` 직접 사용 (대신 `useLanguage()` 훅 사용 — 자세한 건 `src/data/CLAUDE.md`)
- 한 쪽 언어 파일만 수정 — 두 파일의 구조가 어긋나면 영어 모드에서 undefined가 렌더된다

---

## 3. 디렉토리 구조

```
src/
├── App.jsx                  # 섹션 배치
├── components/              # 섹션별 컴포넌트 (Hero, RoadMap, Dataset, ...)
│   └── common/              # SectionTitle, VideoEmbed 등 공통 컴포넌트
├── contexts/
│   └── LanguageContext.jsx  # 한국어/영어 전환 로직
├── data/
│   ├── content.json         # 한국어 텍스트
│   └── content-en.json      # 영어 텍스트
├── assets/
│   ├── images/              # 데모 영상 GIF, 일반 이미지
│   └── logos/               # Alliance 로고
└── styles/                  # CSS 변수, 컴포넌트별 스타일
```

각 주요 디렉토리에 `CLAUDE.md` 가 있어 세부 규칙과 파일 목록을 관리한다. 코드 변경 시 같은 디렉토리의 `CLAUDE.md` 도 함께 업데이트한다.

---

## 4. 자주 쓰는 명령어

| 명령어 | 설명 |
|--------|------|
| `npm start` | 개발 서버 (localhost:3000) |
| `npm run build` | 프로덕션 빌드 → `build/` |
| `npm run deploy` | GitHub Pages 배포 |
| `npm test` | 테스트 (현재 사용 안 함) |

---

## 5. 트러블슈팅

- **`npm install` 실패**: Node 버전 확인 (`node -v` → 18 이상). nvm 사용 시 `nvm use 20`.
- **localhost:3000 접속 안 됨**: VS Code Remote-SSH의 PORTS 탭에서 3000 포트가 forwarded 되어 있는지 확인.
- **영어 모드에서 텍스트가 비어있음**: `content-en.json` 에 해당 키가 빠져 있을 가능성. 두 파일의 구조를 비교한다.
- **배포 후 페이지가 404**: `package.json` 의 `homepage` 필드와 GitHub Pages 설정 (`Settings → Pages → Source: gh-pages branch`) 확인.
- **(Windows) `npm` 명령어가 인식 안 됨**: PowerShell 창을 새로 연다. 그래도 안 되면 시스템 환경 변수 PATH에 Node 설치 경로(보통 `C:\Program Files\nodejs\`)가 있는지 확인.
- **(Windows) `npm install` 중 권한 오류 / 줄바꿈 경고**: 관리자 권한 PowerShell로 재시도. 줄바꿈은 `git config --global core.autocrlf input` 설정 후 다시 clone.
