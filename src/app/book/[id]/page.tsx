import AppShell from "@/app/components/AppShell";
import BookDetailClient from "@/app/components/books/BookDetailClient";
import { notFound } from "next/navigation";
import { fetchBook } from "@/lib/books";

export default async function BookPage({
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
      <BookDetailClient book={book} bookId={id} />
    </AppShell>
  );
}