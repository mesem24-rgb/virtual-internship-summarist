import AppShell from "@/app/components/AppShell";

export default function Loading() {
  return (
    <AppShell>
      <main className="reader-page">
        <div className="reader-page__container">
          <div className="reader-page__sidebar">
            <div className="skeleton skeleton-book-page-image"></div>
          </div>

          <div className="reader-page__main">
            <div className="reader-page__content reader-page__content--md">
              <div className="skeleton skeleton-text skeleton-section-heading"></div>
              <div className="skeleton skeleton-text skeleton-paragraph"></div>
              <div className="skeleton skeleton-text skeleton-paragraph"></div>
              <div className="skeleton skeleton-text skeleton-paragraph"></div>
              <div className="skeleton skeleton-text skeleton-paragraph short"></div>
            </div>
          </div>
        </div>
      </main>
    </AppShell>
  );
}