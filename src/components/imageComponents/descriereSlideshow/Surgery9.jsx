import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Surgery9 = (params) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "descriereSlideshow/9_surgery_room.jpeg" }) {
        childImageSharp {
          fluid (maxWidth: 1000, maxHeight: 650, quality: 100) {
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

export default Surgery9
