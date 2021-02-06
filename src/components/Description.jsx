import React from "react";
import DrOlariu from "./imageComponents/DrOlariu";

export default function Description() {
  return (
    <div>
      <div id="descriere" style={{
        marginBottom: 1 + "em",
        width: 330 + "px",
        float: "left",
      }}>
        <strong> Dr. Olariu Ioan</strong><br />
        Medic Primar Cardiolog<br />
        Institutul de Boli Cardiovasculare Timișoara<br />
        Competență în Cardiologie Invazivă <br />
        Competență în Ecocardiografie<br />
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/CabinetCardiologic/?eid=ARBXsJA-PukiHIlKczHx4WirPc30MQ0lPCoO9cfPhPEVz_GqmOxPip8yAFACwY-ZR3fGhpRtel-bnhXM">Vezi pagina de Facebook a cabinetului</a> <br />
        <a target="_blank" rel="noreferrer" href="https://www.soimiisanatatii.ro/profile-94603-cmp/">Vezi profilul cabinetului pe soimiisanatatii.ro</a> <br />

        <a href="https://www.soimiisanatatii.ro/profile-94603-cmp/" target="_blank">
          <img src="https://www.soimiisanatatii.ro/images/medals/laureat300_black_2_ro.png" style={{ width: 300 + "px", height: 130 + "px", marginTop: "4%" }} alt="Cabinet Medical Cardiologie Dr. Olariu Ioan - Timisoara" title="Cabinet Medical Cardiologie Dr. Olariu Ioan - Timisoara">
          </img>
        </a>
      </div >

      <div style={{
        height: 300 + "px",
        width: 300 + "px",
        maxWidth: 300 + "px",
        float: "right"
      }}>
        <DrOlariu />
      </div>

      <div style={{ clear: "both" }}> </div>

    </div >
  );
}