import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const ImgStyles = styled.div``

const CloseBkImg = () => {
  return (
    <ImgStyles className="close-black">
      <StaticImage
        layout="fullWidth"
        src="../../images/close-rdr.png"
        alt="Junya"
        placeholder="none"
      />
    </ImgStyles>
  )
}

export default CloseBkImg
