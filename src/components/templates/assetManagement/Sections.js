import React, { useState } from "react"
import styled from "styled-components"
import { B2Blue, BigWrapper, colors } from "../../../styles/helpers"

import Wysiwyg from "./Sections/Wysiwyg"
import BoxLists from "./Sections/BoxLists"
import ImageWysiwyg from "./Sections/ImageWysiwyg"
import BoxLink from "./Sections/BoxLink"
import WysiwygLightTitles from "./Sections/WysiwygLightTitles"
import IconsRows from "./Sections/IconsRows"
import PageHero from "./Sections/PageHero"

const Sections = ({ data }) => {
  const [activeTab, setActiveTab] = useState(1)
  const handleChangeActiveTab = index => {
    setActiveTab(index)
  }
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="tabs">
          {data.map((tab, index) => {
            return (
              <TabStyled
                activetab={index + 1 === activeTab}
                id={tab.tabId}
                key={index}
              >
                <button
                  onClick={() => {
                    handleChangeActiveTab(index + 1)
                  }}
                  type="button"
                >
                  {tab.tabTitle}
                </button>
              </TabStyled>
            )
          })}
        </div>
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
    margin: auto 1rem;
    border-top: 0.1rem solid ${colors.colorPrimary};
    border-right: 0.1rem solid ${colors.colorPrimary};
    border-bottom: 0rem solid ${colors.colorPrimary};
    border-left: 0.1rem solid ${colors.colorPrimary};
    background-color: ${props =>
      props.activetab ? colors.colorPrimary : colors.white};
    color: ${props => (props.activetab ? colors.white : colors.colorPrimary)};
    cursor: pointer;
    text-transform: uppercase;
  }
`

const ContentWrapper = styled.div`
  display: ${props => (props.activetab ? "block" : "none")};
`

export default Sections
