# 03_life

React + Vite 기반 개인 대시보드 프로젝트
사용자 설정, 대시보드 위젯, API 데이터 호출을 통해 실시간 정보 확인과 간단한 생산성 도구를 제공합니다.

## 주요 기능

- 대시보드 페이지
  - 날씨 정보 확인 (Busan 기준 실시간 날씨 API)
  - 명언 표시 (Korean Advice Open API)
  - 뉴스, 환율, 링크, 할일 목록 등 위젯 배치
- Settings 페이지
  - 사용자 이름 입력 및 저장
  - 다크 모드 / 라이트 모드 전환
- 전역 상태 관리
  - React Context API로 사용자 정보 및 다크 모드 상태 공유
- 할 일 목록
  - Todo 추가/삭제 기능
  - 로컬 스토리지에 할 일 저장

## 사용 기술

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- ESLint
- Browser API: LocalStorage
- 외부 API 호출
  - `https://wttr.in/Busan?format=j1`
  - `https://korean-advice-open-api.vercel.app/api/advice`

## 실행 방법

```bash
npm install
npm run dev
```

빌드:

```bash
npm run build
```

미리보기:

```bash
npm run preview
```

## 주요 파일

- `package.json` - 프로젝트 의존성 및 실행 스크립트
- `vite.config.js` - Vite 설정
- `src/main.jsx` - React 앱 진입점, 라우터 및 Context 설정
- `src/App.jsx` - 레이아웃 및 라우트 정의
- `src/context/AppContext.jsx` - 전역 상태(Context) 정의
- `src/pages/Dashboard.jsx` - 대시보드 화면
- `src/pages/Settings.jsx` - 설정 화면
- `src/components/Sidebar.jsx` - 사이드바 및 네비게이션
- `src/components/Widget.jsx` - 공통 위젯 레이아웃
- `src/components/WeatherWidget.jsx` - 날씨 위젯
- `src/components/QuoteWidget.jsx` - 명언 위젯
- `src/components/Todowidget.jsx` - 할 일 위젯
- `src/hooks/useFetch.js` - 커스텀 데이터 호출 훅

## 프로그램 구조도

```
03_life/
├─ package.json
├─ vite.config.js
├─ README.md
├─ public/
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css
   ├─ context/
   │  └─ AppContext.jsx
   ├─ hooks/
   │  └─ useFetch.js
   ├─ pages/
   │  ├─ Dashboard.jsx
   │  └─ Settings.jsx
   └─ components/
      ├─ Sidebar.jsx
      ├─ Widget.jsx
      ├─ WeatherWidget.jsx
      ├─ QuoteWidget.jsx
      ├─ Todowidget.jsx
      ├─ NewsWidget.jsx
      ├─ ExchangeWidget.jsx
      └─ LinksWidget.jsx
```

## 앱 흐름

- `src/main.jsx`에서 `BrowserRouter`와 `AppProvider`를 감싸 앱 진입점 구성
- `src/App.jsx`에서 `Sidebar`와 `Routes`로 페이지 렌더링
- `Dashboard.jsx`에서 위젯 컴포넌트들을 `Widget` 레이아웃으로 표시
- `Settings.jsx`에서 사용자 이름과 다크 모드 설정 변경
- `AppContext.jsx`를 통해 `user`, `isDarkMode`, `setUser`, `toggleDarkMode`를 공유
- `useFetch.js`로 API 호출 로직 재사용
