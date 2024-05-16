import sql from "better-sqlite3";

const db = sql("data.db");

export type NewsType = {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
};

export async function getAllNews() {
  const news = db.prepare("SELECT * FROM news").all() as NewsType[];
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news;
}

export async function getNewsItem(slug: string) {
  const newsItem = db
    .prepare("SELECT * FROM news WHERE slug = ?")
    .get(slug) as NewsType;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return newsItem;
}

export async function getLatestNews() {
  const latestNews = db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all() as NewsType[];
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestNews;
}

export function getAvailableNewsYears() {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((data) => (data as { year: string }).year) as string[];

  return years;
}

export function getAvailableNewsMonths(year: string) {
  return db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?",
    )
    .all(year)
    .map((data) => (data as { month: string }).month) as string[];
}

export function getNewsForYear(year: string) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC",
    )
    .all(year) as NewsType[];

  return news;
}

export function getNewsForYearAndMonth(year: string, month: string) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC",
    )
    .all(year, month) as NewsType[];

  return news;
}
