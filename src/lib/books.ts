const BASE_URL = "https://us-central1-summaristt.cloudfunctions.net";

async function safeJson(res: Response) {
  const text = await res.text();

  if (!text || !text.trim()) return null;

  try {
    return JSON.parse(text);
  } catch (error) {
    console.error("Invalid JSON response:", text);
    return null;
  }
}

export function getBookId(book: any): string | null {
  return book?.id ?? book?.bookId ?? book?.book_id ?? null;
}

export async function fetchBook(id: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/getBook?id=${encodeURIComponent(id)}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      if (res.status === 404) return null;
      console.error(`Failed to fetch book: ${res.status}`);
      return null;
    }

    return await safeJson(res);
  } catch (error) {
    console.error("fetchBook network error:", error);
    return null;
  }
}

export async function fetchBooks(status: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/getBooks?status=${encodeURIComponent(status)}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error(`Failed to fetch books (${status}): ${res.status}`);
      return [];
    }

    const data = await safeJson(res);

    if (!data) return [];
    return Array.isArray(data) ? data : [data];
  } catch (error) {
    console.error(`fetchBooks network error for "${status}":`, error);
    return [];
  }
}

export async function fetchSelectedBook() {
  const books = await fetchBooks("selected");
  return books[0] ?? null;
}