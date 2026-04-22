"use client";

import { useRouter } from "next/navigation";
import { HiOutlineBookOpen, HiOutlineMicrophone } from "react-icons/hi";
import { useAuth } from "@/app/context/AuthContext";

const BookActions = ({ bookId, showRead = true }) => {
  const router = useRouter();
  const { user, openAuth } = useAuth();

  const handleNavigate = (type) => {
    if (!bookId) {
      console.error("Missing bookId in BookActions");
      return;
    }

    const targetRoute =
      type === "read" ? `/book/${bookId}` : `/player/${bookId}`;

    if (!user) {
      openAuth(targetRoute);
      return;
    }

    router.push(targetRoute);
  };

  return (
    <div className="book-detail__buttons">
      {showRead && (
        <button
          type="button"
          className="book-detail__button"
          onClick={() => handleNavigate("read")}
        >
          <HiOutlineBookOpen />
          <span>Read</span>
        </button>
      )}

      <button
        type="button"
        className="book-detail__button"
        onClick={() => handleNavigate("listen")}
      >
        <HiOutlineMicrophone />
        <span>Listen</span>
      </button>
    </div>
  );
};

export default BookActions;