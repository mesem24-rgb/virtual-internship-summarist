import AppShell from "@/app/components/AppShell";

export default function Loading() {
  return (
    <AppShell>
      <main className="player-screen">
        <div className="player-page__container">
          <section className="player-page__hero">
            <div className="player-page__cover-wrap">
              <div className="skeleton skeleton-player-page-image"></div>
            </div>

            <div className="player-page__content">
              <div className="skeleton skeleton-text skeleton-label"></div>
              <div className="skeleton skeleton-text skeleton-title"></div>
              <div className="skeleton skeleton-text skeleton-author"></div>
              <div className="skeleton skeleton-text skeleton-subtitle"></div>

              <div className="player-page__meta">
                <div className="skeleton skeleton-text skeleton-meta"></div>
                <div className="skeleton skeleton-text skeleton-meta"></div>
                <div className="skeleton skeleton-text skeleton-meta"></div>
              </div>
            </div>
          </section>

          <section className="player-page__section">
            <div className="skeleton skeleton-text skeleton-section-heading"></div>
            <div className="skeleton skeleton-text skeleton-paragraph"></div>
            <div className="skeleton skeleton-text skeleton-paragraph"></div>
            <div className="skeleton skeleton-text skeleton-paragraph short"></div>
          </section>
        </div>
      </main>
    </AppShell>
  );
}