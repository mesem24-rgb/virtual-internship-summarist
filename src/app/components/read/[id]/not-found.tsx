import AppShell from "@/app/components/AppShell";
import Link from "next/link";

export default function NotFound() {
  return (
    <AppShell>
      <main className="reader-page">
        <div className="reader-page__container">
          <section className="search-page__empty">
            <h1 className="search-page__empty-title">Reading page not found</h1>
            <p className="search-page__empty-text">
              We couldn&apos;t find this book to open in read mode.
            </p>
            <Link href="/for-you" className="book-detail__library-link">
              Back to For you
            </Link>
          </section>
        </div>
      </main>
    </AppShell>
  );
}