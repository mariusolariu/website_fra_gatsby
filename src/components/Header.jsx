import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

export default function Header() {
  const headerImageData = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: {eq: "pageHeader.jpg"}) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `);

  return (
    <>
      <Img fluid={headerImageData.file.childImageSharp.fluid} alt="The website header"></Img>
      <h1 style={{ color: '#047FE0', textAlign: 'center' }}>Cabinet Cardiologie Dr. Olariu Ioan</h1>
    </>
  );
}
