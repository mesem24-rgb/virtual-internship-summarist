import AppShell from "@/app/components/AppShell";
import Link from "next/link";

export default function NotFound() {
  return (
    <AppShell>
      <main className="for-you-page">
        <div className="for-you-page__container">
          <section className="search-page__empty">
            <h1 className="search-page__empty-title">Search unavailable</h1>
            <p className="search-page__empty-text">
              We couldn&apos;t load the search page.
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