import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === params.id);
  if (!newsItem) return notFound();
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}