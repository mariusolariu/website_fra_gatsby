import React from "react";
import Slideshow from "./GeneralSlideshow";
import { MyImage } from "./MyImage";
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
        <a
          href="https://www.facebook.com/CabinetCardiologic/?eid=ARBXsJA-PukiHIlKczHx4WirPc30MQ0lPCoO9cfPhPEVz_GqmOxPip8yAFACwY-ZR3fGhpRtel-bnhXM">Vezi
  pagina de Facebook a cabinetului</a>

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