import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";
import TodoWidget from "./components/TodoWidget"; // 1. 임포트 추가
import QuoteWidget from "./components/QuoteWidget";
import WeatherWidget from "./components/WeatherWidget";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "./context/AppContext";

export default function App() {
  const { isDarkMode } = useContext(AppContext); // 2. 다크모드 상태 구독
  return (
    <div
      className={`flex flex-col md:flex-row min-h-screen transition-colors duration-300
  ${isDarkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-800"}`}
    >
      {/* 1. 사이드바 블록 */}
      <Sidebar />

      {/* 2. 메인 컨텐츠 영역 */}
      <main className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </main>
    </div>
  );
}
