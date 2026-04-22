"use client";

import { useAuth } from "@/app/context/AuthContext";

const SettingsClient = () => {
  const { user } = useAuth();

  const plan = user && !user.isGuest ? "Premium Plus" : "Guest";
  const email = user?.email || "Not signed in";

  return (
    <main className="settings-page">
      <div className="settings-page__container">
        <div className="settings-page__header">
          <h1 className="settings-page__title">Settings</h1>
        </div>

        <section className="settings-card">
          <div className="settings-row">
            <span className="settings-row__label">Your subscription plan</span>
            <span className="settings-row__value">{plan}</span>
          </div>

          <div className="settings-row">
            <span className="settings-row__label">Email</span>
            <span className="settings-row__value">{email}</span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SettingsClient;