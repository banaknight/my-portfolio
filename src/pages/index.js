import React from "react"

import styled from "styled-components"
import AllProducts from "../components/AllProducts"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import CloseYeImg from "../components/Image/CloseYeImg"

import Img from "../images/paper-rdr.jpg"

const Home = styled.div`
  position: relative;
  height: 100vh;
  .close-yello {
    position: fixed;
    left: 20%;
    z-index: -60;
    width: 100%;
    height: 100vh;
  }
`
const BgColor = styled.div`
  background: ${({ theme }) => theme.color.primary};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -100;
`

const BgImg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
  mix-blend-mode: multiply;
  img {
    width: 100%;
    height: 100%;
  }
`

const Index = () => {
  return (
    <Home>
      <BgColor />
      <BgImg />
      <CloseYeImg />
      <Hero />
      <AllProducts />
      <Footer />
    </Home>
  )
}

export default Index
