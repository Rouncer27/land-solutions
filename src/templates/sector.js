import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import HeroIntro from "../components/templates/sector/HeroIntro"
import ContentBlock from "../components/templates/sector/ContentBlock"
import NavLinks from "../components/templates/sector/NavLinks"

const Sector = ({ data }) => {
  const sectorHeroIntro = data.sectorHeroIntro.sectors
  const contentBlock = data.contentBlock.sectors

  const navLinks = data.navLinks.sectors

  console.log("navLinks: ", navLinks)

  return (
    <Layout>
      <Seo />
      <HeroIntro data={sectorHeroIntro} title={data.sectorHeroIntro.title} />
      <ContentBlock data={contentBlock} />
      {navLinks.displaySectionNavigationLinks && <NavLinks data={navLinks} />}
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

    navLinks: wpSector(slug: { eq: $slug }) {
      sectors {
        displaySectionNavigationLinks
        sectionNavigationLinksTitle
        sectionNavigationLinks {
          text
          slug
        }
      }
    }
  }
`

export default Sector
