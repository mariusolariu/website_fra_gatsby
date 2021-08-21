import React from 'react';
import Gallery from 'react-grid-gallery';
import FormattedTableBody from './utils/FormattedTableBody';

const myRow = (what, info) => {
  return (
    <>
      <span style={{ color: "#000000" }}><strong> {what}: </strong> {info}  </span>
      <br />
    </>
  );
}

const tableStyle = {
  marginTop: 2 + "em",
  marginBottom: 1 + "em",
  border: "1px solid #dddddd",
  "table-layout": "auto",
  "width": "100%",
}

const tableRowStyle = { border: "1px solid #dddddd" };

const spaceUnder = {
  "padding-bottom": "0.75em"
};

const tableWithPricesCozma = (isCabinetTimisoaraData) => {

  if (isCabinetTimisoaraData) {
    return <table style={tableStyle}>
      <tbody>
        <tr style={tableRowStyle}>
          <th colspan={2} style={spaceUnder}> Conf. Dr. Dragoș Cozma - Servicii și tarife </th>
        </tr>
        <tr style={greyBackground}>
          <td>Consult cardiologic</td>
          <td>500 RON</td>
        </tr>
      </tbody>
    </table>
  }

  return <></>;
}

const tdStyle = {
  paddingTop: 0.5 + "em",
  paddingRight: 0.5 + "em",
  paddingLeft: 0.5 + "em",
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
  cabinetTimisoara,
  title,
  address,
  schedule,
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
      <table style={tableStyle}>
        {
          <tbody>
            <thead style={{ colspan: "3" }}><th>Program</th></thead>
            {schedule.map((workDay, index) => (
              <tr
                key={`${index}`}
                style={
                  (index % 2 === 0 ? greyBackground : whiteBackground)
                }
              >
                <td style={tdStyle}>{workDay.weekDay}</td>
                <td style={tdStyle}>{workDay.doctor}</td>
                <td style={tdStyle}>{workDay.workHours}</td>
              </tr>

            ))
            }
          </tbody>
        }
      </table>
      {myRow('Programări', appoinmentsPhoneNumbers)}

      <p style={{ paddingTop: paddingTopTable }}>  </p>
      <table style={tableStyle}>
        <tbody>
          <tr style={tableRowStyle}>
            <th>
              Servicii și tarife
            </th>
            <th style={tdStyle}>
              Dr. Olariu Ioan
            </th>
            <th style={tdStyle}>
              Dr. Lucuța Lavinia
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
                  <td style={tdStyle}>{service.ioan}</td>
                  <td style={tdStyle}>{service.lucuta}</td>
                </tr>);
            })
          }
        </tbody>
      </table>

      {tableWithPricesCozma(cabinetTimisoara)}

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