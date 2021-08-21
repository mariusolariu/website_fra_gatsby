import React from 'react';

// TODO: fixme
export default function Cabinet(array) {

  let elementKeys = Object.keys(array[0]);


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


  return (
    <tbody>
      {
        array.map((element, index) => (
          <tr
            key={`${index}`}
            style={
              (index % 2 === 0 ? greyBackground : whiteBackground)
            }
          >
            <td style={tdStyle}>{element[elementKeys[0]]}</td>
            <td style={tdStyle}>{element[elementKeys[1]]}</td>
            <td style={tdStyle}>{element[elementKeys[2]]}</td>
          </tr>
        ))
      }

    </tbody>
  );

}