const BASE_URL =
  "https://us-central1-summaristt.cloudfunctions.net";

/**
 * Safely parse API response (handles empty + bad JSON)
 */
async function safeJson(res: Response) {
  const text = await res.text();

  if (!text || !text.trim()) return null;

  try {
    return JSON.parse(text);
  } catch (error) {
    console.error("Invalid JSON response:", text);
    throw new Error("Invalid JSON response");
  }
}

/**
 * Normalize book ID across inconsistent API fields
 */
export function getBookId(book: any): string | null {
  return book?.id ?? book?.bookId ?? book?.book_id ?? null;
}

/**
 * Fetch a single book by ID
 */
export async function fetchBook(id: string) {
  const res = await fetch(
    `${BASE_URL}/getBook?id=${encodeURIComponent(id)}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error(`Failed to fetch book: ${res.status}`);
  }

  return await safeJson(res);
}

/**
 * Fetch books by status (recommended, suggested, selected)
 */
export async function fetchBooks(status: string) {
  const res = await fetch(
    `${BASE_URL}/getBooks?status=${status}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch books: ${status}`);
  }

  const data = await safeJson(res);

  // Normalize to always return array
  if (!data) return [];
  return Array.isArray(data) ? data : [data];
}

/**
 * Fetch selected book (returns ONE book, not array)
 */
export async function fetchSelectedBook() {
  const books = await fetchBooks("selected");
  return books[0] ?? null;
}