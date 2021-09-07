import React from "react"
import styled from "styled-components"

import BgWhiteTop from "../images/white-paint-top.png"
import BgWhiteBottom from "../images/white-paint-bottom.png"

const Wrap = styled.div`
  position: relative;
  height: 100vh;
`

const BgColor = styled.div``
const List = styled.div`
  margin-top: 1000px;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing.$2};
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.color.white};
  @media ${({ theme }) => theme.breakpoint.mobile} {
    padding: 0 calc((100vw - 1440px) / 2);
  }
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

const Future = () => {
  return (
    <Wrap>
      <BgColor />
      <List></List>
    </Wrap>
  )
}

export default Future
