import React, { createContext, useState } from "react";

// 1. 다른 컴포넌트에서 가져다 쓸 수 있도록 전역 컨텍스트(기지) 생성
export const AppContext = createContext();

// 2. 우주선처럼 앱 전체를 감싸서 데이터를 뿌려줄 Provider 컴포넌트 정의
export function AppProvider({ children }) {
  const [user, setUser] = useState("김프론트");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 다크모드 토글 함수
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    // value 안에 들어있는 데이터와 함수들을 아래에 속한 모든 자식들에게 공유함
    <AppContext.Provider value={{ user, setUser, isDarkMode, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
}
