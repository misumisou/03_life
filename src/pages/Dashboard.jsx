import React, { useContext } from "react";
import Widget from "../components/Widget";
import TodoWidget from "../components/TodoWidget";
import WeatherWidget from "../components/WeatherWidget";
import QuoteWidget from "../components/QuoteWidget";
import NewsWidget from "../components/NewsWidget";
import ExchangeWidget from "../components/ExchangeWidget";
import LinksWidget from "../components/LinksWidget";
import { AppContext } from "../context/AppContext";

export default function Dashboard() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div>
      <header className="mb-8">
        <h2
          className={`text-3xl font-bold ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}
        >
          안녕하세요, 좋은 하루입니다! 👋
        </h2>
        <p className={`mt-1 ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>
          오늘의 대시보드 현황입니다.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Widget title="🌤️ 오늘의 날씨">
          <WeatherWidget />
        </Widget>
        <Widget title="✍️ 오늘의 명언">
          <QuoteWidget />
        </Widget>
        <Widget title="🎤 오늘의 뉴스">
          <NewsWidget />
        </Widget>
        <Widget title="💰 오늘의 환율">
          <ExchangeWidget />
        </Widget>

        <Widget title="✅ 할 일 목록 (Todo)">
          <TodoWidget />
        </Widget>
        <Widget title="🔗 자주 쓰는 링크">
          <LinksWidget />
        </Widget>
      </div>
    </div>
  );
}
