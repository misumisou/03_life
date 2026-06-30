import React from "react";
import useFetch from "../hooks/useFetch";

export default function NewsWidget() {
  const { data, loading } = useFetch(
    "https://api.currentsapi.services/v1/latest-news?language=ko&apiKey=a31OcLNZNmpBHpAiyMTfjczFcI6X7ns3AVnm0FyFg-LkcnKh",
  );

  if (loading)
    return (
      <p className="text-gray-400 text-sm animate-pulse">
        뉴스를 불러오는 중...
      </p>
    );

  const randomIndex = Math.floor(Math.random() * data.news.length);
  const article = data.news[randomIndex];

  return (
    <div className="border-b border-gray-100 pb-2 last:border-0">
      <p className="text-gray-700 italic font-medium leading-relaxed">
        "🎙 {article.title}"
      </p>
      <p className="text-gray-400 text-xs text-right mt-1">
        ✒ {article.author}
      </p>
    </div>
  );
}
