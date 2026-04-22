"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import BookCard from "@/app/components/books/BookCard";

const SearchClient = ({ books = [] }) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const filteredBooks = useMemo(() => {
    const trimmed = query.trim().toLowerCase();

    if (!trimmed) return books;

    return books.filter((book) => {
      const title = book.title?.toLowerCase() || "";
      const author = book.author?.toLowerCase() || "";
      const subtitle = book.subTitle?.toLowerCase() || "";
      const summary = book.summary?.toLowerCase() || "";
      const tags = Array.isArray(book.tags)
        ? book.tags.join(" ").toLowerCase()
        : "";

      return (
        title.includes(trimmed) ||
        author.includes(trimmed) ||
        subtitle.includes(trimmed) ||
        summary.includes(trimmed) ||
        tags.includes(trimmed)
      );
    });
  }, [books, query]);

  return (
    <main className="for-you-page">
      <div className="for-you-page__container">
        <section className="search-page">
          <div className="search-page__header">
            <h1 className="search-page__title">Search</h1>
            <p className="search-page__subtitle">
              Find books by title, author, subtitle, summary, or tags.
            </p>
          </div>

          <div className="search-page__results-meta">
            {query.trim()
              ? `${filteredBooks.length} result${
                  filteredBooks.length === 1 ? "" : "s"
                } found for "${query}"`
              : `${books.length} books available`}
          </div>

          {filteredBooks.length > 0 ? (
            <div className="search-page__grid">
              {filteredBooks.map((book, index) => {
                const id = book.id ?? book.bookId ?? book.book_id ?? index;
                return <BookCard key={id} book={book} />;
              })}
            </div>
          ) : (
            <div className="search-page__empty">
              <h2 className="search-page__empty-title">No books found</h2>
              <p className="search-page__empty-text">
                Try a different title, author, or keyword.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default SearchClient;