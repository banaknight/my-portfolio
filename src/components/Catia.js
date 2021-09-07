import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import BgWhiteTop from "../images/white-paint-top.png"
import BgWhiteBottom from "../images/white-paint-bottom.png"

const Wrap = styled.div`
  position: relative;
  min-height: 100vh;
`
const BgColor = styled.div``
const List = styled.div`
  margin-top: 1000px;
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 clamp(1rem, calc((100vw - 1440px) / 2), calc((100vw - 1440px) / 2));
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.color.white};
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background-image: url(${BgWhiteTop});
    background-size: cover;
    background-repeat: no-repeat;
    transform: translateY(-100%) scale(-1, 1);
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background-image: url(${BgWhiteBottom});
    background-size: cover;
    background-repeat: no-repeat;
    transform: translateY(100%) scale(-1, 1);
  }
`
const Heading = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.$4};
  font-size: ${({ theme }) => theme.fontsize.heading};
`
const Info = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontsize.body};
`
const ImageWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.$3};
  @media ${({ theme }) => theme.breakpoint.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Catia = () => {
  return (
    <Wrap>
      <BgColor />
      <List>
        <Heading>Catia</Heading>
        <Info>学生時代にCATIAを用いて制作した３Dモデル</Info>
        <ImageWrap>
          <StaticImage src="../images/z.png" />
          <StaticImage src="../images/phone.png" />
          <StaticImage src="../images/mario.png" />
        </ImageWrap>
      </List>
    </Wrap>
  )
}

export default Catia
