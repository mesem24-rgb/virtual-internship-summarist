"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { useAuth } from "@/app/context/AuthContext";

const AuthModal = () => {
  const {
    isOpen,
    closeAuth,
    login,
    register,
    guestLogin,
    pendingRoute,
  } = useAuth();

  const router = useRouter();

  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setError("");
      setPassword("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeAuth();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeAuth]);

  if (!isOpen) return null;

  const redirectToPendingRoute = () => {
    router.push(typeof pendingRoute === "string" ? pendingRoute : "/for-you");
    closeAuth();
  };

  const resetForm = () => {
    setError("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = () => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    const result =
      mode === "login"
        ? login(trimmedEmail, password)
        : register(trimmedEmail, password);

    if (!result?.success) {
      setError(result?.message || "Something went wrong.");
      return;
    }

    resetForm();
    redirectToPendingRoute();
  };

  const handleGuestLogin = () => {
    const result = guestLogin();

    if (!result?.success) {
      setError("Guest login failed.");
      return;
    }

    resetForm();
    redirectToPendingRoute();
  };

  const handleGoogleSignIn = () => {
    const result = guestLogin();

    if (!result?.success) {
      setError("Google sign in failed.");
      return;
    }

    resetForm();
    redirectToPendingRoute();
  };

  const handleForgotPassword = () => {
    setError("Password reset is not wired up yet.");
  };

  return (
    <div className="auth-modal" onClick={closeAuth}>
      <div
        className="auth-modal__content auth-modal__content--sample"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="auth-modal__x"
          onClick={closeAuth}
          aria-label="Close modal"
        >
          ×
        </button>

        <h2 className="auth-modal__title auth-modal__title--center">
          {mode === "login" ? "Log in to Summarist" : "Create your account"}
        </h2>

        <button
          type="button"
          className="auth-modal__sample-btn auth-modal__sample-btn--guest"
          onClick={handleGuestLogin}
        >
          <span className="auth-modal__sample-icon">
            <FaUser />
          </span>
          <span>
            {mode === "login" ? "Login as a Guest" : "Continue as a Guest"}
          </span>
        </button>

        <div className="auth-modal__divider">
          <span>or</span>
        </div>

        <button
          type="button"
          className="auth-modal__sample-btn auth-modal__sample-btn--google"
          onClick={handleGoogleSignIn}
        >
          <span className="auth-modal__sample-icon auth-modal__sample-icon--google">
            <FcGoogle />
          </span>
          <span>
            {mode === "login" ? "Login with Google" : "Sign up with Google"}
          </span>
        </button>

        <div className="auth-modal__divider">
          <span>or</span>
        </div>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="auth-modal__error">{error}</p>}

        <button
          type="button"
          className="auth-modal__sample-login"
          onClick={handleSubmit}
        >
          {mode === "login" ? "Login" : "Create Account"}
        </button>

        <button
          type="button"
          className="auth-modal__text-link auth-modal__forgot auth-modal__forgot--center"
          onClick={handleForgotPassword}
        >
          Forgot your password?
        </button>

        <p className="auth-modal__switch-text auth-modal__switch-text--tight">
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
        </p>

        <button
          type="button"
          className="auth-modal__text-link auth-modal__signup-link"
          onClick={() => {
            setMode(mode === "login" ? "register" : "login");
            setError("");
          }}
        >
          {mode === "login" ? "Sign up" : "Log in"}
        </button>
      </div>
    </div>
  );
};

export default AuthModal;