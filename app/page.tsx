"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
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
          Mit dem Absenden stimmst du unserer{" "}
          <Link href="/datenschutz">Datenschutzerklärung</Link> zu.
        </p>

        <div className="color-dots">
          <span style={{ background: "#EFD8BE" }} />
          <span style={{ background: "#B4F5FE" }} />
          <span style={{ background: "#B091EF" }} />
          <span style={{ background: "#98FF98" }} />
          <span style={{ background: "#FFC2F4" }} />
          <span style={{ background: "#F9E069" }} />
        </div>
      </div>

      <p className="footer">Coming Soon</p>
    </>
  );
}
