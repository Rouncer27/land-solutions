import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const ContentImage = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>{data.homeContentWithLinkTitle}</h2>
          <p>{data.homeContentWithLinkSubTitle}</p>
          <Link to={`/${data.homeContentWithLinkButtonSlug}`}>
            {data.homeContentWithLinkButtonText}
          </Link>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section``

export default ContentImage
