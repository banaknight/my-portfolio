import React from "react"
import styled from "styled-components"

import BgWhiteTop from "../images/white-paint-top.png"
import BgWhiteBottom from "../images/white-paint-bottom.png"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const List = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing.$2};
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
    transform: translateY(-100%);
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
    transform: translateY(100%);
  }
`
const ListWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.$5};
  margin: ${({ theme }) => theme.spacing.lg} 0;
  padding: 0 ${({ theme }) => theme.spacing.$2};
  @media ${({ theme }) => theme.breakpoint.tablet} {
    grid-template-columns: 1fr 1fr;
    column-gap: ${({ theme }) => theme.spacing.$5};
  }
`
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Heading = styled.h3`
  font-size: ${({ theme }) => theme.fontsize.heading};
`
const Info = styled.p`
  margin: ${({ theme }) => theme.spacing.$4} 0;
`
const ListItem = styled.ul`
  display: flex;
  margin: ${({ theme }) => theme.spacing.$2} 0
    ${({ theme }) => theme.spacing.$5};
  list-style-type: none;
  li {
    position: relative;
    z-index: 10;
    padding: 0 ${({ theme }) => theme.spacing.$2};
    background: ${({ theme }) => theme.color.black};
    border-radius: 4px;
    line-height: 32px;
    text-align: center;
    color: ${({ theme }) => theme.color.white};
    font-weight: bold;
    :not(:first-child) {
      margin: 0 ${({ theme }) => theme.spacing.$1};
    }
  }
`
const Title = styled.h4`
  font-family: ${({ theme }) => theme.font.title};
`
const ProjectLink = styled.div`
  a {
    padding: 1rem ${({ theme }) => theme.spacing.$4};
    background: ${({ theme }) => theme.color.secondary};
    border-radius: 4px;
    color: ${({ theme }) => theme.color.black};
    font-family: ${({ theme }) => theme.font.title};
    box-shadow: ${({ theme }) => theme.shadow.shadow1};
    transition: 0.2s;
    :hover {
      box-shadow: ${({ theme }) => theme.shadow.shadow2};
    }
  }
`
const ImageWrap = styled.div``

const ProductsList = ({ products = [] }) => {
  return (
    <List>
      {products.map(product => {
        return (
          <ListWrap>
            <ContentWrap>
              <Heading>{product.frontmatter.title}</Heading>
              <Info>{product.frontmatter.info}</Info>
              <Title>Stacks</Title>
              <ListItem>
                {product.frontmatter.stacks.map(stack => {
                  return <li key={stack}>{stack}</li>
                })}
              </ListItem>
              <Title>Working On</Title>
              <ListItem>
                {product.frontmatter.workingsOn.map(workingOn => {
                  return <li key={workingOn}>{workingOn}</li>
                })}
              </ListItem>
              <ProjectLink>
                <Link className="project-link" to={product.frontmatter.url}>
                  Project Link
                </Link>
              </ProjectLink>
            </ContentWrap>
            <ImageWrap>
              <GatsbyImage
                image={getImage(product.frontmatter.image)}
                alt={product.frontmatter.title}
              />
            </ImageWrap>
          </ListWrap>
        )
      })}
    </List>
  )
}

export default ProductsList
