import React from "react"
import styled from "styled-components"

const LayoutStyles = styled.div``

const Layout = ({ children }) => {
  return (
    <LayoutStyles>
      <main>{children}</main>
    </LayoutStyles>
  )
}

export default Layout
