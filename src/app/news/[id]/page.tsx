export default function NewsDetailPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1>News number {params.id}</h1>
    </main>
  );
}
