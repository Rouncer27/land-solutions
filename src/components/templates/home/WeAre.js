import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Black,
  B2OffBlack,
  colors,
  H2Blue,
  H2Green,
} from "../../../styles/helpers"

const WeAre = ({ data }) => {
  const image = getImage(
    data?.weAreLandsolutionsImage?.localFile?.childImageSharp?.gatsbyImageData
  )
  const logoAlt = data?.weAreLandsolutionsImage?.altText
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="titles">
          <h2>{data.weAreLandsolutionsTitle}</h2>
          <p>{data.weAreLandsolutionsSubTitle}</p>
        </div>
        <div className="content">
          <div
            className="content__paragraph"
            dangerouslySetInnerHTML={{ __html: data.weAreLandsolutionsContent }}
          />
          <div>
            {data.weAreLandsolutionsItems.map((item, index) => {
              return (
                <div key={index}>
                  <h3>
                    <span>&#8594;</span>
                    {item.title}
                  </h3>
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="image">
        <GatsbyImage image={image} alt={logoAlt} layout="fixed" />
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .titles {
    width: 80%;
    padding: 2rem;
    margin-left: auto;

    @media (min-width: 768px) {
      width: calc(50%);
      max-width: 30rem;
      margin-left: auto;
      padding: 0;
    }

    @media (min-width: 1025px) {
      width: calc(50%);
      max-width: 40rem;
    }

    h2 {
      ${H2Blue};
      margin-bottom: 4rem;

      @media (min-width: 768px) {
        margin-bottom: 8.1rem;
      }
    }

    p {
      ${H2Green};
      font-weight: 300;
    }
  }

  .content {
    width: 100%;
    margin-top: 8rem;
    padding: 0 4rem;

    @media (min-width: 600px) {
      margin-top: 10rem;
    }

    @media (min-width: 768px) {
      width: calc(50% - 2rem);
      margin-top: 0;
      margin-left: 2rem;
      padding: 0 2rem;
    }

    @media (min-width: 1025px) {
      width: calc(50% - 10rem);
      margin-left: 10rem;
    }

    h3 {
      ${B2OffBlack};
      position: relative;
      color: ${colors.colorSecondary};
      font-weight: bold;

      span {
        display: block;
        position: absolute;
        top: 0;
        left: -4rem;
        font-weight: 300;
        font-size: 3rem;
        line-height: 0.7;
      }
    }

    p {
      ${B1Black};
    }
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 20rem;

    @media (min-width: 768px) {
      width: 22.5rem;
    }

    @media (min-width: 850px) {
      width: 30rem;
    }

    @media (min-width: 1025px) {
      width: 40rem;
    }
  }
`

export default WeAre
