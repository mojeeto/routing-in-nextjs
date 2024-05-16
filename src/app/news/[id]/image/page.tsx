import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsImage({ params }: { params: { id: string } }) {
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === params.id);
  if (!newsItem) return notFound();

  return (
    <div>
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
