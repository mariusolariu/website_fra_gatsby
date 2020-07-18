import React from 'react';
import Cabinet from './Cabinet';

export default function Cabinete() {
  const cabinetTimisoaraData = {
    title: "Cabinet Timișoara",
    address: "Timișoara, Bulevardul Cetatii, Nr. 77",
    workingHours: "Luni 15:00 – 17:00",
    appoinmentsPhoneNumbers: "0740 384 798, 0742 421 032",
    services: [
      { title: "Consult cardiologic inițial + EKG + Pulsoximetrie", price: "200 RON" },
      { title: "Consult cardiologic + Monitorizare Holter Ekg/24H", price: "300 RON" },
      { title: "Consult Cardiologic + Monitorizare Holter TA/24H", price: "300 RON" },
      { title: "Consult cardiologic + Ecocardiografie Doppler/2D Color + Pulsoximetrie", price: "350 RON" },
      { title: "Consult cardiologic + Monitorizarea Holter EKG + TA 24/H", price: "400 RON" }
    ],
    paddingTopTable: 0.35 + "em",
  }

  const cabinetBocsaData = {
    title: "Cabinet Bocșa",
    address: "Bocșa, Str. Funicularului, nr. 77A",
    workingHours: "Miercuri 15:00 - 17:00",
    appoinmentsPhoneNumbers: "0757 488 541, 0255 525 403, 0742 421 032",
    services: [
      { title: "Control cardiologic + EKG + Pulsoximetrie", price: "150 RON" },
      { title: "Consult cardiologic inițial + EKG + Pulsoximetrie", price: "200 RON" },
      { title: "Consult Cardiologic + Monitorizare Holter EKG / 24H", price: "250 RON" },
      { title: "Consult Cardiologic + Monitorizare Holter TA/24H", price: "250 RON" },
      { title: "Consult cardiologic inițial + Ecocardiografie Doppler/2D Color + Pulsoximetrie", price: "350 RON" },
      { title: "Consult cardiologic + Monitorizarea Holter EKG + TA 24/H", price: "400 RON" }
    ],
    paddingTopTable: 0 + "em",
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "#F9F9F9",
        }}
      >
        <div
          style={{
            float: "left",
            maxWidth: 350 + "px",
          }}
        >
          <Cabinet
            {...cabinetTimisoaraData}
          />
        </div>

        <div
          style={{
            float: "right",
            maxWidth: 350 + "px",
          }}
        >
          <Cabinet
            {...cabinetBocsaData}
          />
        </div>
      </div>

    </>
  )
}