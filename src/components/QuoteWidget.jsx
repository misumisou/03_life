import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export default function QuoteWidget() {
  // const [quote, setQuote] = useState({ text: "", author: "" });
  // const [loading, setLoading] = useState(true);
  const { data, loading } = useFetch(
    "https://korean-advice-open-api.vercel.app/api/advice",
  );

  // useEffect(() => {
  //   // 💡 화면이 처음 켜질 때 명언 API 호출
  //   fetch("https://korean-advice-open-api.vercel.app/api/advice")
  //     // 응답(res), java 형식으로 res.json() => 그게 data

  //     .then((res) => res.json())
  //     .then((data) => {
  //       setQuote({ text: data.message, author: data.author });
  //       setLoading(false); // 로딩 완료
  //     })
  //     .catch((err) => console.error("명언 로딩 실패:", err));
  // }, []); // 빈 배열: 최초 1회만 실행

  if (loading)
    return (
      <p className="text-gray-400 text-sm animate-pulse">
        명언을 불러오는 중...
      </p>
    );

  return (
    <div className="flex flex-col justify-between min-h-22.5">
      <p className="text-gray-700 italic font-medium leading-relaxed">
        "{data.message}"
      </p>
      <p className="text-gray-400 text-xs text-right mt-2">💬 {data.author}</p>
    </div>
  );
}
