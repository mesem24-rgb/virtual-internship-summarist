"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

const AppHeader = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = query.trim();
    if (!trimmed) return;

    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  return (
    <header className="app-header">
      <form className="app-header__search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for books"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search for books"
        />
        <button type="submit" className="app-header__search-btn" aria-label="Submit search">
          <HiOutlineSearch />
        </button>
      </form>
    </header>
  );
};

export default AppHeader;