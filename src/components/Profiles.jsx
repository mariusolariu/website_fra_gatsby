import React from "react";
import { FacebookIcon, StarIcon } from "./Icons";

export default function Profiles() {
  return (
    <section className="section section-tight">
      <div className="profile-strip">
        <a
          className="profile-card"
          href="https://www.facebook.com/clinicaolariumedtimisoara/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="profile-icon">
            <FacebookIcon size={28} />
          </span>
          <div>
            <div className="pc-title">Pagina de Facebook</div>
            <div className="pc-sub">Vedeți noutăți și anunțuri</div>
          </div>
        </a>
        <a
          className="profile-card"
          href="https://www.soimiisanatatii.ro/profile-94603-cmp/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="profile-icon">
            <StarIcon size={28} />
          </span>
          <div>
            <div className="pc-title">Profil pe șoimiisănătății.ro</div>
            <div className="pc-sub">Recenzii și informații suplimentare</div>
          </div>
        </a>
      </div>
    </section>
  );
}
