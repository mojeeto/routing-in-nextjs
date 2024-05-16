"use client";
import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [news, setNews] = useState<
    { id: string; slug: string; image: string; title: string }[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setLoading(false);
        setError("Failed to fetch news.");
      }

      const news = await response.json();
      setLoading(false);
      setNews(news);
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;
  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
