import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { PhoneIcon, MapPinIcon } from "./Icons";

export default function Hero() {
  const data = useStaticQuery(graphql`
    query HeroPhotoQuery {
      file(relativePath: { eq: "doctors/dr_olariu.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const fluid = data.file.childImageSharp.fluid;

  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <span className="eyebrow">Medic Primar Cardiolog</span>
          <h1>Sănătatea inimii dumneavoastră, în mâini bune.</h1>
          <p className="lead">
            Consultații cardiologice de specialitate la cabinetul din Bocșa. Programări simple,
            prin telefon.
          </p>
          <div className="cta-row">
            <a href="tel:+40740016561" className="btn btn-primary">
              <span className="icon">
                <PhoneIcon size={22} />
              </span>
              Sunați acum
            </a>
            <a href="#vizita" className="btn btn-secondary">
              <span className="icon">
                <MapPinIcon size={22} />
              </span>
              Vezi adresa și programul
            </a>
          </div>
        </div>
        <div className="hero-photo">
          <Img fluid={fluid} alt="Dr. Olariu Ioan, medic primar cardiolog" />
          <div className="caption">
            <div className="name">Dr. Olariu Ioan</div>
            <div className="role">Medic Primar Cardiolog</div>
          </div>
        </div>
      </div>
    </section>
  );
}
