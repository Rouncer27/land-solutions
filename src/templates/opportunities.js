import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/templates/shared/PageHero"
import WysiwygIcon from "../components/templates/shared/WysiwygIconRepeater"
import ContentImage from "../components/templates/opportunities/ContentImage"

const Opportunities = props => {
  console.log(props)
  const hero = props?.data?.hero?.template?.pageOpportunities
  const wysiwygIcon =
    props?.data?.wysiwygIcon?.template?.pageOpportunities?.wysiwygWithIcon

  const contentImage = props?.data?.contentImage?.template?.pageOpportunities

  return (
    <Layout>
      <Seo />
      <PageHero data={hero} />
      <WysiwygIcon data={wysiwygIcon} />
      <ContentImage data={contentImage} />
    </Layout>
  )
}

export const opportunitiesTempQuery = graphql`
  query opportunitiesTempPage($id: String!) {
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
        ... on WpTemplate_Opportunities {
          pageOpportunities {
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

    wysiwygIcon: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Opportunities {
          pageOpportunities {
            wysiwygWithIcon {
              mainTitle
              subTitle
              wysiwyg
              icon {
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

    contentImage: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Opportunities {
          pageOpportunities {
            contentWithImageContent
            contentWithImageTitle
            contentWithImageImage {
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

    wysiwygWithImage: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Opportunities {
          pageOpportunities {
            wysiwygWithImageTitle
            wysiwygWithImageSubTitle
            wysiwygWithImageWysiwyg
            wysiwygWithImageImage {
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

export default Opportunities
