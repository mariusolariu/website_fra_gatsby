import React from "react";
import { MapPinIcon, ClockIcon, PhoneIcon, SendIcon } from "./Icons";

const SCHEDULE = [
  { day: "Luni", hours: "închis", closed: true },
  { day: "Marți", hours: "închis", closed: true },
  { day: "Miercuri", hours: "16:00 — 18:00", highlight: true },
  { day: "Joi", hours: "închis", closed: true },
  { day: "Vineri", hours: "închis", closed: true },
  { day: "Sâmbătă", hours: "închis", closed: true },
  { day: "Duminică", hours: "închis", closed: true },
];

export default function Visit() {
  return (
    <section className="section" id="vizita">
      <div className="section-head">
        <span className="eyebrow">Vizita la cabinet</span>
        <h2>Adresă, program și programări</h2>
        <p>Toate informațiile de care aveți nevoie ca să ajungeți la cabinet.</p>
      </div>

      <div className="visit">
        <div className="visit-card">
          <h3>
            <span className="icon-bubble">
              <MapPinIcon size={24} />
            </span>
            Unde ne găsiți
          </h3>
          <p className="big-text">
            <strong>Bocșa</strong>, Str. Carpați, nr. 2, Bl. 2
          </p>
          <p className="sub">Județul Caraș-Severin</p>
          <a href="#harta" className="btn btn-secondary">
            <span className="icon">
              <SendIcon size={22} />
            </span>
            Arată locația pe hartă
          </a>
        </div>

        <div className="visit-card">
          <h3>
            <span className="icon-bubble">
              <ClockIcon size={24} />
            </span>
            Programul cabinetului
          </h3>
          {SCHEDULE.map((row) => {
            const cls = ["schedule-row"];
            if (row.closed) cls.push("closed");
            if (row.highlight) cls.push("highlight");
            return (
              <div key={row.day} className={cls.join(" ")}>
                <span className="day">{row.day}</span>
                <span className="hours">{row.hours}</span>
              </div>
            );
          })}
        </div>

        <div className="visit-card visit-phone-card">
          <h3>
            <span className="icon-bubble">
              <PhoneIcon size={24} />
            </span>
            Pentru programări sunați la
          </h3>
          <a href="tel:+40740016561" className="phone-big">
            0740 016 561
          </a>
          <p className="sub">
            Vă răspundem în zilele lucrătoare. Programările se fac din timp.
          </p>
        </div>
      </div>
    </section>
  );
}
