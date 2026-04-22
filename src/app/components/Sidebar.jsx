"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import {
  HiOutlineHome,
  HiOutlineBookmark,
  HiOutlinePencilAlt,
  HiOutlineSearch,
  HiOutlineCog,
  HiOutlineQuestionMarkCircle,
  HiOutlineLogout,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState("md");

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const saved = localStorage.getItem("reader-font-size") || "md";
    setFontSize(saved);
    document.documentElement.classList.remove(
      "reader-font-sm",
      "reader-font-md",
      "reader-font-lg",
      "reader-font-xl"
    );
    document.documentElement.classList.add(`reader-font-${saved}`);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove(
      "reader-font-sm",
      "reader-font-md",
      "reader-font-lg",
      "reader-font-xl"
    );
    document.documentElement.classList.add(`reader-font-${fontSize}`);
    localStorage.setItem("reader-font-size", fontSize);
  }, [fontSize]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    router.push("/");
  };

  const topNavItems = [
    { label: "For you", href: "/for-you", icon: HiOutlineHome },
    { label: "My Library", href: "/library", icon: HiOutlineBookmark },
    { label: "Highlights", href: "/highlights", icon: HiOutlinePencilAlt },
    { label: "Search", href: "/search", icon: HiOutlineSearch },
  ];

  const bottomNavItems = [
    { label: "Settings", href: "/settings", icon: HiOutlineCog },
    { label: "Help & Support", href: "/help", icon: HiOutlineQuestionMarkCircle },
  ];

  const isActiveLink = (href) => {
    if (href === "/for-you") return pathname === "/for-you";
    return pathname.startsWith(href);
  };

  const showReaderControls =
    pathname.startsWith("/book/") || pathname.startsWith("/player/");

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  return (
    <>
      <button
        type="button"
        className="sidebar__burger"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
      </button>

      <div
        className={`sidebar__overlay ${menuOpen ? "sidebar__overlay--show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside className={`sidebar ${menuOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar__top">
          <Link href="/for-you" className="sidebar__logo">
            <img
              src="/assets/logo.png"
              alt="Summarist logo"
              className="sidebar__logo-img"
            />
          </Link>

          <nav className="sidebar__nav">
            {topNavItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`sidebar__link ${
                    isActiveLink(item.href) ? "sidebar__link--active" : ""
                  }`}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
            </nav>

          {showReaderControls && (
            <div className="sidebar__reader-controls">
              <button
                type="button"
                className={`sidebar__aa-btn ${fontSize === "sm" ? "sidebar__aa-btn--active" : ""}`}
                onClick={() => handleFontSizeChange("sm")}
              >
                Aa
              </button>
              <button
                type="button"
                className={`sidebar__aa-btn ${fontSize === "md" ? "sidebar__aa-btn--active" : ""}`}
                onClick={() => handleFontSizeChange("md")}
              >
                Aa
              </button>
              <button
                type="button"
                className={`sidebar__aa-btn ${fontSize === "lg" ? "sidebar__aa-btn--active" : ""}`}
                onClick={() => handleFontSizeChange("lg")}
              >
                Aa
              </button>
              <button
                type="button"
                className={`sidebar__aa-btn ${fontSize === "xl" ? "sidebar__aa-btn--active" : ""}`}
                onClick={() => handleFontSizeChange("xl")}
              >
                Aa
              </button>
            </div>
          )}
        </div>

        <div className="sidebar__bottom">
          <nav className="sidebar__nav">
            {bottomNavItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                key={item.href}
                href={item.href}
                className={`sidebar__link ${
                  isActiveLink(item.href) ? "sidebar__link--active" : ""
                }`}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <button
              type="button"
              className="sidebar__logout"
              onClick={handleLogout}
            >
              <span className="sidebar__icon">
                <HiOutlineLogout />
              </span>
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;