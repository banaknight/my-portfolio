import React from "react"
import styled from "styled-components"

import Img from "../images/familia00.png"

const Wrapp = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${Img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
const Text = styled.h2`
  position: absolute;
  bottom: 2%;
  left: 2%;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontsize.superhero};
  font-family: ${({ theme }) => theme.font.hero};
  -webkit-text-stroke: 4px ${({ theme }) => theme.color.primary};
  @media ${({ theme }) => theme.breakpoint.mobile} {
    font-size: ${({ theme }) => theme.fontsize.superhero};
  }
`

const Footer = () => {
  return (
    <Wrapp>
      <Text>He has a family</Text>
    </Wrapp>
  )
}

export default Footer
