import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h4>Cabinet Cardiologie Dr. Olariu Ioan</h4>
          <p className="footer-tag-muted">
            Cabinet medical de cardiologie pentru pacienții din Bocșa și împrejurimi.
          </p>
        </div>
        <div>
          <h4>Contact</h4>
          <div className="footer-row">
            <a href="tel:+40740016561">0740 016 561</a>
          </div>
          <div className="footer-row muted">Bocșa, Str. Carpați, nr. 2, Bl. 2</div>
        </div>
        <div>
          <h4>Linkuri</h4>
          <div className="footer-row">
            <a href="#vizita">Adresa și programul</a>
          </div>
          <div className="footer-row">
            <a href="#servicii">Servicii și tarife</a>
          </div>
          <div className="footer-row">
            <a href="https://www.olariu-med.ro">
              Clinica din Timișoara
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {year} Cabinet Cardiologie Dr. Olariu Ioan. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
