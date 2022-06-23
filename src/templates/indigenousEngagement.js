import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageIntro from "../components/templates/shared/PageIntro"
import PageHeroFull from "../components/templates/shared/PageHeroFull"
import PageSimpleWysiwyg from "../components/templates/shared/PageSimpleWysiwyg"

const IndigenousEngagement = props => {
  const pageIntro = props.data.pageIntro.template.pageIndigenousEngagement
  const pageHeroFull = props.data.pageHeroFull.template.pageIndigenousEngagement
  const pageSimpleWysiwyg =
    props.data.pageSimpleWysiwyg.template.pageIndigenousEngagement

  return (
    <Layout>
      <Seo />
      <PageIntro data={pageIntro} />
      <PageHeroFull data={pageHeroFull} />
      <PageSimpleWysiwyg data={pageSimpleWysiwyg} />
    </Layout>
  )
}

export const indigenousEngagementTempQuery = graphql`
  query indigenousEngagementTempPage($id: String!) {
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
        ... on WpTemplate_IndigenousEngagement {
          pageIndigenousEngagement {
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

    pageHeroFull: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_IndigenousEngagement {
          pageIndigenousEngagement {
            pageFullHeroContent
            pageFullHeroImage {
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

    pageSimpleWysiwyg: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_IndigenousEngagement {
          pageIndigenousEngagement {
            pageSimpleWysiwygTitle
            pageSimpleWysiwygWysiwyg
          }
        }
      }
    }
  }
`

export default IndigenousEngagement
