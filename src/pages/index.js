import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Intro from "../components/templates/home/Intro"
import Hero from "../components/templates/home/Hero"
import WeAre from "../components/templates/home/WeAre"
import DirectYou from "../components/templates/home/DirectYou"
import SectorsIntro from "../components/templates/shared/SectorsIntro"
import ContentImage from "../components/templates/home/ContentImage"
import ContentBlock from "../components/templates/home/ContentBlock"
import Testimonials from "../components/templates/shared/Testimonials"
import WeBelong from "../components/templates/home/WeBelong"

import Letter from "../components/templates/shared/Letters"

const IndexPage = props => {
  const { seoInfo } = props.data
  const intro = props?.data?.intro?.template?.homePage
  const hero = props?.data?.hero?.template?.homePage
  const weAre = props?.data?.weAre?.template?.homePage
  const directYou = props?.data?.directYou?.template?.homePage
  const displaySectors = props?.data?.displaySectors?.template?.homePage
  const contentImage = props?.data?.contentImage?.template?.homePage
  const contentBlock = props?.data?.contentBlock?.template?.homePage
  const displayTestimonials =
    props?.data?.displayTestimonials?.template?.homePage
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
      {displaySectors.displaySectors && (
        <SectorsIntro sectors={props.data.sectors.edges} />
      )}
      <ContentImage data={contentImage} />
      <ContentBlock data={contentBlock} />
      {displayTestimonials.displayTestimonials && (
        <Testimonials
          data={displayTestimonials}
          testimonials={props.data.testimonials.edges}
        />
      )}
      <WeBelong data={weBelong} />
      <Letter />
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

    displaySectors: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          templateName
          homePage {
            displaySectors
          }
        }
      }
    }

    sectors: allWpSector {
      edges {
        node {
          title
          slug
          sectors {
            excerptContentImageTitle
            excerptContentIntro
            sectorLetter
            excerptContentImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1750)
                }
              }
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

    contentBlock: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          templateName
          homePage {
            contentBlockTitle
            contentBlockContent
            contentBlockButtonText
            contentBlockButtonSlug
          }
        }
      }
    }

    displayTestimonials: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          templateName
          homePage {
            displayTestimonials
            displayTestimonialsBackgroundImage {
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

    testimonials: allWpTestimonial {
      edges {
        node {
          title
          testimonials {
            testimonialContent
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
