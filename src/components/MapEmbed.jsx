import React from "react";

const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11211.816667956942!2d21.694567214128103!3d45.369919918273474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474fd9446ce8b2c1%3A0x4972f9adc2aa9c78!2sOLARIU%20MED%20CARDIOLOGIE-BOCSA!5e0!3m2!1sen!2suk!4v1648983785697!5m2!1sen!2suk";

export default function MapEmbed() {
  return (
    <section className="section section-tight" id="harta">
      <div className="map-wrap">
        <iframe
          src={MAP_URL}
          title="Harta cabinetului din Bocșa"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
