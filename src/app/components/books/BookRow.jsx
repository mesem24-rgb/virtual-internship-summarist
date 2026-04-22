"use client";

import BookCard from "@/app/components/books/BookCard";

const BookRow = ({ title, subtitle, books = [] }) => {
  return (
    <section className="book-row">
      <h2 className="book-row__title">{title}</h2>
      {subtitle && <p className="book-row__subtitle">{subtitle}</p>}

      <div className="book-row__scroll">
        <div className="book-row__cards">
          {books.map((book, index) => {
            const id = book.id ?? book.bookId ?? book.book_id ?? index;
            return <BookCard key={id} book={book} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BookRow;