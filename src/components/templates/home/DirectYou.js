import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const DirectYou = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="content">
          <h2>{data.directYouTitle}</h2>
          <div className="content__list">
            {data.directYouLinks.map((item, index) => (
              <Link key={index} to={`/${item.linkSlug}`}>
                {item.linkText}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section``

export default DirectYou
