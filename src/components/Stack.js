import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const Stack = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          nodes {
            frontmatter {
              stacks
            }
          }
        }
      }
    `
  )
  const stacks = data.allMarkdownRemark.nodes.frontmatter

  const stackList = stacks.map((stack, index) => <li key={index}>{stack}</li>)

  return <ul>{stackList}</ul>
}

export default Stack
