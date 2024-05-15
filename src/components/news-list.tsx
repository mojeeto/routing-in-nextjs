import Link from "next/link";

const NewsList: React.FC<{
  news: {
    id: string;
    slug: string;
    image: string;
    title: string;
  }[];
}> = ({ news }) => {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
