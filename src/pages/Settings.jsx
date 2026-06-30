import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Settings() {
  // 💡 기지에서 상태와 상태를 바꾸는 함수들을 전부 꺼내옵니다.
  const { user, setUser, isDarkMode, toggleDarkMode } = useContext(AppContext);

  return (
    <div>
      <header className="mb-8">
        <h2
          className={`text-3xl font-bold ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}
        >
          ⚙️ 시스템 설정
        </h2>
        <p className={`mt-1 ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>
          대시보드의 환경을 설정합니다.
        </p>
      </header>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-md">
        <p className="text-gray-700 font-medium mb-2">사용자 프로필 변경</p>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="이름을 입력하세요"
          className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-indigo-500"
        />
        <p className="text-xs text-gray-400 mt-4">
          Context API를 통해 전역으로 연결할 예정입니다.
        </p>
      </div>
      <br />

      {/* 다크모드 토글 위젯 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
        <div>
          <p className="text-gray-700 font-medium">화면 테마 모드</p>
          <p className="text-gray-400 text-xs">
            현재: {isDarkMode ? "다크 모드" : "라이트 모드"}
          </p>
        </div>
        <br />
        <button
          onClick={toggleDarkMode}
          className={`mt-5 px-4 py-2 rounded-lg text-sm font-semibold transition ${
            isDarkMode
              ? "bg-yellow-400 text-gray-900"
              : "bg-gray-800 text-white"
          }`}
        >
          {isDarkMode ? "☀️ 라이트 모드로 전환" : "🌙 다크 모드로 전환"}
        </button>
      </div>
    </div>
  );
}
