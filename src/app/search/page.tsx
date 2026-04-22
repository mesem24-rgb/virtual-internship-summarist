import AppShell from "@/app/components/AppShell";
import SearchClient from "./search-client";
import { fetchBooks } from "@/lib/books";

export default async function SearchPage() {
  const [recommendedBooks, suggestedBooks, selectedBooks] = await Promise.all([
    fetchBooks("recommended"),
    fetchBooks("suggested"),
    fetchBooks("selected"),
  ]);

  const allBooks = [...selectedBooks, ...recommendedBooks, ...suggestedBooks];

  const uniqueBooks = allBooks.filter(
    (book, index, self) =>
      index ===
      self.findIndex(
        (b) =>
          (b.id ?? b.bookId ?? b.book_id) ===
          (book.id ?? book.bookId ?? book.book_id)
      )
  );

  return (
    <AppShell>
      <SearchClient books={uniqueBooks} />
    </AppShell>
  );
}