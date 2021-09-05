import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const ImgStyles = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -50;
  height: 100vh;
  img {
    height: calc(100vh + 20px);
  }
`

const MyRdrImg = () => {
  return (
    <ImgStyles>
      <StaticImage
        src="../../images/rdr.png"
        alt="Junya"
        placeholder="Traced SVG"
        fit="cover"
      />
    </ImgStyles>
  )
}

export default MyRdrImg
