import React from "react"
import SubSectionOne from "./SubSectionOne"
import SubSectionTwo from "./SubSectionTwo"
import SubSectionThree from "./SubSectionThree"

const SubSectionPicker = ({ data }) => {
  return (
    <>
      {data.sectorSubSection.length > 0 ? (
        data.sectorSubSection.map((section, index) => {
          switch (section?.fieldGroupName) {
            case "Sector_Sectors_SectorSubSection_SubSectionStyleOne":
              return <SubSectionOne key={index} data={section} />

            case "Sector_Sectors_SectorSubSection_SubSectionStyleTwo":
              return <SubSectionTwo key={index} data={section} />

            case "Sector_Sectors_SectorSubSection_SubSectionStyleThree":
              return <SubSectionThree key={index} data={section} />

            default:
              return <p>Cannot find this component {section.fieldGroupName}</p>
          }
        })
      ) : (
        <p>This page has no content</p>
      )}
    </>
  )
}

export default SubSectionPicker
