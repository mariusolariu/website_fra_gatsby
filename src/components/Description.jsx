import React from "react";
import Slideshow from "./Slideshow";

export default function Description() {
  return (
    <div>
      <div id="descriere" style={{ marginBottom: 1 + "em", margin: "2%", paddingTop: 2 + "em", float: 'left', maxWidth: 330 + "px" }}>
        <strong> Dr. Olariu Ioan</strong><br />
        Medic Specialist Cardiolog<br />
        Institutul de Boli Cardiovasculare Timisoara<br />
        Competenta in Cardiologie Invaziva <br />
        Competenta in Ecocardiografie<br />
        <a
          href="https://www.facebook.com/CabinetCardiologic/?eid=ARBXsJA-PukiHIlKczHx4WirPc30MQ0lPCoO9cfPhPEVz_GqmOxPip8yAFACwY-ZR3fGhpRtel-bnhXM">Vezi
  pagina de Facebook a cabinetului</a>

      </div >

      <div id="slideshowWrapper" style={{ width: 50 + "%", height: 50 + "%", float: "right" }}>
        <Slideshow />
      </div>

      <div style={{ clear: "both" }}> </div>
    </div >
  );
}