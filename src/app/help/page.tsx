import AppShell from "@/app/components/AppShell";

export default function HelpPage() {
  return (
    <AppShell>
      <main className="for-you-page">
        <div className="for-you-page__container">
          <section className="search-page">
            <div className="search-page__header">
              <h1 className="search-page__title">Help & Support</h1>
              <p className="search-page__subtitle">
                Find answers and support for your Summarist experience.
              </p>
            </div>

            <div className="search-page__empty">
              <h2 className="search-page__empty-title">Need help?</h2>
              <p className="search-page__empty-text">
                Add FAQs, contact info, and support resources here.
              </p>
            </div>
          </section>
        </div>
      </main>
    </AppShell>
  );
}