import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function InterceptedNewsImage({
  params,
}: {
  params: { id: string };
}) {
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === params.id);
  if (!newsItem) return notFound();

  return (
    <>
      <h1>Intercepting</h1>
      <div>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </div>
    </>
  );
}
