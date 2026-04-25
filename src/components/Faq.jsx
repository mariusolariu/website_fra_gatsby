import React from "react";

export default function Faq() {
  return (
    <section className="section-banded">
      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">Întrebări frecvente</span>
          <h2>Răspunsuri la cele mai dese întrebări</h2>
          <p>Apăsați pe o întrebare ca să vedeți răspunsul.</p>
        </div>

        <div className="faq">
          <details className="faq-item">
            <summary>
              Ce trebuie să aduc cu mine la consult?
              <span className="chev" aria-hidden="true">▾</span>
            </summary>
            <div className="answer">
              <p>Vă rugăm să aduceți:</p>
              <p>
                • Cartea de identitate (buletinul)<br />
                • Biletul de trimitere de la medicul de familie, dacă aveți<br />
                • Analize și documente medicale anterioare (EKG-uri, scrisori medicale,
                ecografii)<br />
                • Lista cu medicamentele pe care le luați zilnic
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>
              Cu cât timp înainte trebuie să mă programez?
              <span className="chev" aria-hidden="true">▾</span>
            </summary>
            <div className="answer">
              <p>
                De obicei programările se fac cu o lună înainte. Cabinetul are program o singură zi
                pe săptămână (miercuri), așa că vă recomandăm să sunați din timp.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>
              Există loc de parcare?
              <span className="chev" aria-hidden="true">▾</span>
            </summary>
            <div className="answer">
              <p>
                Da, există spații de parcare pe stradă și în apropierea blocului 2 de pe strada
                Carpați. Accesul în cabinet se face de la parter.
              </p>
              <p>
                <strong>
                  În caz de urgență (durere puternică în piept, dificultăți de respirație, leșin)
                  sunați imediat la 112.
                </strong>
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
