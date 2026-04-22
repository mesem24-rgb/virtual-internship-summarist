"use client";

import Link from "next/link";
import { HiOutlineClock, HiOutlineStar } from "react-icons/hi";

const BookCard = ({ book }) => {
  if (!book) return null;

  const bookId = book.id ?? book.bookId ?? book.book_id;
  const rating = book.averageRating ?? 4.5;
  const duration = book.duration ?? "03:24";

  return (
    <Link href={`/book/${bookId}`} className="book-card">
      <div className="book-card__image-wrapper">
        <img
          src={book.imageLink}
          alt={book.title}
          className="book-card__image"
        />
      </div>

      <h3 className="book-card__title">{book.title}</h3>
      <p className="book-card__author">{book.author}</p>
      <p className="book-card__sub-title">
        {book.subTitle || "A powerful summary in minutes."}
      </p>

      <div className="book-card__meta">
        <span>{duration}</span>
        <span>•</span>
        <span>{Array.isArray(book.tags) ? `${book.tags.length} ideas` : "7 ideas"}</span>
        <span>•</span>
        <span>{rating}</span>
      </div>
    </Link>
  );
};

export default BookCard;