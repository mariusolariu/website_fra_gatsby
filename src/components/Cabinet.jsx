import React from 'react';

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
    </div>
  )
}