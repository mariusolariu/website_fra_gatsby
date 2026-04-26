import React from "react";

export default function Steps() {
  return (
    <section className="section">
      <div className="section-head">
        <span className="eyebrow">În 3 pași simpli</span>
        <h2>Cum vă programați la consult</h2>
        <p>
          Nu este nevoie de internet sau formulare. Sunați la telefon, alegem împreună o dată, și
          veniți la cabinet.
        </p>
      </div>
      <div className="steps">
        <div className="step">
          <div className="step-num">1</div>
          <h3>Sunați la telefon</h3>
          <p>
            Vă răspunde personalul cabinetului și vă propune o zi de miercuri când domnul doctor
            are program.
          </p>
          <a href="tel:+40740016561">0740 016 561</a>
        </div>
        <div className="step">
          <div className="step-num">2</div>
          <h3>Veniți la cabinet</h3>
          <p>
            Aduceți buletinul, actele medicale anterioare și lista de medicamente pe care le
            luați împreună cu dozele. Cabinetul este în Bocșa, str. Carpați nr. 2.
          </p>
          <a href="#vizita">Vezi adresa →</a>
        </div>
        <div className="step">
          <div className="step-num">3</div>
          <h3>Consultul propriu-zis</h3>
          <p>
            Examen clinic, EKG și, după caz, ecocardiografie. La final primiți o scrisoare medicală
            cu diagnostic și tratament.
          </p>
          <a href="#servicii">Vezi servicii →</a>
        </div>
      </div>
    </section>
  );
}
