import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/templates/shared/PageHero"

const Contact = props => {
  const hero = props?.data?.hero?.template?.pageContact
  return (
    <Layout>
      <Seo />
      <PageHero data={hero} />
    </Layout>
  )
}

export const contactTempQuery = graphql`
  query contactTempPage($id: String!) {
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
        ... on WpTemplate_Contact {
          pageContact {
            pageHeroIntroSubTitle
            pageHeroIntroTitle
            pageHeroIntroContent
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
  }
`

export default Contact
