import React from 'react';
import Cabinet from './Cabinet';

export default function Cabinete() {
  const cabinetBocsaData = {
    // needed for adding the prices only for Dr. Cozma
    cabinetTimisoara: false,
    title: "Cabinet Bocșa",
    address: "Bocșa, Str. Carpati, nr. 2, Bl. 2",
    schedule: [
      {
        doctor: "Dr. Olariu Ioan",
        weekDay: "Miercuri",
        workHours: "15:00 - 17:00"
      }
    ],
    appoinmentsPhoneNumbers: "0740 016 561, 0742 421 032",
    services: [
      { doctorName1: "Dr. Olariu Ioan", title: "Consult cardiologic + EKG + Pulsoximetrie", ioan: "300 RON" },
      { title: "Consult Cardiologic + Monitorizare Holter EKG/24H", ioan: "450 RON" },
      { title: "Consult Cardiologic + Monitorizare Holter TA/24H", ioan: "450 RON" },
      { title: "Consult Cardiologic + EKG + Ecocardiografie Doppler 2D color + Pulsoximetrie", ioan: "500 RON" },
      { title: "Consult Cardiologic + Monitorizare Holter TA + EKG/24H", ioan: "550 RON" },
      { title: "Consult Cardiologic + Test de efort cardiovascular", ioan: "550 RON" },
      { title: "Consult Cardiologic + EKG + Ecocardiografie Doppler 2D color + Pulsoximetrie + Test de Efort Cardiovascular", ioan: "750 RON" },
    ],
    paddingTopTable: 0 + "em",
    paddingBottomTable: 0.5 + "em",
    anchorId: 'bocsaMap',
    locationUrl: "https://g.page/CardiologieBocsa?share",
    images: [
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/pancarda.jpeg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/pancarda.jpeg?raw=true',
        alt: "Poza cabinet Bocsa",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: "https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/intrare.jpeg?raw=true",
        thumbnail: "https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/intrare.jpeg?raw=true",
        alt: "Poza cabinet Bocsa",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/sala_asteptare.jpg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/sala_asteptare.jpg?raw=true',
        alt: "Poza cabinet Bocsa",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/sala_asteptare_1.jpeg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/sala_asteptare_1.jpeg?raw=true',
        alt: "Poza cabinet Bocsa",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/sala_asteptare_2.jpeg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/sala_asteptare_2.jpeg?raw=true',
        alt: "Poza cabinet Bocsa",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/sala_asteptare_3.jpeg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/sala_asteptare_3.jpeg?raw=true',
        alt: "Poza cabinet Bocsa",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/cabinet.jpeg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/cabinet.jpeg?raw=true',
        alt: "Poza cabinet Bocsa",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/cabinet1.jpeg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/cabinet1.jpeg?raw=true',
        alt: "Poza cabinet Bocsa",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/cabinet2.jpeg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/cabinet2.jpeg?raw=true',
        alt: "Poza cabinet Bocsa",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      },
      {
        src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/cabinet3.jpeg?raw=true',
        thumbnail: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/cabinetBocsa/cabinet3.jpeg?raw=true',
        alt: "Poza cabinet Bocsa",
        thumbnailWidth: 115,
        thumbnailHeight: 125
      }
    ]
  }

  return (
    <>
      <div>
          <Cabinet
            {...cabinetBocsaData}
          />
      </div>

    </>
  )
}