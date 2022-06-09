import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { ListStyles } from "./styles"

import TopLink from "./NavParts/TopLink"
import SubMenu from "./NavParts/SubMenu"

const getData = graphql`
  {
    ourStory: wp {
      acfOptionsMainMenu {
        mainMenu {
          ourStoryTopPage {
            ... on WpPage {
              slug
            }
          }
          ourStoryTopPageTitle
          ourStoryTopPageIcon {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }

          ourStorySubOne {
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

          ourStorySubTwo {
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

          ourStorySubThree {
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

const OurStory = () => {
  const data = useStaticQuery(getData)
  const [isSubActive, setIsSubActive] = useState(false)
  const navData = data.ourStory.acfOptionsMainMenu.mainMenu
  const hasSub = navData.ourStorySubOne && navData.ourStorySubOne.length > 0
  const hasSubOne =
    navData.ourStorySubOne && navData.ourStorySubOne.length > 0
      ? navData.ourStorySubOne
      : null
  const hasSubTwo =
    navData.ourStorySubTwo && navData.ourStorySubTwo.length > 0
      ? navData.ourStorySubTwo
      : null
  const hasSubThree =
    navData.ourStorySubThree && navData.ourStorySubThree.length > 0
      ? navData.ourStorySubThree
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
        hasTopPage={navData.ourStoryTopPage}
        hasSub={hasSub}
        slug={navData.ourStoryTopPage ? navData.ourStoryTopPage.slug : null}
        title={navData.ourStoryTopPageTitle}
      />

      {hasSub && (
        <SubMenu
          isActive={isSubActive}
          subTitle="Our Story"
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

export default OurStory
