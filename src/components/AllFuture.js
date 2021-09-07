import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Future from "./Future"

const query = graphql`
  {
    allDataJson {
      nodes {
        image {
          src {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const AllFuture = () => {
  const data = useStaticQuery(query)
  const future = data.allDataJson.nodes
  return (
    <section>
      <Future future={future} />
    </section>
  )
}

export default AllFuture
