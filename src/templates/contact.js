import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/templates/shared/PageHero"
import ContactInfo from "../components/templates/contact/ContactInfo"
import ContactForm from "../components/templates/contact/ContactForm"
import LinkListBlock from "../components/templates/contact/LinkListBlock"

const Contact = props => {
  const hero = props?.data?.hero?.template?.pageContact
  const contactInfo = props?.data?.contactInfo?.template?.pageContact
  const contactForm = props?.data?.contactForm?.template?.pageContact
  const linkListBlock = props?.data?.linkListBlock?.template?.pageContact

  return (
    <Layout>
      <Seo />
      <PageHero data={hero} />
      <ContactInfo data={contactInfo} />
      <ContactForm data={contactForm} />
      <LinkListBlock data={linkListBlock} />
    </Layout>
  )
}

export const contactTempQuery = graphql`
  query contactTempPage($id: String!) {
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
        ... on WpTemplate_Contact {
          pageContact {
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

    contactInfo: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Contact {
          pageContact {
            pageContactInformationTitle
            pageContactInformationContent
            pageContactInformationDisplaySocialLinks
            pageContactInformationLogo {
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

    contactForm: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Contact {
          pageContact {
            pageContactFormContent
            pageContactFormContentFormId
          }
        }
      }
    }

    linkListBlock: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Contact {
          pageContact {
            pageListBesideBlockTitle
            pageListBesideBlockBlockTitle
            pageListBesideBlockBlockContent
            pageListBesideBlockBlockButtonText
            pageListBesideBlockBlockButtonSlug
            pageListBesideBlockLinkList {
              text
              slug
            }
            pageListBesideBlockImage {
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
  }
`

export default Contact
