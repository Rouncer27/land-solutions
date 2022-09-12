import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/templates/shared/PageHero"
import PageSimpleIntro from "../components/templates/news/PageSimpleIntro"
import Posts from "../components/templates/news/Posts"

const News = props => {
  const seoInfo = props.data.seoInfo
  const hero = props?.data?.hero?.template?.pageNews
  const pageIntro = props?.data?.pageIntro?.template?.pageNews
  return (
    <Layout>
      <Seo />
      <PageHero data={hero} />
      <PageSimpleIntro data={pageIntro} />
      <Posts />
    </Layout>
  )
}

export const newsTempQuery = graphql`
  query newsTempPage($id: String!) {
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
        ... on WpTemplate_News {
          pageNews {
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

    pageIntro: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_News {
          pageNews {
            pageSimpleIntroContent
          }
        }
      }
    }
  }
`

export default News
