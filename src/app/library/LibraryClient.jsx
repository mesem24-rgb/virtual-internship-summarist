"use client";

import BookCard from "@/app/components/books/BookCard";
import { useLibrary } from "@/app/context/LibraryContext";

const LibraryClient = () => {
  const { library } = useLibrary();

  return (
    <main className="for-you-page">
      <div className="for-you-page__container">
        <section className="search-page">
          <div className="search-page__header">
            <h1 className="search-page__title">My Library</h1>
            <p className="search-page__subtitle">
              Your saved books appear here.
            </p>
          </div>

          {library.length > 0 ? (
            <div className="search-page__grid">
              {library.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="search-page__empty">
              <h2 className="search-page__empty-title">Nothing saved yet</h2>
              <p className="search-page__empty-text">
                Add books from the book detail page to build your library.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default LibraryClient;