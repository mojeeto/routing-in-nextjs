import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function NewsImage({
  params,
}: {
  params: { id: string };
}) {
  const newsItem = await getNewsItem(params.id);
  if (!newsItem) return notFound();

  return (
    <div>
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
