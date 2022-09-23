import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/templates/shared/PageHero"
import ContentIcon from "../components/templates/shared/ContentIcon"
import LinkBlocks from "../components/templates/shared/LinkBlocks"
import QuoteHero from "../components/templates/shared/QuoteHero"

const ourTeam = props => {
  const seoInfo = props.data.seoInfo
  const hero = props.data.hero.template.ourTeam
  const contentIcon = props.data.contentIcon.template.ourTeam
  const linkBlocks = props.data.linkBlocks.template.ourTeam
  const quoteHero = props.data.quoteHero.template.ourTeam
  return (
    <Layout
      title={seoInfo.seoFields.swbThemeMetaTitle}
      description={seoInfo.seoFields.swbThemeDescription}
      //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
      location={props.location.pathname}
    >
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <PageHero data={hero} />
      <ContentIcon data={contentIcon} />
      <LinkBlocks data={linkBlocks} />
      <QuoteHero data={quoteHero} />
    </Layout>
  )
}

export const ourTeamTempQuery = graphql`
  query ourTeamTempPage($id: String!) {
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
        ... on WpTemplate_OurTeam {
          ourTeam {
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
        ... on WpTemplate_OurTeam {
          templateName
          ourTeam {
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

    linkBlocks: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_OurTeam {
          templateName
          ourTeam {
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

    quoteHero: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_OurTeam {
          templateName
          ourTeam {
            pageHeroQuoteAuthor
            pageHeroQuote
            pageHeroQuoteImage {
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

export default ourTeam
