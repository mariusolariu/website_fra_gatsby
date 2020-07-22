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
      { title: "Consult cardiologic + Monitorizarea Holter EKG + TA/24H", price: "400 RON" }
    ],
    paddingTopTable: 0.35 + "em",
    paddingBottomTable: 0.5 + "em",
    anchorId: "timisoaraMap",
    locationUrl: "https://g.page/CardiologieTimisoara?share",
    photos: [
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim0.jpeg?raw=true',
        width: 90,
        height: 100
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim1.jpg?raw=true',
        width: 90,
        height: 100
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim2.jpg?raw=true',
        width: 90,
        height: 100
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim3.jpeg?raw=true',
        width: 90,
        height: 100
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim4.jpg?raw=true',
        width: 90,
        height: 100
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim5.jpg?raw=true',
        width: 90,
        height: 100
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim6.jpeg?raw=true',
        width: 90,
        height: 100
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim7.jpg?raw=true',
        width: 90,
        height: 100
      }
    ],
  }

  const cabinetBocsaData = {
    title: "Cabinet Bocșa",
    address: "Bocșa, Str. Funicularului, nr. 77A",
    workingHours: "Miercuri 15:00 - 17:00",
    appoinmentsPhoneNumbers: "0757 488 541, 0255 525 403, 0742 421 032",
    services: [
      { title: "Consult cardiologic inițial + EKG + Pulsoximetrie", price: "150 RON" },
      { title: "Consult Cardiologic + Monitorizare Holter EKG / 24H", price: "250 RON" },
      { title: "Consult Cardiologic + Monitorizare Holter TA/24H", price: "250 RON" },
      { title: "Consult cardiologic + Ecocardiografie Doppler/2D Color + Pulsoximetrie", price: "350 RON" },
      { title: "Consult cardiologic + Monitorizarea Holter EKG + TA/24H", price: "400 RON" }
    ],
    paddingTopTable: 0 + "em",
    paddingBottomTable: 0.5 + "em",
    anchorId: 'bocsaMap',
    locationUrl: "https://g.page/CardiologieBocsa?share",
    photos: [
      {
        title: 'Click pentru marire',
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/bocsa0.jpg?raw=true',
        width: 90,
        height: 100
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/bocsa1.jpg?raw=true',
        width: 90,
        height: 100
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/bocsa2.jpg?raw=true',
        width: 90,
        height: 100
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/bocsa3.jpg?raw=true',
        width: 90,
        height: 100
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/bocsa4.jpg?raw=true',
        width: 90,
        height: 100
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/bocsa5.jpg?raw=true',
        width: 90,
        height: 100
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/bocsa6.jpg?raw=true',
        width: 90,
        height: 100
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/bocsa7.jpg?raw=true',
        width: 90,
        height: 100
      }
    ]
  }

  return (
    <>
      <div>
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

        <div style={{ clear: "both" }}> </div>

      </div>

    </>
  )
}