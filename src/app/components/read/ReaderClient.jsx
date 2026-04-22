"use client";

import { useMemo, useState } from "react";
import {
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlineLightBulb,
  HiOutlineMicrophone,
} from "react-icons/hi";
import { useRouter } from "next/navigation";

const chunkText = (text, size = 140) => {
  if (!text) return [];
  const words = text.split(" ");
  const chunks = [];

  for (let i = 0; i < words.length; i += size) {
    chunks.push(words.slice(i, i + size).join(" "));
  }

  return chunks;
};

const ReaderClient = ({ book, bookId }) => {
  const router = useRouter();
  const [fontSize, setFontSize] = useState("md");

  const content = useMemo(() => {
    return book.summary || book.bookDescription || "No reading content available.";
  }, [book]);

  const sections = useMemo(() => chunkText(content, 140), [content]);

  const fontClass =
    fontSize === "sm"
      ? "reader-page__content--sm"
      : fontSize === "lg"
      ? "reader-page__content--lg"
      : fontSize === "xl"
      ? "reader-page__content--xl"
      : "reader-page__content--md";

  const ideasLabel =
    Array.isArray(book.tags) && book.tags.length > 0
      ? `${book.tags.length} Key Ideas`
      : "8 Key Ideas";

  return (
    <main className="reader-page">
      <div className="reader-page__container">
        <aside className="reader-page__sidebar">
          <img
            src={book.imageLink}
            alt={book.title}
            className="reader-page__cover"
          />

          <div className="reader-page__meta">
            <h1 className="reader-page__title">{book.title}</h1>
            <p className="reader-page__author">{book.author}</p>

            <div className="reader-page__meta-list">
              <div className="reader-page__meta-item">
                <HiOutlineClock />
                <span>{book.duration || "03:24"}</span>
              </div>
              <div className="reader-page__meta-item">
                <HiOutlineLightBulb />
                <span>{ideasLabel}</span>
              </div>
              <div className="reader-page__meta-item">
                <HiOutlineBookOpen />
                <span>Read mode</span>
              </div>
            </div>

            <button
              type="button"
              className="reader-page__listen-btn"
              onClick={() => router.push(`/player/${bookId}`)}
            >
              <HiOutlineMicrophone />
              <span>Listen instead</span>
            </button>
          </div>
        </aside>

        <section className="reader-page__main">
          <div className="reader-page__topbar">
            <div className="reader-page__font-controls">
              <button
                type="button"
                className={`reader-page__font-btn ${
                  fontSize === "sm" ? "reader-page__font-btn--active" : ""
                }`}
                onClick={() => setFontSize("sm")}
              >
                A
              </button>
              <button
                type="button"
                className={`reader-page__font-btn ${
                  fontSize === "md" ? "reader-page__font-btn--active" : ""
                }`}
                onClick={() => setFontSize("md")}
              >
                A
              </button>
              <button
                type="button"
                className={`reader-page__font-btn ${
                  fontSize === "lg" ? "reader-page__font-btn--active" : ""
                }`}
                onClick={() => setFontSize("lg")}
              >
                A
              </button>
              <button
                type="button"
                className={`reader-page__font-btn ${
                  fontSize === "xl" ? "reader-page__font-btn--active" : ""
                }`}
                onClick={() => setFontSize("xl")}
              >
                A
              </button>
            </div>
          </div>

          <div className={`reader-page__content ${fontClass}`}>
            <h2 className="reader-page__heading">What&apos;s it about?</h2>

            {Array.isArray(book.tags) && book.tags.length > 0 && (
              <div className="reader-page__tags">
                {book.tags.slice(0, 4).map((tag, index) => (
                  <span key={`${tag}-${index}`} className="reader-page__tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {sections.length > 0 ? (
              sections.map((section, index) => (
                <p key={index} className="reader-page__paragraph">
                  {section}
                </p>
              ))
            ) : (
              <p className="reader-page__paragraph">
                No reading content available.
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ReaderClient;