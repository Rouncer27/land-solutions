import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/templates/shared/PageHero"
import ContentIcon from "../components/templates/shared/ContentIcon"

const OurResponsibility = props => {
  const hero = props.data.hero.template.pageOurResponsibility
  const contentIcon = props.data.contentIcon.template.pageOurResponsibility
  return (
    <Layout>
      <Seo />
      <PageHero data={hero} />
      <ContentIcon data={contentIcon} />
    </Layout>
  )
}

export const ourResponsibilityTempQuery = graphql`
  query ourResponsibilityTempPage($id: String!) {
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
        ... on WpTemplate_OurResponsibility {
          pageOurResponsibility {
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

    contentIcon: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_OurResponsibility {
          pageOurResponsibility {
            contentIconContent
            contentIconImage {
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
`

export default OurResponsibility
