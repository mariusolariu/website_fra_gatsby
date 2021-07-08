import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

export default function Header() {
  const headerImageData = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: {eq: "pageHeader.jpeg"}) {
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
      <p style={{ marginTop: "2.5em" }}></p>
    </>
  );
}

