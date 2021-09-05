import React from "react"
import styled from "styled-components"
import CloseBkImg from "./Image/CloseBkImg"
import MyRdrImg from "./Image/MyRdrImg"

const HeroWrapper = styled.div`
  width: 100%;
  height: calc(100vh + 200px);
  padding: 0 ${({ theme }) => theme.spacing.$2};
  .close-black {
    position: fixed;
    left: -10%;
    z-index: -60;
    width: 70%;
    img {
      filter: brightness(0%);
      height: 100%;
      transform: scale(-1, 1);
    }
  }
`
const HeroBg = styled.div``
const HeroText = styled.h2`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontsize.superhero};
  font-family: ${({ theme }) => theme.font.hero};
  -webkit-text-stroke: 4px white;
  @media ${({ theme }) => theme.breakpoint.mobile} {
    font-size: ${({ theme }) => theme.fontsize.superhero};
  }
`
const MyName = styled.span`
  color: ${({ theme }) => theme.color.white};
  -webkit-text-stroke: 4px ${({ theme }) => theme.color.black};
`

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroBg />
      <MyRdrImg />
      <CloseBkImg />
      <HeroText>
        His name's
        <br />
        <MyName>Junya Mochizuki</MyName>
      </HeroText>
    </HeroWrapper>
  )
}

export default Hero
