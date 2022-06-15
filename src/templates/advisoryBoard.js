import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/templates/shared/PageHero"
import LinkBlocks from "../components/templates/shared/LinkBlocks"

const AdvisoryBoard = props => {
  const hero = props.data.hero.template.advisoryBoard
  const linkBlocks = props.data.linkBlocks.template.advisoryBoard
  return (
    <Layout>
      <Seo />
      <PageHero data={hero} />
      <LinkBlocks data={linkBlocks} />
    </Layout>
  )
}

export const advisoryBoardTempQuery = graphql`
  query advisoryBoardTempPage($id: String!) {
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

    hero: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_AdvisoryBoard {
          advisoryBoard {
            pageHeroIntroSubTitle
            pageHeroIntroTitle
            pageHeroIntroImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
          }
        }
      }
    }

    linkBlocks: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_AdvisoryBoard {
          templateName
          advisoryBoard {
            linkBlocks {
              butonSlug
              buttonText
              content
              title
              image {
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
        }
      }
    }
  }
`

export default AdvisoryBoard
