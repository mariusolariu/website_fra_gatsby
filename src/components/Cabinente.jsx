import React from 'react';
import Cabinet from './Cabinet';

export default function Cabinete() {
  const cabinetTimisoaraData = {
    cabinetTimisoara: true,
    title: "Cabinet Timișoara",
    address: "Timișoara, Bulevardul Cetății, Nr. 77",
    workingHours: "Luni 15:00 – 17:00",
    appoinmentsPhoneNumbers: "0740 384 798, 0742 421 032",
    services: [
      { title: "Consult cardiologic + EKG + Pulsoximetrie", ioan: "250 RON", lucuta: "200 RON" },
      { title: "Consult cardiologic + Monitorizare Holter Ekg/24H", ioan: "400 RON", lucuta: "350 RON" },
      { title: "Consult Cardiologic + Monitorizare Holter TA/24H", ioan: "400 RON", lucuta: "300 RON" },
      { title: "Consult cardiologic + EKG +  Ecocardiografie Doppler/2D Color + Pulsoximetrie", ioan: "450 RON", lucuta: "350 RON" },
      { title: "Consult cardiologic + EKG + Pulsoximetrie + Test de Efort Cardiovascular", ioan: "450 RON", lucuta: "400 RON" },
      { title: "Consult cardiologic + Monitorizarea Holter EKG + TA/24H", ioan: "500 RON", lucuta: "400 RON" },
      { title: "Consult cardiologic + EKG +  Ecocardiografie Doppler/2D Color + Pulsoximetrie + Test de Efort Cardiovascular", ioan: "650 RON", lucuta: "550 RON" },
    ],
    paddingTopTable: 0.35 + "em",
    paddingBottomTable: 0.5 + "em",
    anchorId: "timisoaraMap",
    locationUrl: "https://g.page/CardiologieTimisoara?share",
    images: [
      {
        src: "https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim0.jpeg?raw=true",
        thumbnail: "https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim0.jpeg?raw=true",
        alt: "Poza cabinet Timisoara",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim1.jpg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim1.jpg?raw=true',
        alt: "Poza cabinet Timisoara",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim2.jpg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim2.jpg?raw=true',
        alt: "Poza cabinet Timisoara",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim3.jpeg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim3.jpeg?raw=true',
        alt: "Poza cabinet Timisoara",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim4.jpg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim4.jpg?raw=true',
        alt: "Poza cabinet Timisoara",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim5.jpg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim5.jpg?raw=true',
        alt: "Poza cabinet Timisoara",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim6.jpeg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim6.jpeg?raw=true',
        alt: "Poza cabinet Timisoara",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim7.jpg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim7.jpg?raw=true',
        alt: "Poza cabinet Timisoara",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/laureat.jpeg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/laureat.jpeg?raw=true',
        alt: "Poza cabinet Timisoara",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/diploma.jpg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/diploma.jpg?raw=true',
        alt: "Poza cabinet Timisoara",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      }
    ]
  }

  const cabinetBocsaData = {
    // needed for adding the prices only for Dr. Cozma
    cabinetTimisoara: false,
    title: "Cabinet Bocșa",
    address: "Bocșa, Str. Funicularului, nr. 77A",
    workingHours: "Miercuri 15:00 - 17:00",
    appoinmentsPhoneNumbers: "0740 016 561, 0742 421 032",
    services: [
      { title: "Consult cardiologic + EKG + Pulsoximetrie", ioan: "250 RON", lucuta: "150 RON" },
      { title: "Consult Cardiologic + Monitorizare Holter EKG/24H", ioan: "350 RON", lucuta: "300 RON" },
      { title: "Consult Cardiologic + Monitorizare Holter TA/24H", ioan: "350 RON", lucuta: "300 RON" },
      { title: "Consult cardiologic + EKG + Ecocardiografie Doppler/2D Color + Pulsoximetrie", ioan: "400 RON", lucuta: "300 RON" },
      { title: "Consult cardiologic + Monitorizarea Holter EKG + TA/24H", ioan: "450 RON", lucuta: "400 RON" }
    ],
    paddingTopTable: 0 + "em",
    paddingBottomTable: 0.5 + "em",
    anchorId: 'bocsaMap',
    locationUrl: "https://g.page/CardiologieBocsa?share",
    images: [
      {
        src: "https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/bocsa0.jpg?raw=true",
        thumbnail: "https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/bocsa0.jpg?raw=true",
        alt: "Poza cabinet Bocsa",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/bocsa2.jpg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/bocsa2.jpg?raw=true',
        alt: "Poza cabinet Bocsa",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/bocsa3.jpg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/bocsa3.jpg?raw=true',
        alt: "Poza cabinet Bocsa",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/bocsa5.jpg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetTimisoara/tim5.jpg?raw=true',
        alt: "Poza cabinet Bocsa",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/bocsa6.jpg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/bocsa6.jpg?raw=true',
        alt: "Poza cabinet Bocsa",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/bocsa7.jpg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/bocsa7.jpg?raw=true',
        alt: "Poza cabinet Bocsa",
        thumbnailWidth: 115,
        thumbnailHeight: 125
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

      </div>

    </>
  )
}