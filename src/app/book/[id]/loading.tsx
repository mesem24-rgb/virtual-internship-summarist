import AppShell from "@/app/components/AppShell";

export default function Loading() {
  return (
    <AppShell>
      <main className="book-detail">
        <div className="book-detail__container">
          <section className="book-detail__hero">
            <div className="book-detail__cover-wrap">
              <div className="skeleton skeleton-book-page-image"></div>
            </div>

            <div className="book-detail__content">
              <div className="skeleton skeleton-text skeleton-title"></div>
              <div className="skeleton skeleton-text skeleton-author"></div>
              <div className="skeleton skeleton-text skeleton-subtitle"></div>

              <div className="book-detail__meta">
                <div className="skeleton skeleton-text skeleton-meta"></div>
                <div className="skeleton skeleton-text skeleton-meta"></div>
                <div className="skeleton skeleton-text skeleton-meta"></div>
              </div>

              <div className="book-detail__buttons">
                <div className="skeleton skeleton-button"></div>
                <div className="skeleton skeleton-button"></div>
              </div>
            </div>
          </section>

          <section className="book-detail__section">
            <div className="skeleton skeleton-text skeleton-section-heading"></div>
            <div className="skeleton skeleton-text skeleton-paragraph"></div>
            <div className="skeleton skeleton-text skeleton-paragraph"></div>
            <div className="skeleton skeleton-text skeleton-paragraph short"></div>
          </section>

          <section className="book-detail__section">
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