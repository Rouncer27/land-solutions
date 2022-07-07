import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Intro from "../components/templates/allSectors/Intro"
import SectorsList from "../components/templates/allSectors/SectorsList"

const AllSectors = props => {
  console.log("AllSectors: ", props.data)
  const intro = props.data.intro.template.AllSector
  const displaySector = props.data.displaySector.template.AllSector
  const sectors = props.data.sectors.edges
  return (
    <Layout>
      <Seo />
      <Intro data={intro} />
      <SectorsList data={displaySector} sectors={sectors} />
    </Layout>
  )
}

export const allSectorsTempQuery = graphql`
  query allSectorsTempPage($id: String!) {
    seoInfo: wpPage(id: { eq: $id }) {
      seoFields {
        swbThemeDescription
        swbThemeMetaTitle
        swbThemeImage {
          localFile {
            relativePath
          }
        }
      }
    }

    intro: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_AllSectors {
          AllSector {
            allSectorIntroTitle
            allSectorIntroSubTitle
            allSectorIntroIcon {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 750)
                }
              }
            }
            allSectorIntroLargeContent
            allSectorIntroContent
          }
        }
      }
    }

    displaySector: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_AllSectors {
          AllSector {
            displaySectorsList
          }
        }
      }
    }

    sectors: allWpSector {
      edges {
        node {
          id
          title
          slug
          sectors {
            navigationIcon {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 750)
                }
              }
            }
          }
        }
      }
    }
  }
`

export default AllSectors
