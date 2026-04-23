"use client";

import { useState } from "react";
import BookCard from "@/app/components/books/BookCard";
import { useLibrary } from "@/app/context/LibraryContext";

const LibraryClient = () => {
  const { library } = useLibrary();
  const [activeTab, setActiveTab] = useState("saved");

  const savedBooks = library;
  const finishedBooks = [];

  const booksToShow = activeTab === "saved" ? savedBooks : finishedBooks;

  return (
    <main className="library-page">
      <div className="library-page__container">
        <div className="library-page__tabs">
          <button
            type="button"
            className={`library-page__tab ${
              activeTab === "saved" ? "library-page__tab--active" : ""
            }`}
            onClick={() => setActiveTab("saved")}
          >
            Saved Books
          </button>

          
        </div>

        {booksToShow.length > 0 ? (
          <div className="library-page__grid">
            {booksToShow.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="library-page__empty">
            <p className="library-page__empty-text">
              {activeTab === "saved"
                ? "No books saved yet."
                : "No finished books yet."}
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default LibraryClient;