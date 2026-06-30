import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("데이터 호출 실패:", err);
        setLoading(false);
      });
  }, [url]); // url이 바뀌면 다시 실행

  return { data, loading }; // fetch로 받은 데이터, 로딩 상태
}
