import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/templates/shared/PageHero"
import ContentIcon from "../components/templates/shared/ContentIcon"
import WysiwygIcon from "../components/templates/ourDifference/WysiwygIcon"
import IconGraphic from "../components/templates/ourDifference/IconGraphic"
import styled from "styled-components"

const ourDifference = props => {
  const hero = props.data.hero.template.pageOurDifference
  const contentIcon = props.data.contentIcon.template.pageOurDifference
  const wysiwygIcon = props.data.wysiwygIcon.template.pageOurDifference
  return (
    <Layout>
      <Seo />
      <PageHero data={hero} />
      <StyledDiv>
        <ContentIcon data={contentIcon} />
        <IconGraphic />
        <WysiwygIcon data={wysiwygIcon} />
      </StyledDiv>
    </Layout>
  )
}

const StyledDiv = styled.div`
  background-color: rgba(157, 181, 148, 0.1);
`

export const ourDifferenceTempQuery = graphql`
  query ourDifferenceTempPage($id: String!) {
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
        ... on WpTemplate_OurDifference {
          pageOurDifference {
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
        ... on WpTemplate_OurDifference {
          pageOurDifference {
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

    wysiwygIcon: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_OurDifference {
          pageOurDifference {
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
  }
`

export default ourDifference
