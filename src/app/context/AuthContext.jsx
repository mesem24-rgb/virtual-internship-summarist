"use client";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

export const AuthProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [pendingRoute, setPendingRoute] = useState("/for-you");

  const openAuth = (route = "/for-you") => {
    const safeRoute = typeof route === "string" ? route : "/for-you";
    setPendingRoute(safeRoute);
    setIsOpen(true);
  };

  const closeAuth = () => setIsOpen(false);

  const login = (email, password) => {
    if (!isValidEmail(email)) {
      return { success: false, message: "Invalid email" };
    }

    if (email !== "guest@gmail.com") {
      return { success: false, message: "User not found" };
    }

    if (password !== "guest123") {
      return { success: false, message: "User not found" };
    }

    setUser({
      email,
      isGuest: false,
    });

    closeAuth();
    return { success: true };
  };

  const register = (email, password) => {
    if (!isValidEmail(email)) {
      return { success: false, message: "Invalid email" };
    }

    if (password.length < 6) {
      return {
        success: false,
        message: "Password must be at least 6 characters",
      };
    }

    setUser({
      email,
      isGuest: false,
    });

    closeAuth();
    return { success: true };
  };

  const guestLogin = () => {
    setUser({
      email: "guest@gmail.com",
      isGuest: true,
    });

    closeAuth();
    return { success: true };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{
        isOpen,
        openAuth,
        closeAuth,
        user,
        login,
        register,
        guestLogin,
        logout,
        pendingRoute,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
