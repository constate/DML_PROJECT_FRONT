# DML_PROJECT_FRONT

DML 키오스크 프론트엔드 프로젝트입니다.  
React + Vite + Tailwind CSS 기반으로 구축되었으며, 유지보수성과 확장성을 고려한 구조로 설계되었습니다.

---

## 🔧 기술 스택

- **React** (w/ Vite)
- **Tailwind CSS** (v4)
- **react-hook-form** – 폼 유효성 검사 및 상태 관리
- **react-router-dom** – 페이지 라우팅
- **styled-components** – 테마 및 일부 스타일 구성
- **zustand** – (예정) 전역 상태 관리

## 📁 프로젝트 구조

```bash
src/
├── apis/ # API 모듈
├── assets/ # 이미지, 폰트 등 정적 리소스
├── components/ # 공통 UI 컴포넌트
│ └── \_common/
│ └── buttons/
│ └── PrimaryButton.jsx
├── constants/ # 상수값
├── hooks/ # 커스텀 훅
├── pages/ # 라우팅 페이지 컴포넌트
│ ├── Login/
│ │ └── LoginPage.jsx
│ ├── KioskStart/
│ │ └── KioskStartPage.jsx
│ └── Menu/
│ └── MenuPage.jsx
├── router/ # React Router 설정
│ ├── Router.jsx
│ └── routePath.js
├── styles/ # 글로벌 스타일과 테마
│ ├── GlobalStyles.js
│ └── theme.js
├── App.jsx
├── main.jsx
└── index.css # Tailwind 포함 글로벌 스타일
```

## ▶️ 실행 방법

# 1. 프로젝트 클론

git clone https://github.com/your-username/DML_PROJECT_FRONT.git
cd DML_PROJECT_FRONT

# 2. 패키지 설치

npm install

# 3. 개발 서버 실행

npm run dev
