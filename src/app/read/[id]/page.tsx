import AppShell from "@/app/components/AppShell";
import ReaderClient from "@/app/components/read/ReaderClient";
import { notFound } from "next/navigation";
import { fetchBook } from "@/lib/books";

export default async function ReadPage({
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
      <ReaderClient book={book} bookId={id} />
    </AppShell>
  );
}