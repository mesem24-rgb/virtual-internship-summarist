"use client";

import { HiOutlineX } from "react-icons/hi";
import { useRouter } from "next/navigation";

const BottomPlayer = ({ book, bookId }) => {
  const router = useRouter();

  if (!book) return null;

  const resolvedId = bookId ?? book.id ?? book.bookId ?? book.book_id;

  return (
    <div className="bottom-player">
      <div className="bottom-player__inner">
        <div className="bottom-player__info">
          <img
            src={book.imageLink}
            alt={book.title}
            className="bottom-player__cover"
          />

          <div className="bottom-player__text">
            <p className="bottom-player__title">{book.title}</p>
            <p className="bottom-player__author">{book.author}</p>
          </div>
        </div>

        <div className="bottom-player__audio-wrap">
          {book.audioLink ? (
            <audio
              className="bottom-player__audio"
              controls
              autoPlay
              src={book.audioLink}
            >
              Your browser does not support the audio element.
            </audio>
          ) : (
            <p className="bottom-player__empty">No audio available.</p>
          )}
        </div>

        <button
          type="button"
          className="bottom-player__close"
          onClick={() => router.push(`/book/${resolvedId}`)}
          aria-label="Close player"
        >
          <HiOutlineX />
        </button>
      </div>
    </div>
  );
};

export default BottomPlayer;