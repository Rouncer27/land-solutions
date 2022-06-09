import React from "react"

import SubOne from "./SubOne"
import SubTwo from "./SubTwo"
import SubThree from "./SubThree"

const SubMenu = ({
  isActive,
  subTitle,
  subMenuOne,
  subMenuTwo,
  subMenuThree,
}) => {
  return (
    <div className={`sub-menu${isActive ? " sub-menu__active" : ""}`}>
      <div className="sub-menu__title">
        <p>{subTitle}</p>
      </div>
      <SubOne subMenuOne={subMenuOne} />
      {subMenuTwo && <SubTwo subMenuTwo={subMenuTwo} />}
      {subMenuThree && <SubThree subMenuThree={subMenuThree} />}
    </div>
  )
}

export default SubMenu
