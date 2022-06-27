import React from "react"

import Wysiwyg from "./Sections/Wysiwyg"
import BoxLists from "./Sections/BoxLists"
import ImageWysiwyg from "./Sections/ImageWysiwyg"
import BoxLink from "./Sections/BoxLink"
import WysiwygLightTitles from "./Sections/WysiwygLightTitles"
import IconsRows from "./Sections/IconsRows"
import PageHero from "./Sections/PageHero"

const Sections = ({ data }) => {
  console.log("data", data)
  return (
    <div>
      <div className="wrapper">
        <div className="tabs">
          {data.map((tab, index) => {
            return (
              <div id={tab.tabId} key={index}>
                <p>{tab.tabTitle}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="tab-content">
        {data.map((section, index) => {
          return (
            <div key={index}>
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sections
