import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import HeroIntro from "../components/templates/sector/HeroIntro"
import ContentBlock from "../components/templates/sector/ContentBlock"

const Sector = ({ data }) => {
  console.log("Sector: ", data)

  const sectorHeroIntro = data.sectorHeroIntro.sectors
  const contentBlock = data.contentBlock.sectors

  return (
    <Layout>
      <Seo />
      <HeroIntro data={sectorHeroIntro} title={data.sectorHeroIntro.title} />
      <ContentBlock data={contentBlock} />
    </Layout>
  )
}

export const query = graphql`
  query singleSectorQuery($slug: String!) {
    seoInfo: wpSector(slug: { eq: $slug }) {
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

    sectorHeroIntro: wpSector(slug: { eq: $slug }) {
      title
      sectors {
        sectorHeroSubTitle
        sectorHeroLetter
        sectorHeroContent
        sectorHeroIcon {
          altText
          sourceUrl
          localFile {
            url
            childImageSharp {
              gatsbyImageData(width: 1000)
            }
          }
        }
        sectorHeroImage {
          altText
          sourceUrl
          localFile {
            url
            childImageSharp {
              gatsbyImageData(width: 1000)
            }
          }
        }
      }
    }

    contentBlock: wpSector(slug: { eq: $slug }) {
      sectors {
        sectorContentBlockContentLeft
        sectorContentBlockWysiwyg
      }
    }
  }
`

export default Sector
