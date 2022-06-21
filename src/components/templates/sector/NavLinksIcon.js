import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { H3LightGreen, standardWrapper } from "../../../styles/helpers"
import { Link } from "gatsby"

const NavLinksIcon = ({ data }) => {
  const imageDisplay = getImage(
    data.navigationLinksWithIconIcon.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.navigationLinksWithIconIcon.altText
  return (
    <StyledDiv>
      <div className="wrapper">
        <div className="wrapper__inner">
          <div className="icon">
            <GatsbyImage
              image={imageDisplay}
              alt={imageAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <ul className="links">
            {data.navigationLinksWithIconLinks.map((item, index) => (
              <li key={index}>
                <Link to={`/${item.slug}`}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  .wrapper {
    ${standardWrapper};

    &__inner {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 45rem;
      margin: 2rem auto;
    }
  }

  .icon {
    width: calc(25% - 2.5rem);
    margin-right: 2.5rem;
  }

  .links {
    width: 75%;

    a {
      ${H3LightGreen};
      font-weight: 300;
    }
  }
`

export default NavLinksIcon
