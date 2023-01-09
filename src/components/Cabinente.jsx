import React from 'react';
import Cabinet from './Cabinet';

export default function Cabinete() {
  const cabinetTimisoaraData = {
    cabinetTimisoara: true,
    title: "Cabinet Timișoara",
    address: "Timișoara, Bulevardul Cetății, nr. 77",
    schedule: [
      {
        doctor: "Dr. Olariu Ioan",
        weekDay: "Luni",
        workHours: "15:00 - 17:00"
      },
      {
        doctor: "Dr. Christodorescu Ruxandra",
        weekDay: "Luni",
        workHours: "17:00 - 19:00"
      },
      {
        doctor: "Conf. Dr. Cozma Dragoș",
        weekDay: "Miercuri",
        workHours: "16:00 - 19:00"
      },
      {
        doctor: "Dr. Olariu Ioan",
        weekDay: "Vineri",
        workHours: "15:00 - 17:00"
      }

    ],
    appoinmentsPhoneNumbers: "0740 384 798, 0742 421 032",
    services: [
      { doctorName1: "Dr. Olariu Ioan / Dr. C. Ruxandra", title: "Consult cardiologic + EKG + Pulsoximetrie", ioan: "250 RON" },
      { title: "Consult cardiologic + Monitorizare Holter Ekg/24H", ioan: "400 RON" },
      { title: "Consult Cardiologic + Monitorizare Holter TA/24H", ioan: "400 RON" },
      { title: "Consult cardiologic + EKG +  Ecocardiografie Doppler/2D Color + Pulsoximetrie", ioan: "450 RON" },
      { title: "Consult cardiologic + EKG + Pulsoximetrie + Test de Efort Cardiovascular", ioan: "450 RON" },
      { title: "Consult cardiologic + Monitorizarea Holter EKG + TA/24H", ioan: "500 RON" },
      { title: "Consult cardiologic + EKG +  Ecocardiografie Doppler/2D Color + Pulsoximetrie + Test de Efort Cardiovascular", ioan: "650 RON" },
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
      { doctorName1: "Dr. Olariu Ioan", title: "Consult cardiologic + EKG + Pulsoximetrie", ioan: "250 RON" },
      { title: "Consult Cardiologic + Monitorizare Holter EKG/24H", ioan: "350 RON" },
      { title: "Consult Cardiologic + Monitorizare Holter TA/24H", ioan: "350 RON" },
      { title: "Consult Cardiologic + EKG + Ecocardiografie Doppler 2D color + Pulsoximetrie", ioan: "400 RON" },
      { title: "Consult Cardiologic + Monitorizare Holter TA + EKG/24H", ioan: "450 RON" },
      { title: "Consult Cardiologic + Test de efort cardiovascular", ioan: "450 RON" },
      { title: "Consult Cardiologic + EKG + Ecocardiografie Doppler 2D color + Pulsoximetrie + Test de Efort Cardiovascular", ioan: "650 RON" },
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
        <div
          style={{
            float: "left",
            maxWidth: 430 + "px",
          }}
        >
          <Cabinet
            {...cabinetTimisoaraData}
          />
        </div>

        <div
          style={{
            float: "right",
            maxWidth: 430 + "px",
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