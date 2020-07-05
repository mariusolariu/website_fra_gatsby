import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

export default function Slideshow() {
  const drOl = useStaticQuery(graphql`
  query MyQueryTwo {
    file(relativePath: {eq: "descriereSlideshow/1_drOlariu.jpeg"}) {
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
    <div style={{ maxWidth: 400 + "px", maxHeight: 400 + "px" }}>
      <Img fluid={drOl.file.childImageSharp.fluid} alt="The website header"></Img>
    </div>
  );
}
