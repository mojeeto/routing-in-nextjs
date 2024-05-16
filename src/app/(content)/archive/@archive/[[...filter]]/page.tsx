import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({
  params,
}: {
  params: { filter: string[] };
}) {
  const selectedYear = params.filter?.[0];
  const selectedMonth = params.filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(+selectedYear);
    links = getAvailableNewsMonths(+selectedYear);
  }
  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(+selectedYear, +selectedMonth);
    links = [];
  }

  let newsContent = <p>No News found!</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(+selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid Filter.");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={
                    selectedYear
                      ? `/archive/${selectedYear}/${link}`
                      : `/archive/${link}`
                  }
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
