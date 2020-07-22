import React from 'react';

export default function GoogleMap({ url, city, anchorId }) {

  return (
    <div style={{ paddingTop: 3 + "em" }}>
      <p id={`${anchorId}`}><strong>Locația pe hartă a cabinetului din {city}:</strong></p>
      <iframe
        style={{
          border: 0,
        }}
        tabindex="0"
        src={`${url}`}
        width="100%"
        height="450"
        frameborder="0"
        allowfullscreen="allowfullscreen"
        aria-hidden="false">
      </iframe>
    </div>
  )
}