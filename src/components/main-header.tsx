import Link from "next/link";

export default function MainHeader() {
  return (
    <header>
      <Link href="/">Home Page</Link>
      <Link href="/news">News Page</Link>
    </header>
  );
}
