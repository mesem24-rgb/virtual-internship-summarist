"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, openAuth, logout } = useAuth();

  const handleAuthClick = () => {
    if (user) {
      logout();
      router.push("/");
    } else {
      openAuth("/for-you");
    }
  };

  const isHomePage = pathname === "/";
  const isForYouPage = pathname === "/for-you";

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <Link href={user ? "/for-you" : "/"} className="nav__img--mask">
          <img src="/assets/logo.png" alt="Summarist logo" className="nav__img" />
        </Link>

        <ul className="nav__list--wrapper">
          {!isHomePage && (
            <li>
              <Link href="/for-you" className="nav__list nav__list--login">
                For You
              </Link>
            </li>
          )}

          {isForYouPage && (
            <li>
              <Link href="/" className="nav__list nav__list--mobile">
                Home
              </Link>
            </li>
          )}

          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>

          <li className="nav__list nav__list--login" onClick={handleAuthClick}>
            {user ? "Logout" : "Login"}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;