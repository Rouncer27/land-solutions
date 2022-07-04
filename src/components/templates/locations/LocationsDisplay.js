import React from "react"
import styled from "styled-components"
import { B1OffBlack, colors, standardWrapper } from "../../../styles/helpers"

import mapImg from "../../../images/map.png"

const LocationsDisplay = ({ data }) => {
  console.log("Locations: ", data)
  return (
    <StyledDiv>
      <div className="wrapper">
        {data.locations.map((item, index) => {
          return (
            <LocationBox even={index % 2 === 0} key={index}>
              {item.regionTitle ? <h3>{item.regionTitle}</h3> : null}
              {item.address ? (
                <p dangerouslySetInnerHTML={{ __html: item.address }} />
              ) : null}
              {item.phone ? (
                <p>
                  Phone: <a href={`tel: +1${item.phone}`}>{item.phone}</a>
                </p>
              ) : null}
              {item.tollFree ? (
                <p>
                  Toll Free:{" "}
                  <a href={`tel: +1${item.tollFree}`}>{item.tollFree}</a>
                </p>
              ) : null}

              {item.email ? (
                <p>
                  Email: <a href={`mailto:${item.email}`}>{item.email}</a>
                </p>
              ) : null}
            </LocationBox>
          )
        })}
      </div>
      <div className="map-image" />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: relative;
  padding-top: 10rem;
  padding-bottom: 5rem;
  background-color: ${colors.colorSecondary};
  overflow: hidden;

  .wrapper {
    ${standardWrapper};
    position: relative;
    z-index: 10;
  }

  .map-image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    max-width: 160rem;
    margin: auto;
    background-image: url("${mapImg}");
    background-position: top center;
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
`

const LocationBox = styled.div`
  width: 100%;
  margin-bottom: 2.5rem;
  padding: 2.5rem;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  @media (min-width: 768px) {
    width: calc(50% - 3rem);
    margin-right: ${props => (props.even ? "3rem" : "auto")};
    margin-bottom: 4rem;
    margin-left: ${props => (props.even ? "auto" : "3rem")};
  }

  h3 {
    ${B1OffBlack};
    margin: 0;
    text-transform: uppercase;
  }

  p {
    ${B1OffBlack};
    margin: 0;
  }

  a {
    ${B1OffBlack};
    margin: 0;
  }
`

export default LocationsDisplay
