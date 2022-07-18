import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { ListStyles } from "./styles"

import TopLink from "./NavParts/TopLink"
import SubMenu from "./NavParts/SubMenu"

const getData = graphql`
  {
    insights: wp {
      acfOptionsMainMenu {
        mainMenu {
          insightsTopPage {
            ... on WpPage {
              slug
            }
          }
          insightsTopPageTitle
          insightsTopPageIcon {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }

          insightsSubOne {
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

          insightsSubTwo {
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

          insightsSubThree {
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

const Insights = () => {
  const data = useStaticQuery(getData)
  const [isSubActive, setIsSubActive] = useState(false)
  const navData = data.insights.acfOptionsMainMenu.mainMenu
  const hasSub = navData.insightsSubOne && navData.insightsSubOne.length > 0
  const hasSubOne =
    navData.insightsSubOne && navData.insightsSubOne.length > 0
      ? navData.insightsSubOne
      : null
  const hasSubTwo =
    navData.insightsSubTwo && navData.insightsSubTwo.length > 0
      ? navData.insightsSubTwo
      : null
  const hasSubThree =
    navData.insightsSubThree && navData.insightsSubThree.length > 0
      ? navData.insightsSubThree
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
        hasTopPage={navData.insightsTopPage}
        hasSub={hasSub}
        slug={navData.insightsTopPage ? navData.insightsTopPage.slug : null}
        title={navData.insightsTopPageTitle}
      />
      {hasSub && (
        <SubMenu
          isActive={isSubActive}
          subTitle="Contact"
          subTitleSlug={
            navData.insightsTopPage ? navData.insightsTopPage.slug : null
          }
          subIcon={navData.insightsTopPageIcon}
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

export default Insights
