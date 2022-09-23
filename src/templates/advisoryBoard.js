import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/templates/shared/PageHero"
import ContentIcon from "../components/templates/shared/ContentIcon"
import Members from "../components/templates/advisoryBoard/Members"
import LinkBlocks from "../components/templates/shared/LinkBlocks"

const AdvisoryBoard = props => {
  const seoInfo = props.data.seoInfo
  const hero = props.data.hero.template.advisoryBoard
  const contentIcon = props.data.contentIcon.template.advisoryBoard
  const members = props.data.members.edges
  const linkBlocks = props.data.linkBlocks.template.advisoryBoard
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
      <Members data={members} />
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

    contentIcon: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_AdvisoryBoard {
          templateName
          advisoryBoard {
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

    members: allWpAdvisoryBoardMember(sort: { order: ASC, fields: date }) {
      edges {
        node {
          advisoryBoardPost {
            bioContent
            bioImage {
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
          title
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
