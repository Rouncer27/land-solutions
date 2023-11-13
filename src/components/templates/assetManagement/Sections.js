import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { B2Blue, BigWrapper, colors } from "../../../styles/helpers"
import scrollTo from "gatsby-plugin-smoothscroll"

import Wysiwyg from "./Sections/Wysiwyg"
import BoxLists from "./Sections/BoxLists"
import ImageWysiwyg from "./Sections/ImageWysiwyg"
import BoxLink from "./Sections/BoxLink"
import WysiwygLightTitles from "./Sections/WysiwygLightTitles"
import IconsRows from "./Sections/IconsRows"
import PageHero from "./Sections/PageHero"

const Sections = ({ data, location }) => {
  const [activeTab, setActiveTab] = useState(1)
  const handleChangeActiveTab = index => {
    setActiveTab(index)
  }

  useEffect(() => {
    const cameFrom = location.search.split("=")[1]

    const newActiveTab =
      cameFrom === undefined
        ? 1
        : cameFrom === "landaccess"
        ? 1
        : cameFrom === "acquisitionsdivestitures"
        ? 2
        : cameFrom === "recordsmanagement"
        ? 3
        : 1

    if (cameFrom) {
      setActiveTab(newActiveTab)
      scrollTo(`#tabssection`)
    }
  }, [])

  const noTabs = data.find(tab => tab.displayThisTab) ? true : false

  return (
    <StyledSection id="tabssection">
      <div className="wrapper">
        {noTabs && (
          <div className="tabs">
            {data.map((tab, index) => {
              if (!tab.displayThisTab) return null
              return (
                <TabStyled
                  activetab={index + 1 === activeTab}
                  id={tab.tabId ? tab.tabId : `Tab-${index + 1}`}
                  key={index}
                >
                  <button
                    onClick={() => {
                      handleChangeActiveTab(index + 1)
                    }}
                    type="button"
                  >
                    {tab.tabTitle ? tab.tabTitle : `Tab-${index + 1}`}
                  </button>
                </TabStyled>
              )
            })}
          </div>
        )}
      </div>
      <div className="tab-content">
        {data.map((section, index) => {
          return (
            <ContentWrapper
              activetab={index + 1 === activeTab}
              data-id={section.tabId}
              key={index}
            >
              {section.sections.map((section, index) => {
                if (!section.display) return null

                switch (section?.fieldGroupName) {
                  case "Template_AssetManagement_Pageassetmanagement_tabsContent_Sections_Wysiwyg":
                    return <Wysiwyg key={index} data={section} />
                  case "Template_AssetManagement_Pageassetmanagement_tabsContent_Sections_BoxLists":
                    return <BoxLists key={index} data={section} />
                  case "Template_AssetManagement_Pageassetmanagement_tabsContent_Sections_ImageWysiwyg":
                    return <ImageWysiwyg key={index} data={section} />
                  case "Template_AssetManagement_Pageassetmanagement_tabsContent_Sections_BoxLink":
                    return <BoxLink key={index} data={section} />
                  case "Template_AssetManagement_Pageassetmanagement_tabsContent_Sections_WysiwygLightTitles":
                    return <WysiwygLightTitles key={index} data={section} />
                  case "Template_AssetManagement_Pageassetmanagement_tabsContent_Sections_IconsRows":
                    return <IconsRows key={index} data={section} />
                  case "Template_AssetManagement_Pageassetmanagement_tabsContent_Sections_PageHero":
                    return <PageHero key={index} data={section} />
                  default:
                    return (
                      <p>Cannot find this component {section.fieldGroupName}</p>
                    )
                }
              })}
            </ContentWrapper>
          )
        })}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${BigWrapper};
  }

  .tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    border-bottom: 0.1rem solid ${colors.colorPrimary};
  }
`

const TabStyled = styled.div`
  button {
    ${B2Blue};
    margin: 0;
    padding: 1rem 2rem;
    margin: 1rem;
    border-top: 0.1rem solid ${colors.colorPrimary};
    border-right: 0.1rem solid ${colors.colorPrimary};
    border-bottom: 0.1rem solid ${colors.colorPrimary};
    border-left: 0.1rem solid ${colors.colorPrimary};
    background-color: ${props =>
      props.activetab ? colors.colorPrimary : colors.white};
    color: ${props => (props.activetab ? colors.white : colors.colorPrimary)};
    cursor: pointer;
    text-transform: uppercase;

    @media (min-width: 768px) {
      margin: auto 1rem;
      border-bottom: 0rem solid ${colors.colorPrimary};
    }
  }
`

const ContentWrapper = styled.div`
  display: ${props => (props.activetab ? "block" : "none")};
`

export default Sections
