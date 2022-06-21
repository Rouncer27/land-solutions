import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import HeroIntro from "../components/templates/sector/HeroIntro"
import ContentBlock from "../components/templates/sector/ContentBlock"
import NavLinks from "../components/templates/sector/NavLinks"
import NavLinksIcon from "../components/templates/sector/NavLinksIcon"
import SubSectionPicker from "../components/templates/sector/SubSections/SubSectionPicker"
import PageHero from "../components/templates/sector/PageHero"

const Sector = ({ data }) => {
  const sectorHeroIntro = data.sectorHeroIntro.sectors
  const contentBlock = data.contentBlock.sectors
  const navLinks = data.navLinks.sectors
  const navLinksIcons = data.navLinksIcons.sectors
  const subSections = data.subSections.sectors
  const pageHero = data.pageHero.sectors

  return (
    <Layout>
      <Seo />
      <HeroIntro data={sectorHeroIntro} title={data.sectorHeroIntro.title} />
      <ContentBlock data={contentBlock} />
      {navLinks.displaySectionNavigationLinks && <NavLinks data={navLinks} />}
      {navLinksIcons.displayNavigationLinksWithIcon && (
        <NavLinksIcon data={navLinksIcons} />
      )}
      {subSections.displaySectorSubSection && (
        <SubSectionPicker data={subSections} />
      )}
      {pageHero.displayPageHeroSection && <PageHero data={pageHero} />}
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

    navLinksIcons: wpSector(slug: { eq: $slug }) {
      sectors {
        displayNavigationLinksWithIcon
        navigationLinksWithIconIcon {
          altText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(width: 1000)
            }
          }
        }
        navigationLinksWithIconLinks {
          text
          slug
        }
      }
    }

    pageHero: wpSector(slug: { eq: $slug }) {
      sectors {
        displayPageHeroSection
        pageHeroSectionImage {
          altText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(width: 1000)
            }
          }
        }
        pageHeroSectionContent
        pageHeroSectionButtonText
        pageHeroSectionSlug
      }
    }

    subSections: wpSector(slug: { eq: $slug }) {
      sectors {
        displaySectorSubSection
        sectorSubSection {
          ... on WpSector_Sectors_SectorSubSection_SubSectionStyleOne {
            fieldGroupName
            bottomBoxContent
            bottomBoxSlug
            bottomBoxText
            content
            navigationTitle
            title
            navigationLinks {
              slug
              text
            }
            image {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            backgroundImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2000)
                }
              }
            }
          }
          ... on WpSector_Sectors_SectorSubSection_SubSectionStyleTwo {
            fieldGroupName
            bottomContent
            bottomTitle
            bottomTitleLink
            bottomTitleLinkSlug
            content
            title
            image {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
          }
          ... on WpSector_Sectors_SectorSubSection_SubSectionStyleThree {
            fieldGroupName
            bottomBoxButtonSlug
            bottomBoxButtonText
            bottomBoxTitle
            content
            downloadText
            fieldGroupName
            title
            pdfThumbnail {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            pdfFile {
              localFile {
                publicURL
              }
            }
            image {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
          }
        }
      }
    }

    pageHero: wpSector(slug: { eq: $slug }) {
      sectors {
        displayPageHeroSection
        pageHeroSectionImage {
          altText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(width: 1000)
            }
          }
        }
        pageHeroSectionContent
        pageHeroSectionButtonText
        pageHeroSectionSlug
      }
    }
  }
`

export default Sector
