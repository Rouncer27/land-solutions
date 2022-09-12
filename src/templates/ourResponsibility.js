import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/templates/shared/PageHero"
import ContentIcon from "../components/templates/ourResponsibility/ContentIcon"
import PdfUploader from "../components/templates/ourResponsibility/PdfUploader"
import Testimonials from "../components/templates/shared/Testimonials"
import ListIcons from "../components/templates/ourResponsibility/ListIcons"
import WysiwygImage from "../components/templates/ourResponsibility/WysiwygImage"
import SafetylLogos from "../components/templates/ourResponsibility/SafetylLogos"

const OurResponsibility = props => {
  const seoInfo = props.data.seoInfo
  const hero = props.data.hero.template.pageOurResponsibility
  const contentIcon = props.data.contentIcon.template.pageOurResponsibility
  const pdfUploader = props.data.pdfUploader.template.pageOurResponsibility
  const displayTest = props.data.displayTest.template.pageOurResponsibility
  const listIcons = props.data.listIcons.template.pageOurResponsibility
  const wysiwygImage = props.data.wysiwygImage.template.pageOurResponsibility
  const saftylLogos = props.data.saftylLogos.template.pageOurResponsibility

  return (
    <Layout>
      <Seo />
      <PageHero data={hero} />
      <ContentIcon data={contentIcon} />
      <PdfUploader data={pdfUploader} />
      <ListIcons data={listIcons} />
      <WysiwygImage data={wysiwygImage} />
      <SafetylLogos data={saftylLogos} />
      {displayTest.testimonialsDisplay && (
        <Testimonials
          data={displayTest}
          testimonials={props.data.testimonials.edges}
        />
      )}
    </Layout>
  )
}

export const ourResponsibilityTempQuery = graphql`
  query ourResponsibilityTempPage($id: String!) {
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
        ... on WpTemplate_OurResponsibility {
          pageOurResponsibility {
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
        ... on WpTemplate_OurResponsibility {
          pageOurResponsibility {
            contentIconContent
            contentIconButtonOneRequired
            contentIconButtonOneText
            contentIconButtonOneId
            contentIconButtonTwoRequired
            contentIconButtonTwoText
            contentIconButtonTwoId
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

    pdfUploader: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_OurResponsibility {
          pageOurResponsibility {
            pdfUploaderContentSectionId
            pdfUploaderContentButtonText
            pdfUploaderContentContent
            pdfUploaderContentDownloadTitle
            pdfUploaderContentSubTitle
            pdfUploaderContentTitle
            pdfUploaderContentImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            pdfUploaderContentPdf {
              localFile {
                publicURL
                url
              }
            }
            pdfUploaderContentThumbnail {
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

    displayTest: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_OurResponsibility {
          pageOurResponsibility {
            testimonialsDisplay
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

    listIcons: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_OurResponsibility {
          pageOurResponsibility {
            listWithIcons {
              content
              linkRequired
              linkSlug
              linkText
              title
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

    wysiwygImage: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_OurResponsibility {
          pageOurResponsibility {
            wysiwygWithImageId
            wysiwygWithImageContentUnderImage
            wysiwygWithImageSubTitle
            wysiwygWithImageTitle
            wysiwygWithImageWysiwyg
            wysiwygWithImageImage {
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

    saftylLogos: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_OurResponsibility {
          pageOurResponsibility {
            safetyOrganizations {
              url
              logo {
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

export default OurResponsibility
