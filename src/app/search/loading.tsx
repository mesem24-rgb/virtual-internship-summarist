import AppShell from "@/app/components/AppShell";

export default function Loading() {
  return (
    <AppShell>
      <main className="for-you-page">
        <div className="for-you-page__container">
          <section className="search-page">
            <div className="search-page__header">
              <div className="skeleton skeleton-text skeleton-section-heading"></div>
              <div className="skeleton skeleton-text skeleton-subtitle"></div>
            </div>

            <div className="skeleton skeleton-text skeleton-meta"></div>

            <div className="search-page__grid">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="book-card">
                  <div className="book-card__image-wrapper">
                    <div className="skeleton skeleton-book-image"></div>
                  </div>
                  <div className="skeleton skeleton-text skeleton-card-title"></div>
                  <div className="skeleton skeleton-text skeleton-card-author"></div>
                  <div className="skeleton skeleton-text skeleton-card-subtitle"></div>
                  <div className="skeleton skeleton-text skeleton-card-subtitle short"></div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </AppShell>
  );
}