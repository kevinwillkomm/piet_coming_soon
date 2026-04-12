import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Piet",
};

export default function Datenschutz() {
  return (
    <div className="legal-page">
      <Link href="/" className="back-link">
        &larr; Zurück
      </Link>

      <h1>Datenschutzerklärung</h1>

      <section>
        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
          Kevin Willkomm<br />
          E-Mail: kontakt@getpiet.com
        </p>
      </section>

      <section>
        <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
        <p>
          Wenn du dich über das Formular auf unserer Coming-Soon-Seite für
          Updates anmeldest, erheben wir ausschließlich deine E-Mail-Adresse.
          Diese wird gespeichert, um dich über den Launch unserer Produkte zu
          informieren.
        </p>
      </section>

      <section>
        <h2>3. Zweck der Datenverarbeitung</h2>
        <p>
          Deine E-Mail-Adresse wird ausschließlich verwendet, um dich über den
          Start von Piet-Produkten zu benachrichtigen. Eine Weitergabe an Dritte
          findet nicht statt.
        </p>
      </section>

      <section>
        <h2>4. Rechtsgrundlage</h2>
        <p>
          Die Verarbeitung deiner E-Mail-Adresse erfolgt auf Grundlage deiner
          Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Du kannst diese
          Einwilligung jederzeit widerrufen.
        </p>
      </section>

      <section>
        <h2>5. Speicherdauer</h2>
        <p>
          Deine E-Mail-Adresse wird gespeichert, bis du dich abmeldest oder uns
          zur Löschung aufforderst. Nach dem Widerruf wird deine E-Mail-Adresse
          unverzüglich gelöscht.
        </p>
      </section>

      <section>
        <h2>6. Deine Rechte</h2>
        <p>Du hast jederzeit das Recht auf:</p>
        <ul>
          <li>Auskunft über deine gespeicherten Daten</li>
          <li>Berichtigung unrichtiger Daten</li>
          <li>Löschung deiner Daten</li>
          <li>Widerruf deiner Einwilligung</li>
          <li>Beschwerde bei einer Aufsichtsbehörde</li>
        </ul>
        <p>
          Wende dich dazu einfach an kontakt@getpiet.com.
        </p>
      </section>

      <section>
        <h2>7. Hosting</h2>
        <p>
          Diese Website wird über Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA
          91789, USA) gehostet. Beim Besuch der Website werden automatisch
          Informationen (z.B. IP-Adresse, Browsertyp, Zeitpunkt des Zugriffs)
          in Server-Logfiles gespeichert. Diese Daten sind nicht bestimmten
          Personen zuordenbar. Weitere Informationen findest du in der{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutzerklärung von Vercel
          </a>
          .
        </p>
      </section>

      <section>
        <h2>8. Cookies</h2>
        <p>
          Diese Website verwendet keine Cookies und keine Tracking-Tools.
        </p>
      </section>

      <p className="legal-date">Stand: April 2026</p>
    </div>
  );
}
