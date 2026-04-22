"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LibraryContext = createContext(undefined);

export const LibraryProvider = ({ children }) => {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("summarist-library");

    if (saved) {
      try {
        setLibrary(JSON.parse(saved));
      } catch (error) {
        console.error("Failed to parse library from localStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("summarist-library", JSON.stringify(library));
  }, [library]);

  const isInLibrary = (bookId) => {
    return library.some((book) => String(book.id) === String(bookId));
  };

  const addToLibrary = (book) => {
    const resolvedId = book.id ?? book.bookId ?? book.book_id;
    if (!resolvedId) return;

    setLibrary((prev) => {
      if (prev.some((item) => String(item.id) === String(resolvedId))) {
        return prev;
      }

      return [
        ...prev,
        {
          id: resolvedId,
          title: book.title,
          author: book.author,
          subTitle: book.subTitle || "",
          imageLink: book.imageLink || "",
          duration: book.duration || "",
          averageRating: book.averageRating || "",
          tags: Array.isArray(book.tags) ? book.tags : [],
        },
      ];
    });
  };

  const removeFromLibrary = (bookId) => {
    setLibrary((prev) =>
      prev.filter((book) => String(book.id) !== String(bookId))
    );
  };

  const toggleLibrary = (book) => {
    const resolvedId = book.id ?? book.bookId ?? book.book_id;
    if (!resolvedId) return;

    if (isInLibrary(resolvedId)) {
      removeFromLibrary(resolvedId);
    } else {
      addToLibrary(book);
    }
  };

  const value = useMemo(
    () => ({
      library,
      isInLibrary,
      addToLibrary,
      removeFromLibrary,
      toggleLibrary,
    }),
    [library]
  );

  return (
    <LibraryContext.Provider value={value}>
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = () => {
  const context = useContext(LibraryContext);

  if (!context) {
    throw new Error("useLibrary must be used within a LibraryProvider");
  }

  return context;
};