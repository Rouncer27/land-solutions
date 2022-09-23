import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Intro from "../components/templates/allSectors/Intro"
import Connections from "../components/templates/allSectors/Connections"
import SectorsList from "../components/templates/allSectors/SectorsList"

const AllSectors = props => {
  const seoInfo = props.data.seoInfo
  const intro = props.data.intro.template.AllSector
  const displaySector = props.data.displaySector.template.AllSector
  const sectors = props.data.sectors.edges
  return (
    <Layout
      title={seoInfo.seoFields.swbThemeMetaTitle}
      description={seoInfo.seoFields.swbThemeDescription}
      //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
      location={props.location.pathname}
    >
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <Intro data={intro} />
      <Connections />
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

    sectors: allWpSector(sort: { order: DESC, fields: date }) {
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
