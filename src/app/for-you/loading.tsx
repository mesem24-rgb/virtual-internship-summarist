import AppShell from "@/app/components/AppShell";
import {
  SelectedBookSkeleton,
  BookRowSkeleton,
} from "@/app/components/books/BookSkeletons";

export default function Loading() {
  return (
    <AppShell>
      <main className="for-you-page">
        <div className="for-you-page__container">
          <SelectedBookSkeleton />
          <BookRowSkeleton title="Recommended For You" />
          <BookRowSkeleton title="Suggested Books" />
        </div>
      </main>
    </AppShell>
  );
}