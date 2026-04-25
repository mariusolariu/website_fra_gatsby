import React from "react";

const SERVICES = [
  {
    label: "Consult cardiologic + EKG + Pulsoximetrie",
    price: "400 RON",
  },
  {
    label:
      "Consult cardiologic + EKG + Ecocardiografie Doppler 2D Color + Pulsoximetrie",
    price: "600 RON",
  },
  {
    label: "Consult cardiologic + Test de efort cardiovascular",
    price: "650 RON",
  },
];

export default function Services() {
  return (
    <section className="section-banded" id="servicii">
      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">Servicii și tarife</span>
          <h2>Ce investigații se fac la cabinet</h2>
          <p>
            Tarifele de mai jos sunt valabile la cabinetul din Bocșa. Plata se face la cabinet, în
            numerar.
          </p>
        </div>
        <div className="services">
          {SERVICES.map((s, i) => (
            <div className="services-row" key={i}>
              <div className="label">{s.label}</div>
              <div className="price">{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
