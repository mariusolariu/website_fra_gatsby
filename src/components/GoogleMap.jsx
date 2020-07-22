import React from 'react';

export default function GoogleMap({ url, city, anchorId }) {

  return (
    <div style={{ paddingTop: 3 + "em" }}>
      <p id={`${anchorId}`}><strong>Locația pe hartă a cabinetului din {city}:</strong></p>
      <iframe
        style={{
          border: 0,
        }}
        title={`Locația pe hartă a cabinetului din ${city}`}
        src={`${url}`}
        width="100%"
        height="450"
        frameBorder="0"
        allowFullScreen="allowFullScreen"
        aria-hidden="false">
      </iframe>
    </div>
  )
}