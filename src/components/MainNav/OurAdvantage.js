import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { ListStyles } from "./styles"

import TopLink from "./NavParts/TopLink"
import SubMenu from "./NavParts/SubMenu"

const getData = graphql`
  {
    ourAdvantage: wp {
      acfOptionsMainMenu {
        mainMenu {
          ourAdvantageTopPage {
            ... on WpPage {
              slug
            }
          }
          ourAdvantageTopPageTitle
          ourAdvantageTopPageIcon {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }

          ourAdvantageSubOne {
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

          ourAdvantageSubTwo {
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

          ourAdvantageSubThree {
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

const OurAdvantage = () => {
  const data = useStaticQuery(getData)
  const [isSubActive, setIsSubActive] = useState(false)
  const navData = data.ourAdvantage.acfOptionsMainMenu.mainMenu
  const hasSub =
    navData.ourAdvantageSubOne && navData.ourAdvantageSubOne.length > 0
  const hasSubOne =
    navData.ourAdvantageSubOne && navData.ourAdvantageSubOne.length > 0
      ? navData.ourAdvantageSubOne
      : null
  const hasSubTwo =
    navData.ourAdvantageSubTwo && navData.ourAdvantageSubTwo.length > 0
      ? navData.ourAdvantageSubTwo
      : null
  const hasSubThree =
    navData.ourAdvantageSubThree && navData.ourAdvantageSubThree.length > 0
      ? navData.ourAdvantageSubThree
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
        hasTopPage={navData.ourAdvantageTopPage}
        hasSub={hasSub}
        slug={
          navData.ourAdvantageTopPage ? navData.ourAdvantageTopPage.slug : null
        }
        title={navData.ourAdvantageTopPageTitle}
      />
      {hasSub && (
        <SubMenu
          isActive={isSubActive}
          subTitle="Our Advantage"
          subTitleSlug={
            navData.ourAdvantageTopPage
              ? navData.ourAdvantageTopPage.slug
              : null
          }
          subIcon={navData.ourAdvantageTopPageIcon}
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

export default OurAdvantage
