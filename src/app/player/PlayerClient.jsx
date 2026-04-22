"use client";

import { HiOutlineStar, HiOutlineClock, HiOutlineLightBulb } from "react-icons/hi";
import BottomPlayer from "@/app/player/BottomPlayer";

const PlayerClient = ({ book, bookId }) => {
  const rating = book.averageRating ?? "4.4";
  const totalRatings = book.totalRating ?? "68 ratings";
  const duration = book.duration ?? "03:24";

  const ideasLabel =
    Array.isArray(book.tags) && book.tags.length > 0
      ? `${book.tags.length} Key Ideas`
      : "8 Key Ideas";

  return (
    <main className="player-screen">
      <div className="player-page__container">
        <section className="player-page__hero">
          <div className="player-page__cover-wrap">
            <img
              src={book.imageLink}
              alt={book.title}
              className="player-page__cover"
            />
          </div>

          <div className="player-page__content">
            <p className="player-page__eyebrow">Now playing</p>
            <h1 className="player-page__title">{book.title}</h1>
            <h2 className="player-page__author">{book.author}</h2>

            <p className="player-page__subtitle">
              {book.subTitle || "Listen to the key ideas in minutes."}
            </p>

            <div className="player-page__meta">
              <div className="player-page__meta-item">
                <HiOutlineStar />
                <span>
                  {rating} ({totalRatings})
                </span>
              </div>

              <div className="player-page__meta-item">
                <HiOutlineClock />
                <span>{duration}</span>
              </div>

              <div className="player-page__meta-item">
                <HiOutlineLightBulb />
                <span>{ideasLabel}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="player-page__section">
          <h3 className="player-page__section-title">Overview</h3>
          <p className="player-page__text">
            {book.summary || "No summary available."}
          </p>
        </section>
      </div>

      <BottomPlayer book={book} bookId={bookId} />
    </main>
  );
};

export default PlayerClient;