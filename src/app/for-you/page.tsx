import AppShell from "@/app/components/AppShell";
import SelectedBook from "@/app/components/books/SelectedBook";
import BookRow from "@/app/components/books/BookRow";
import { fetchSelectedBook, fetchBooks } from "@/lib/books";

export default async function ForYouPage() {
  const [selectedBook, recommendedBooks, suggestedBooks] = await Promise.all([
    fetchSelectedBook(),
    fetchBooks("recommended"),
    fetchBooks("suggested"),
  ]);

  return (
    <AppShell>
      <main className="for-you-page">
        <div className="for-you-page__container">
          <SelectedBook book={selectedBook} />

          <BookRow
            title="Recommended For You"
            subtitle="We think you’ll like these"
            books={recommendedBooks.slice(0, 5)}
          />

          <BookRow
            title="Suggested Books"
            subtitle="Browse those books"
            books={suggestedBooks.slice(0, 5)}
          />
        </div>
      </main>
    </AppShell>
  );
}