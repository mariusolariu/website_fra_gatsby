import React from 'react';
import Gallery from 'react-grid-gallery';

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

const centerTextStyle = {
  textAlign: "center"
};
export default function Cabinet({
  title,
  address,
  workingHours,
  appoinmentsPhoneNumbers,
  services,
  paddingTopTable,
  paddingBottomTable,
  images,
  locationUrl
}) {

  return (
    <div
      style={{
        paddingTop: 2 + "em"
      }}
    >
      <h3 style={centerTextStyle}>{title}</h3>
      {myRow('Adresa', address)}
      <a href={`${locationUrl}`} target="_blank" rel="noreferrer"> Vezi pe hartă adresa</a>
      <br />
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

      <p style={{ paddingBottom: paddingBottomTable }}>  </p>

      <h4 style={centerTextStyle}>Poze {title}:</h4>

      <Gallery
        images={images}
        enableImageSelection={false}
        backdropClosesModal={true}
        imageCountSeparator=" din "
        rowHeight={120}
        margin={5}
        showLightboxThumbnails
      />
    </div>
  )
}