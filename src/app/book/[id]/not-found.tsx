import AppShell from "@/app/components/AppShell";
import Link from "next/link";

export default function NotFound() {
  return (
    <AppShell>
      <main className="book-detail">
        <div className="book-detail__container">
          <section className="book-detail__section">
            <h1 className="book-detail__section-title">Book not found</h1>
            <p className="book-detail__text">
              We couldn&apos;t find that book.
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