"use client";

import { FormEvent, useState } from "react";
import PietBackground from "./PietBackground";
import PietLogo from "./PietLogo";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value));
  }

  return (
    <>
      <PietBackground />

      <div className="overlay">
        <PietLogo />

        <h1 className="wordmark">Piet</h1>
        <p className="tagline">Designed with care</p>

        <hr className="divider" />

        <h2 className="headline">
          Etwas <strong>Schönes</strong> entsteht.
        </h2>
        <p className="subtext">
          Ästhetisches Desk-Zubehör, das sich gut anfühlt. Sanfte Farben.
          Saubere Formen. Bald hier.
        </p>

        <form className="notify-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Deine E-Mail für Updates"
            required
            disabled={submitted}
            onChange={handleEmailChange}
          />
          <button type="submit" className={emailValid ? "valid" : ""}>
            {submitted ? "Gespeichert" : "Erinnern"}
          </button>
        </form>

        <p className="privacy-note">
          Wir nutzen deine E-Mail nur, um dich über den Launch zu informieren. Kein Spam, keine Weitergabe an Dritte. Du kannst dich jederzeit abmelden.
        </p>

        <div className="color-dots">
          <span style={{ background: "#deedfc" }} />
          <span style={{ background: "#f7dce5" }} />
          <span style={{ background: "#c8ebcd" }} />
          <span style={{ background: "#dfdee5" }} />
          <span style={{ background: "#fbebb5" }} />
        </div>
      </div>

      <p className="footer">Coming Soon</p>
    </>
  );
}
