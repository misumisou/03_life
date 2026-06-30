import React from "react";
import useFetch from "../hooks/useFetch";

export default function ExchangeWidget() {
  const { data, loading } = useFetch("https://open.er-api.com/v6/latest/USD");

  if (loading)
    return (
      <p className="text-gray-400 text-sm animate-pulse">
        환율 정보 로딩 중...
      </p>
    );

  const rates = data.rates;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-gray-500 text-sm">🇺🇸 USD → 🇰🇷 KRW</span>
        <span className="text-gray-800 font-bold">
          {rates.KRW.toLocaleString()}원
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-500 text-sm">🇯🇵 JPY → 🇰🇷 KRW</span>
        <span className="text-gray-800 font-bold">
          {(rates.KRW / rates.JPY).toFixed(2)}원
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-500 text-sm">🇪🇺 EUR → 🇰🇷 KRW</span>
        <span className="text-gray-800 font-bold">
          {(rates.KRW / rates.EUR).toFixed(2)}원
        </span>
      </div>
    </div>
  );
}
