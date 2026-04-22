import AppShell from "@/app/components/AppShell";
import PlayerClient from "@/app/player/PlayerClient";
import { notFound } from "next/navigation";
import { fetchBook } from "@/lib/books";

export default async function PlayerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const book = await fetchBook(id);

  if (!book) {
    notFound();
  }

  return (
    <AppShell>
      <PlayerClient book={book} bookId={id} />
    </AppShell>
  );
}