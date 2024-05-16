import { getNewsItem } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function NewsDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const newsItem = await getNewsItem(params.id);
  if (!newsItem) return notFound();
  return (
    <article className="news-article">
      <header>
        <Link href={`${params.id}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
