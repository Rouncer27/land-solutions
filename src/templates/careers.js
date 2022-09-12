import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/templates/shared/PageHero"
import WysiwygIcon from "../components/templates/careers/WysiwygIconRepeater"
import ContentBlock from "../components/templates/home/ContentBlock"
import ImageStrip from "../components/templates/careers/ImageStrip"
import TeamTestimonials from "../components/templates/shared/TeamTestimonials"
import WysiwygWithImage from "../components/templates/careers/WysiwygWithImage"
import PageHeroQuote from "../components/templates/shared/PageHeroQuote"

const Careers = props => {
  const seoInfo = props.data.seoInfo
  const hero = props?.data?.hero?.template?.pageCareers
  const wysiwygIcon =
    props?.data?.wysiwygIcon?.template?.pageCareers?.wysiwygWithIcon
  const contentBlock = props?.data?.contentBlock?.template?.pageCareers
  const wysiwygIconTwo =
    props?.data?.wysiwygIconTwo?.template?.pageCareers?.wysiwygWithIconTwo
  const wysiwygIconThree =
    props?.data?.wysiwygIconThree?.template?.pageCareers?.wysiwygWithIconThree
  const imageStrip = props?.data?.imageStrip?.template?.pageCareers?.imageStrip
  const imageStripTwo =
    props?.data?.imageStripTwo?.template?.pageCareers?.imageStripTwo
  const teamTestimonialsDisplay =
    props.data.teamTestimonialsDisplay.template.pageCareers
  const teamTestimonials = props.data.teamTestimonials.edges
  const wysiwygWithImage = props.data.wysiwygWithImage.template.pageCareers
  const pageHeroQuote = props.data.pageHeroQuote.template.pageCareers
  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <PageHero data={hero} />
      <WysiwygIcon data={wysiwygIcon} />
      <ContentBlock displaybg={false} data={contentBlock} />
      <WysiwygIcon bgcolor={true} data={wysiwygIconTwo} />
      <ImageStrip bgcolor={true} data={imageStrip} />
      <TeamTestimonials
        data={teamTestimonialsDisplay}
        testimonials={teamTestimonials}
      />
      <WysiwygWithImage data={wysiwygWithImage} />
      <ImageStrip data={imageStripTwo} />
      <WysiwygIcon
        bgcolor={false}
        removepadding={true}
        data={wysiwygIconThree}
      />
      <PageHeroQuote data={pageHeroQuote} />
    </Layout>
  )
}

export const careersTempQuery = graphql`
  query careersTempPage($id: String!) {
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
        ... on WpTemplate_Careers {
          pageCareers {
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
        ... on WpTemplate_Careers {
          pageCareers {
            wysiwygWithIcon {
              mainTitle
              subTitle
              wysiwyg
              sectionId
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

    contentBlock: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Careers {
          pageCareers {
            contentBlockTitle
            contentBlockContent
            contentBlockButtonText
            contentBlockButtonSlug
          }
        }
      }
    }

    wysiwygIconTwo: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Careers {
          pageCareers {
            wysiwygWithIconTwo {
              mainTitle
              subTitle
              wysiwyg
              sectionId
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

    wysiwygIconThree: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Careers {
          pageCareers {
            wysiwygWithIconThree {
              mainTitle
              subTitle
              wysiwyg
              sectionId
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

    imageStrip: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Careers {
          pageCareers {
            imageStrip {
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

    imageStripTwo: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Careers {
          pageCareers {
            imageStripTwo {
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

    teamTestimonialsDisplay: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Careers {
          pageCareers {
            teamTestimonialsDisplay
            teamTestimonialsBackgroundImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2000)
                }
              }
            }
          }
        }
      }
    }

    teamTestimonials: allWpTeamTestimonial {
      edges {
        node {
          title
          testimonials {
            testimonialContent
          }
        }
      }
    }

    wysiwygWithImage: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Careers {
          pageCareers {
            wysiwygWithImageTitle
            wysiwygWithImageSubTitle
            wysiwygWithImageWysiwyg
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

    pageHeroQuote: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Careers {
          pageCareers {
            pageHeroCenterQuoteContent
            pageHeroCenterQuoteImage {
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
`

export default Careers
