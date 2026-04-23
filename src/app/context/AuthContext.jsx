"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(undefined);

const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
const STORAGE_KEY = "summarist-user";

export const AuthProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [pendingRoute, setPendingRoute] = useState("/for-you");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem(STORAGE_KEY);
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error("Failed to load saved user", error);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  const saveUser = (userData) => {
    setUser(userData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
  };

  const clearUser = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

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

    saveUser({
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

    saveUser({
      email,
      isGuest: false,
    });

    closeAuth();
    return { success: true };
  };

  const guestLogin = () => {
    saveUser({
      email: "guest@gmail.com",
      isGuest: true,
    });

    closeAuth();
    return { success: true };
  };

  const logout = () => {
    clearUser();
  };

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
        isHydrated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
