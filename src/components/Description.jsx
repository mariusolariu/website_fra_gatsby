import React from "react";
import DrOlariu from "./imageComponents/doctors/DrOlariu";
import DrCozma from "./imageComponents/doctors/DrCozma";
import DrCirin from "./imageComponents/doctors/DrCirin";
import DrChristodorescu from "./imageComponents/doctors/DrChristodorescu";

export default function Description() {
  const flexcontainer = {
    /* We first create a flex layout context */
    "display": "flex",

    /* Then we define the flow direction
       and if we allow the items to wrap 
     * Remember this is the same as:
     * flex-direction: row,
     * flex-wrap: wrap,
     */
    "flex-flow": "row wrap",

    /* Then we define how is distributed the remaining space */
    "justify-content": "space-around",

    padding: 0,
    margin: 0,
    "list-style": "none",
    "margin-top": "2%",
    // "border": "1px solid red"

  };

  const flexitem = {
    "margin-top": "3%",
    "text-align": "justify",
    "min-width": "320px",
    // "border": "1px solid red"
  };


  return (
    <>
      <div style={flexcontainer}>
        <p style={{ "text-indent": "1em" }}>
          <strong>Olariu Med</strong> se adresează pacienților cu boli cardiovasculare și oferă servicii medicale eficiente la cele mai înalte standarde de calitate.
          Colectivul este format din medici cu vastă experiență în tratamentul intervențional al bolilor cardiovasculare (angiocoronarografie cu stentare la nivelul arterelor coronare si periferice, implant de stimulatoare și defibrilatoare cardiace) dobandită la Institutul de Boli Cardiovasculare Timișoara.
        </p>
        {/* TODO: Refactor each doctor div section into a common component */}
        {/* OLARIU */}
        <div style={flexitem}>
          <div style={{ "text-align": "center" }}>
            <strong>Dr. Olariu Ioan</strong>
          </div>


          <div style={{
            height: 90 + "px",
            maxHeight: 90 + "px",
            width: 85 + "px",
            maxWidth: 85 + "px",
            float: "left",
            marginRight: "0.5em"
          }}>
            <DrOlariu />
          </div>

          <div style={{ float: "right" }}>
            Medic Primar Cardiolog<br />
            Institutul de Boli Cardiovasculare Timișoara<br />
            Competență în Cardiologie Invazivă <br />
            Competență în Ecocardiografie<br />
          </div>

        </div>

        {/* COZMA */}
        <div style={flexitem}>
          <div style={{ "text-align": "center" }}>
            <strong>Conf. Dr. Cozma Dragoș</strong>
          </div>


          <div style={{
            height: 95 + "px",
            maxHeight: 95 + "px",
            width: 90 + "px",
            maxWidth: 90 + "px",
            float: "left",
            marginRight: "0.5em"
          }}>
            <DrCozma />
          </div>

          <div style={{ float: "right" }}>
            Medic Primar Cardiolog<br />
            Institutul de Boli Cardiovasculare Timișoara<br />
            Competență în Electrofiziologie, Pacing-Stimulatoare si Defibrilatoare Cardiace<br />
            Competență în Ecocardiografie<br />
          </div>

        </div>

        {/* Christodorescu */}
        <div style={flexitem}>
          <div style={{ "text-align": "center" }}>
            <strong>Dr. Christodorescu Ruxandra</strong>
          </div>


          <div style={{
            height: 84 + "px",
            maxHeight: 84 + "px",
            width: 85 + "px",
            maxWidth: 85 + "px",
            float: "left",
            marginRight: "0.5em"
          }}>
            <DrChristodorescu />
          </div>

          <div style={{ float: "right" }}>
            Medic Primar Cardiolog<br />
            Spitalul Municipal de Urgență Timișoara<br />
            Competență în Ecocardiografie și Ecografie Vasculară<br />
          </div>

        </div>


        {/* Cirin */}
        <div style={flexitem}>
          <div style={{ "text-align": "center" }}>
            <strong>Dr. Cirin Liviu </strong>
            Competență în Ecocardiografie<br />
          </div>


          <div style={{
            height: 84 + "px",
            maxHeight: 84 + "px",
            width: 85 + "px",
            maxWidth: 85 + "px",
            float: "left",
            marginRight: "0.5em"
          }}>
            <DrCirin />
          </div>

          <div style={{ float: "right" }}>
            Medic Specialist Cardiolog<br />
            <br />
          </div>

        </div>

      </div>

      <hr/>

      <div style={{ clear: "both" }}> </div>

      <div style={flexcontainer}>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/CabinetCardiologic/?eid=ARBXsJA-PukiHIlKczHx4WirPc30MQ0lPCoO9cfPhPEVz_GqmOxPip8yAFACwY-ZR3fGhpRtel-bnhXM">Vezi pagina de Facebook a cabinetului</a> <br />
        <a target="_blank" rel="noreferrer" href="https://www.soimiisanatatii.ro/profile-94603-cmp/">Vezi profilul cabinetului pe soimiisanatatii.ro</a> <br />

        <a href="https://www.soimiisanatatii.ro/profile-94603-cmp/" target="_blank">
          <img src="https://www.soimiisanatatii.ro/images/medals/laureat300_black_2_ro.png" style={{ width: 300 + "px", height: 130 + "px", marginTop: "4%" }} alt="Cabinet Medical Cardiologie Dr. Olariu Ioan - Timisoara" title="Cabinet Medical Cardiologie Dr. Olariu Ioan - Timisoara">
          </img>
        </a>
      </div>

    </ >
  );
}