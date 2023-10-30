import React from "react"

// Intros and heros
import PageIntroOne from "./components/PageIntroOne"
// Page content
import PageContentOne from "./components/PageContentOne"
import PageContentTwo from "./components/PageContentTwo"
import PageContentThree from "./components/PageContentThree"

const PageComponentGroups = props => {
  const components = props?.components?.template?.defaultTwo?.pageComponents

  const allPageComponents =
    components.length > 0 ? (
      <>
        {components.map((component, index) => {
          switch (component.fieldGroupName) {
            case "Template_DefaultTwo_Defaulttwo_PageComponents_PageIntroOne":
              return <PageIntroOne key={index} data={component} />
            case "Template_DefaultTwo_Defaulttwo_PageComponents_PageContentOne":
              return <PageContentOne key={index} data={component} />
            case "Template_DefaultTwo_Defaulttwo_PageComponents_PageContentTwo":
              return <PageContentTwo key={index} data={component} />
            case "Template_DefaultTwo_Defaulttwo_PageComponents_PageContentThree":
              return <PageContentThree key={index} data={component} />
            default:
              return (
                <p>Cannot find this component {component.fieldGroupName}</p>
              )
          }
        })}
      </>
    ) : (
      <p>This page has no content</p>
    )

  return <>{allPageComponents}</>
}

export default PageComponentGroups
