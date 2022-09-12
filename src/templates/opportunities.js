import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/templates/shared/PageHero"
import WysiwygIcon from "../components/templates/opportunities/WysiwygIconRepeater"
import ContentImage from "../components/templates/opportunities/ContentImage"
import WysiwygWithImage from "../components/templates/opportunities/WysiwygWithImage"
import PageHeroContained from "../components/templates/shared/PageHeroContained"
import ListLinks from "../components/templates/opportunities/ListLinks"

const Opportunities = props => {
  const seoInfo = props.data.seoInfo
  const hero = props?.data?.hero?.template?.pageOpportunities
  const wysiwygIcon =
    props?.data?.wysiwygIcon?.template?.pageOpportunities?.wysiwygWithIcon

  const links = props?.data?.links?.template?.pageOpportunities?.links
  const linksTitle = props?.data?.links?.template?.pageOpportunities?.linksTitle

  const linksTwo = props?.data?.linksTwo?.template?.pageOpportunities?.linksTwo
  const linksTwoTitle =
    props?.data?.linksTwo?.template?.pageOpportunities?.linksTitleTwo

  const contentImage = props?.data?.contentImage?.template?.pageOpportunities
  const wysiwygWithImage =
    props.data.wysiwygWithImage.template.pageOpportunities
  const pageHeroContained =
    props.data.pageHeroContained.template.pageOpportunities

  return (
    <Layout>
      <Seo />
      <PageHero data={hero} />
      <WysiwygIcon removepadding={true} data={wysiwygIcon} />
      <ListLinks bgcolor={false} data={links} title={linksTitle} />
      <ContentImage bgcolor={true} data={contentImage} />
      <ListLinks bgcolor={true} data={linksTwo} title={linksTwoTitle} />
      <WysiwygWithImage data={wysiwygWithImage} />
      <PageHeroContained data={pageHeroContained} />
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

    links: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Opportunities {
          pageOpportunities {
            linksTitle
            links {
              text
              url
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

    linksTwo: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Opportunities {
          pageOpportunities {
            linksTitleTwo
            linksTwo {
              text
              url
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
            wysiwygWithImageButtonRequired
            wysiwygWithImageButtonText
            wysiwygWithImageType
            wysiwygWithImageUrl
            wysiwygWithImageEmail
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

    pageHeroContained: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Opportunities {
          pageOpportunities {
            pageHeroContainedImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
            pageHeroContainedContent
            pageHeroContainedButtonText
            pageHeroContainedSlug
            pageHeroContainedSecondButtonRequired
            pageHeroContainedSecondButtonText
            pageHeroContainedSecondButtonType
            pageHeroContainedSecondButtonSlug
            pageHeroContainedSecondButtonUrl
          }
        }
      }
    }
  }
`

export default Opportunities
