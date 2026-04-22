"use client";

import { useRouter } from "next/navigation";
import {
  HiOutlineStar,
  HiOutlineClock,
  HiOutlineMicrophone,
  HiOutlineLightBulb,
  HiOutlineBookmark,
  HiOutlineBookOpen,
} from "react-icons/hi";
import { useAuth } from "@/app/context/AuthContext";
import { useLibrary } from "@/app/context/LibraryContext";

const BookDetailClient = ({ book, bookId }) => {
  const router = useRouter();
  const { user, openAuth } = useAuth();
  const { isInLibrary, toggleLibrary } = useLibrary();

  const resolvedBookId = book.id ?? bookId ?? book.bookId ?? book.book_id;
  const saved = isInLibrary(resolvedBookId);

  const rating = book.averageRating ?? "4.4";
  const totalRatings = book.totalRating ?? "68 ratings";
  const duration = book.duration ?? "03:24";
  const type = book.type ?? "Audio & Text";
  const ideasLabel =
    Array.isArray(book.tags) && book.tags.length > 0
      ? `${book.tags.length} Key Ideas`
      : "8 Key Ideas";

  const tags = Array.isArray(book.tags) ? book.tags.slice(0, 3) : [];

  const requireAuth = (targetRoute) => {
    if (!user) {
      openAuth(targetRoute);
      return false;
    }
    return true;
  };

  const handleRead = () => {
    const targetRoute = `/read/${resolvedBookId}`;
    if (!requireAuth(targetRoute)) return;
    router.push(targetRoute);
  };

  const handleListen = () => {
    const targetRoute = `/player/${resolvedBookId}`;
    if (!requireAuth(targetRoute)) return;
    router.push(targetRoute);
  };

  const handleToggleLibrary = () => {
    if (!resolvedBookId) return;
    toggleLibrary({ ...book, id: resolvedBookId });
  };

  return (
    <main className="book-detail">
      <div className="book-detail__container">
        <section className="book-detail__hero">
          <div className="book-detail__cover-wrap">
            <img
              src={book.imageLink}
              alt={book.title}
              className="book-detail__cover"
            />
          </div>

          <div className="book-detail__content">
            <h1 className="book-detail__title">{book.title}</h1>
            <h2 className="book-detail__author">{book.author}</h2>

            <p className="book-detail__subtitle">
              {book.subTitle || "Time-tested advice for the digital age"}
            </p>

            <div className="book-detail__meta">
              <div className="book-detail__meta-item">
                <HiOutlineStar />
                <span>
                  {rating} ({totalRatings})
                </span>
              </div>

              <div className="book-detail__meta-item">
                <HiOutlineClock />
                <span>{duration}</span>
              </div>

              <div className="book-detail__meta-item">
                <HiOutlineMicrophone />
                <span>{type}</span>
              </div>

              <div className="book-detail__meta-item">
                <HiOutlineLightBulb />
                <span>{ideasLabel}</span>
              </div>
            </div>

            <div className="book-detail__actions">
              <div className="book-detail__buttons">
                <button
                  type="button"
                  className="book-detail__button"
                  onClick={handleRead}
                >
                  <HiOutlineBookOpen />
                  <span>Read</span>
                </button>

                <button
                  type="button"
                  className="book-detail__button"
                  onClick={handleListen}
                >
                  <HiOutlineMicrophone />
                  <span>Listen</span>
                </button>
              </div>
            </div>

            <button
              type="button"
              className={`book-detail__library-link ${
                saved ? "book-detail__library-link--saved" : ""
              }`}
              onClick={handleToggleLibrary}
            >
              <HiOutlineBookmark />
              <span>
                {saved ? "Remove from My Library" : "Add title to My Library"}
              </span>
            </button>
          </div>
        </section>

        <section id="book-summary" className="book-detail__section">
          <h3 className="book-detail__section-title">What&apos;s it about?</h3>

          {tags.length > 0 && (
            <div className="book-detail__tags">
              {tags.map((tag, index) => (
                <span key={`${tag}-${index}`} className="book-detail__tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="book-detail__text">
            {book.summary 
            ? `${book.summary.split(" ").slice(0, 100).join(" ")}...`
    : "No summary available."}
          </p>
        </section>

        <section className="book-detail__section">
          <h3 className="book-detail__section-title">About the author</h3>
          <p className="book-detail__text">
            {book.authorDescription || "No author description available."}
          </p>
        </section>
      </div>
    </main>
  );
};

export default BookDetailClient;
