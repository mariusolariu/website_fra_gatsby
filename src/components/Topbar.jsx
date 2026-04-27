import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { PhoneIcon } from "./Icons";
import AccessibilityMenu from "./AccessibilityMenu";

export default function Topbar() {
  const data = useStaticQuery(graphql`
    query TopbarAvatarQuery {
      file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 120
            quality: 72
            srcSetBreakpoints: [44, 52, 88, 104]
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const avatar = data.file.childImageSharp.fluid;

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a href="#main" className="brand" aria-label="Cabinet Cardiologie Dr. Olariu Ioan">
          <div className="brand-mark">
            <Img fluid={avatar} alt="" loading="eager" fadeIn={false} />
          </div>
          <div className="brand-text">
            <span className="b1">Dr. Olariu Ioan</span>
            <span className="b2">Cabinet de Cardiologie · Bocșa</span>
          </div>
        </a>
        <div className="topbar-cta">
          <AccessibilityMenu />
          <a
            href="tel:+40740016561"
            className="phone-pill"
            aria-label="Sunați pentru programare la 0740 016 561"
          >
            <span className="icon">
              <PhoneIcon size={20} />
            </span>
            Programări: 0740 016 561
          </a>
        </div>
      </div>
    </header>
  );
}
