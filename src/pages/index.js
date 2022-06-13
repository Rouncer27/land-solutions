import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Intro from "../components/templates/home/Intro"
import Hero from "../components/templates/home/Hero"
import WeAre from "../components/templates/home/WeAre"
import DirectYou from "../components/templates/home/DirectYou"
import ContentImage from "../components/templates/home/ContentImage"
import WeBelong from "../components/templates/home/WeBelong"

const IndexPage = props => {
  const { seoInfo } = props.data
  const intro = props?.data?.intro?.template?.homePage
  const hero = props?.data?.hero?.template?.homePage
  const weAre = props?.data?.weAre?.template?.homePage
  const directYou = props?.data?.directYou?.template?.homePage
  const contentImage = props?.data?.contentImage?.template?.homePage
  const weBelong = props?.data?.weBelong?.template?.homePage

  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <Intro data={intro} />
      <Hero data={hero} />
      <WeAre data={weAre} />
      <DirectYou data={directYou} />
      <ContentImage data={contentImage} />
      <WeBelong data={weBelong} />
    </Layout>
  )
}

export const homeQuery = graphql`
  {
    seoInfo: wpPage(slug: { eq: "home" }) {
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

    intro: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          templateName
          homePage {
            homeIntroButtonSlug
            homeIntroButtonText
            homeIntroContent
            homeIntroTitle
            homeIntroImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
          }
        }
      }
    }

    hero: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          templateName
          homePage {
            homeHeroTitle
            homeHeroParagraph
            homeHeroContent
            homeHeroImage {
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

    weAre: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          templateName
          homePage {
            weAreLandsolutionsContent
            weAreLandsolutionsSubTitle
            weAreLandsolutionsTitle
            weAreLandsolutionsImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            weAreLandsolutionsItems {
              title
              content
            }
          }
        }
      }
    }

    directYou: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          templateName
          homePage {
            directYouTitle
            directYouLinks {
              linkSlug
              linkText
            }
          }
        }
      }
    }

    contentImage: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          templateName
          homePage {
            homeContentWithLinkTitle
            homeContentWithLinkSubTitle
            homeContentWithLinkButtonText
            homeContentWithLinkButtonSlug
          }
        }
      }
    }

    weBelong: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          templateName
          homePage {
            belongLogos {
              url
              logo {
                altText
                sourceUrl
                localFile {
                  url
                  childImageSharp {
                    gatsbyImageData(width: 750)
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

export default IndexPage
