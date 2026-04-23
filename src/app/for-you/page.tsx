"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/app/components/AppShell";
import SelectedBook from "@/app/components/books/SelectedBook";
import BookRow from "@/app/components/books/BookRow";
import { fetchSelectedBook, fetchBooks } from "@/lib/books";
import { useAuth } from "@/app/context/AuthContext";
import { useState } from "react";

export default function ForYouPage() {
  const router = useRouter();
  const { user, isHydrated } = useAuth();

  const [selectedBook, setSelectedBook] = useState(null);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [suggestedBooks, setSuggestedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isHydrated) return;

    if (!user) {
      router.replace("/");
      return;
    }

    const loadBooks = async () => {
      try {
        const [selected, recommended, suggested] = await Promise.all([
          fetchSelectedBook(),
          fetchBooks("recommended"),
          fetchBooks("suggested"),
        ]);

        setSelectedBook(selected);
        setRecommendedBooks(recommended);
        setSuggestedBooks(suggested);
      } catch (error) {
        console.error("Failed to load books", error);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, [user, isHydrated, router]);

  if (!isHydrated) return null;
  if (!user) return null;

  return (
    <AppShell>
      <main className="for-you-page">
        <div className="for-you-page__container">
          {!loading && selectedBook && <SelectedBook book={selectedBook} />}

          <BookRow
            title="Recommended For You"
            subtitle="We think you’ll like these"
            books={recommendedBooks.slice(0, 5)}
          />

          <BookRow
            title="Suggested Books"
            subtitle="Browse those books"
            books={suggestedBooks.slice(0, 5)}
          />
        </div>
      </main>
    </AppShell>
  );
}