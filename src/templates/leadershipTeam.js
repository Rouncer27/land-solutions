import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/templates/shared/PageHero"
import LeadershipTeam from "../components/templates/ourTeam/LeadershipTeam"
import LinkBlocks from "../components/templates/shared/LinkBlocks"

const leadershipTeam = props => {
  const seoInfo = props.data.seoInfo
  const hero = props.data.hero.template.leadershipTeam
  const leadershipTeam = props.data.leadershipTeam.edges
  const linkBlocks = props.data.linkBlocks.template.leadershipTeam
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
      <LeadershipTeam data={leadershipTeam} />
      <LinkBlocks data={linkBlocks} />
    </Layout>
  )
}

export const ourLeadershipTempQuery = graphql`
  query ourLeadershipTempPage($id: String!) {
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
        ... on WpTemplate_LeadershipTeam {
          leadershipTeam {
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

    leadershipTeam: allWpLeadershipTeam(sort: { fields: date, order: ASC }) {
      edges {
        node {
          title
          slug
          id
          postLeadershipTeam {
            lastName
            jobTitle
            firstName
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

    linkBlocks: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_LeadershipTeam {
          templateName
          leadershipTeam {
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

export default leadershipTeam
