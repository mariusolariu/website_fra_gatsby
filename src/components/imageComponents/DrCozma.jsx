import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DrCozma = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "descriereSlideshow/dr_cozma.jpeg" }) {
        childImageSharp  {
          fluid (maxWidth: 100, maxHeight: 100, quality: 100){
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default DrCozma
