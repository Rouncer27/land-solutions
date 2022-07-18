import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { ListStyles } from "./styles"

import TopLink from "./NavParts/TopLink"
import SubMenu from "./NavParts/SubMenu"

const getData = graphql`
  {
    contact: wp {
      acfOptionsMainMenu {
        mainMenu {
          contactTopPage {
            ... on WpPage {
              slug
            }
          }
          contactTopPageTitle
          contactTopPageIcon {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }

          contactSubOne {
            page {
              ... on WpPage {
                id
                slug
                title
                uri
              }
            }
            icon {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            subRequired
            subItems {
              item {
                ... on WpPage {
                  id
                  slug
                  title
                  uri
                }
              }
            }
          }

          contactSubTwo {
            page {
              ... on WpPage {
                id
                slug
                title
                uri
              }
            }
            icon {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            subRequired
            subItems {
              item {
                ... on WpPage {
                  id
                  slug
                  title
                  uri
                }
              }
            }
          }

          contactSubThree {
            page {
              ... on WpPage {
                id
                slug
                title
                uri
              }
            }
            icon {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            subRequired
            subItems {
              item {
                ... on WpPage {
                  id
                  slug
                  title
                  uri
                }
              }
            }
          }
        }
      }
    }
  }
`

const Contact = () => {
  const data = useStaticQuery(getData)
  const [isSubActive, setIsSubActive] = useState(false)
  const navData = data.contact.acfOptionsMainMenu.mainMenu
  const hasSub = navData.contactSubOne && navData.contactSubOne.length > 0
  const hasSubOne =
    navData.contactSubOne && navData.contactSubOne.length > 0
      ? navData.contactSubOne
      : null
  const hasSubTwo =
    navData.contactSubTwo && navData.contactSubTwo.length > 0
      ? navData.contactSubTwo
      : null
  const hasSubThree =
    navData.contactSubThree && navData.contactSubThree.length > 0
      ? navData.contactSubThree
      : null
  const handleIsActiveOn = () => {
    setIsSubActive(true)
  }

  const handleIsActiveOff = () => {
    setIsSubActive(false)
  }
  return (
    <StyledListItem
      onMouseEnter={handleIsActiveOn}
      onMouseLeave={handleIsActiveOff}
      onFocus={handleIsActiveOn}
    >
      <TopLink
        hasTopPage={navData.contactTopPage}
        hasSub={hasSub}
        slug={navData.contactTopPage ? navData.contactTopPage.slug : null}
        title={navData.contactTopPageTitle}
      />
      {hasSub && (
        <SubMenu
          isActive={isSubActive}
          subTitle="Contact"
          subTitleSlug={
            navData.contactTopPage ? navData.contactTopPage.slug : null
          }
          subIcon={navData.contactTopPageIcon}
          subMenuOne={hasSubOne}
          subMenuTwo={hasSubTwo}
          subMenuThree={hasSubThree}
        />
      )}
    </StyledListItem>
  )
}

const StyledListItem = styled.li`
  ${ListStyles};
`

export default Contact
