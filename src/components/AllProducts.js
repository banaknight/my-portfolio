import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ProductsList from "./Product"

const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                transformOptions: { cropFocus: CENTER }
                layout: FULL_WIDTH
              )
            }
          }
          info
          stacks
          title
          workingsOn
          url
        }
      }
    }
  }
`

const AllProducts = () => {
  const data = useStaticQuery(query)
  const products = data.allMarkdownRemark.nodes
  return (
    <section>
      <ProductsList products={products} />
    </section>
  )
}

export default AllProducts
