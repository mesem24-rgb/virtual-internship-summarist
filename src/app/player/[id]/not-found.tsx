import AppShell from "@/app/components/AppShell";
import Link from "next/link";

export default function NotFound() {
  return (
    <AppShell>
      <main className="player-screen">
        <div className="player-page__container">
          <section className="player-page__section">
            <h1 className="player-page__section-title">Audio not found</h1>
            <p className="player-page__text">
              We couldn&apos;t find this audio summary.
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