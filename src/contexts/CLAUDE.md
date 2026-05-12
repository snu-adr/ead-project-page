# src/contexts — CLAUDE.md

## 파일 목록

| 파일 | 역할 |
|------|------|
| LanguageContext.jsx | 언어 상태(ko/en) 관리 + content 객체 제공 |

## LanguageContext.jsx

### 내보내는 것

- `LanguageProvider`: App 루트를 감싸는 Context Provider
- `useLanguage()`: 언어 상태에 접근하는 커스텀 훅

### useLanguage() 반환값

| 필드 | 타입 | 설명 |
|------|------|------|
| `lang` | `'ko' \| 'en'` | 현재 언어 |
| `content` | object | 현재 언어의 content 데이터 (`content.json` 또는 `content-en.json`) |
| `toggleLang` | `() => void` | 한↔영 전환 함수 |

### 사용 패턴

```jsx
import { useLanguage } from '../contexts/LanguageContext';

const MyComponent = () => {
  const { lang, content } = useLanguage();
  // ...
};
```

### 기본값

- 기본 언어: `'en'` (영어). 사용자 요청으로 영어 only 모드 — Navbar의 언어 토글 UI는 제거됨. `content.json`(한국어)과 `toggleLang` 함수는 향후 복원을 위해 유지. 한글 사이트로 되돌리려면 이 파일의 `useState` 기본값만 `'ko'`로 바꾸고 Navbar에 토글 UI를 복원하면 됨.
- 새로고침 시 초기화 (localStorage 저장 없음)
