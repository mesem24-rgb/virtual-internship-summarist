import AppShell from "@/app/components/AppShell";
import LibraryClient from "@/app/library/LibraryClient";

export default function LibraryPage() {
  return (
    <AppShell>
      <LibraryClient />
    </AppShell>
  );
}