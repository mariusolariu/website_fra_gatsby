import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { CheckIcon } from "./Icons";

const CREDENTIALS = [
  { strong: true, text: "Medic Primar Cardiolog" },
  { strong: false, text: "Institutul de Boli Cardiovasculare Timișoara" },
  { strong: false, text: "Competență în Cardiologie Invazivă" },
  { strong: false, text: "Competență în Ecocardiografie" },
];

export default function About() {
  const data = useStaticQuery(graphql`
    query AboutPhotoQuery {
      file(relativePath: { eq: "doctors/dr_olariu.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const fluid = data.file.childImageSharp.fluid;

  return (
    <section className="section-banded">
      <div className="section-inner">
        <div className="about">
          <div className="about-photo">
            <Img fluid={fluid} alt="Portret Dr. Olariu Ioan" />
          </div>
          <div>
            <span className="eyebrow">Despre medic</span>
            <h2>Dr. Olariu Ioan</h2>
            <p>
              Medic primar cardiolog cu experiență vastă în tratamentul intervențional al bolilor
              cardiovasculare, dobândită la{" "}
              <strong>Institutul de Boli Cardiovasculare din Timișoara</strong>.
            </p>
            <ul className="creds">
              {CREDENTIALS.map((c, i) => (
                <li key={i}>
                  <span className="check">
                    <CheckIcon size={24} />
                  </span>
                  <span>{c.strong ? <strong>{c.text}</strong> : c.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
