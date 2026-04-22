"use client";

import Link from "next/link";

const SelectedBook = ({ book }) => {
  if (!book) return null;

  const bookId = book.id ?? book.bookId ?? book.book_id;

  return (
    <section className="selected">
      <h2 className="selected__title">Selected just for you</h2>

      <div className="selected__card">
        <div className="selected__left">
          <p className="selected__excerpt">
            {book.subTitle || book.bookDescription || "No description available."}
          </p>
        </div>

        <div className="selected__center">
          <img
            src={book.imageLink}
            alt={book.title}
            className="selected__image"
          />
        </div>

        <div className="selected__right">
          <h3 className="selected__book-title">{book.title}</h3>
          <p className="selected__author">{book.author}</p>

          <Link href={`/player/${bookId}`} className="selected__listen">
            <span className="selected__play">▶</span>
            <span>3 mins 23 secs</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SelectedBook;