import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageIntro from "../components/templates/shared/PageIntro"

const Environmental = props => {
  const pageIntro = props.data.pageIntro.template.pageEnvironmental

  return (
    <Layout>
      <Seo />
      <PageIntro data={pageIntro} />
    </Layout>
  )
}

export const environmentalTempQuery = graphql`
  query environmentalTempPage($id: String!) {
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

    pageIntro: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Environmental {
          pageEnvironmental {
            pageIntroMainTitle
            pageIntroSubTitle
            pageIntroBlueContent
            pageIntroContent
            pageIntroLinkText
            pageIntroLinkSlug
            pageIntroIcon {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            pageIntroSideImage {
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

export default Environmental
