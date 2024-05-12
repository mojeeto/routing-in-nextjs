import Link from "next/link";

export default function NewsPage() {
  return (
    <main>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="news/1">First News Page</Link>
        </li>
        <li>
          <Link href="news/2">Second News Page</Link>
        </li>
        <li>
          <Link href="news/3">Third News Page</Link>
        </li>
      </ul>
    </main>
  );
}
