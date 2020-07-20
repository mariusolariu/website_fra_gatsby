import React from 'react';
import Gallery from './Gallery';
import MyGallery from './MyGallery';

const photos = [
  {
    src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/descriereSlideshow/2_surgery.jpeg?raw=true',
    width: 0.5,
    height: 0.5
  },
  {
    src: 'https://github.com/mariusolariu/website_fra_gatsby/blob/master/src/images/descriereSlideshow/3_surgery.jpeg?raw=true',
    width: 1,
    height: 1
  }
];


const myRow = (what, info) => {
  return (
    <>
      <span style={{ color: "#000000" }}><strong> {what}: </strong> {info}  </span>
      <br />
    </>
  );
}

const tdStyle = {
  paddingTop: 0.5 + "em",
  paddingBottom: 0.5 + "em",
  textAlign: "left",
};

const greyBackground = {
  backgroundColor: "#dddddd",
}

const whiteBackground = {
  backgroundColor: "#ffffff"
}

export default function Cabinet({
  title,
  address,
  workingHours,
  appoinmentsPhoneNumbers,
  services,
  paddingTopTable
}) {

  return (
    <div
      style={{
        paddingTop: 2 + "em"
      }}
    >
      <h3 style={{
        textAlign: "center"
      }}>{title}</h3>
      {myRow('Adresa', address)}
      {myRow('Program', workingHours)}
      {myRow('Programări', appoinmentsPhoneNumbers)}

      <p style={{ paddingTop: paddingTopTable }}>  </p>
      <table style={{
        marginTop: 2 + "em",
        border: "1px solid #dddddd",
      }}>
        <tbody>
          <tr style={{ border: "1px solid #dddddd" }}>
            <th style={tdStyle}>
              Serviciu
            </th>
            <th style={tdStyle}>
              Preț
              </th>
          </tr>
          {
            services.map((service, index) => {
              return (
                <tr
                  key={`${index}`}
                  style={
                    (index % 2 === 0 ? greyBackground : whiteBackground)
                  }>
                  <td style={tdStyle}>{service.title}</td>
                  <td style={tdStyle}>  {service.price}</td>
                </tr>);
            })
          }
        </tbody>
      </table>
        <Gallery
          photos={photos}
          direction="row"
        />
    </div>
  )
}