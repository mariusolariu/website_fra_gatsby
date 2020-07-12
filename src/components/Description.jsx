import React from "react";
import Slideshow from "./Slideshow";

export default function Description() {
  return (
    <div>
      <div id="descriere" style={{ marginBottom: 1 + "em", margin: "2%", paddingTop: 2 + "em", float: 'left', width: 330 + "px" }}>
        <strong> Dr. Olariu Ioan</strong><br />
        Medic Primar Cardiolog<br />
        Institutul de Boli Cardiovasculare Timisoara<br />
        Competenta in Cardiologie Invaziva <br />
        Competenta in Ecocardiografie<br />
        <a
          href="https://www.facebook.com/CabinetCardiologic/?eid=ARBXsJA-PukiHIlKczHx4WirPc30MQ0lPCoO9cfPhPEVz_GqmOxPip8yAFACwY-ZR3fGhpRtel-bnhXM">Vezi
  pagina de Facebook a cabinetului</a>

      </div >

      <div id="slideshowWrapper" style={{ width: 100 + "vh", maxWidth: 360 + "px", height: 80 + "%", float: "right", border: "1px solid black" }}>
        <Slideshow
          imagesRelPaths={[
            "descriereSlideshow/1_drOlariu.jpeg",
            "descriereSlideshow/2_surgery.jpg",
            "descriereSlideshow/3_salaOperatie.jpg",
            "descriereSlideshow/4_presentation.jpg",
            "descriereSlideshow/5_presentationBigHall.jpg"
          ]}
        />
      </div>

      <div style={{ clear: "both" }}> </div>
    </div >
  );
}