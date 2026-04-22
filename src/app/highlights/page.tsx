import AppShell from "@/app/components/AppShell";

export default function HighlightsPage() {
  return (
    <AppShell>
      <main className="for-you-page">
        <div className="for-you-page__container">
          <section className="search-page">
            <div className="search-page__header">
              <h1 className="search-page__title">Highlights</h1>
              <p className="search-page__subtitle">
                Your highlighted passages will appear here.
              </p>
            </div>

            <div className="search-page__empty">
              <h2 className="search-page__empty-title">No highlights yet</h2>
              <p className="search-page__empty-text">
                Start reading and save important passages as highlights.
              </p>
            </div>
          </section>
        </div>
      </main>
    </AppShell>
  );
}