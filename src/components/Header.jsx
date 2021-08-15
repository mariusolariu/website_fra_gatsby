import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

export default function Header() {
  const headerImageData = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: {eq: "olariu_med_logo_header.png"}) {
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
    </>
  );
}

