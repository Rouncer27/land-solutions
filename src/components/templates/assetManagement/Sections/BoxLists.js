import React from "react"
import styled from "styled-components"
import { H3Blue, medWrapper, fonts } from "../../../../styles/helpers"

const BoxLists = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        {data.boxLists.map((box, index) => {
          return (
            <BoxItem key={index}>
              <h2>{box.title}</h2>
              <ul>
                {box.listItems.map((item, index) => {
                  return <li key={index}>{item.item}</li>
                })}
              </ul>
            </BoxItem>
          )
        })}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
  }
`

const BoxItem = styled.div`
  width: 100%;
  padding: 2.5rem 6rem 5rem;
  border: solid 1px #1f527f;

  @media (min-width: 768px) {
    width: calc(50% - 4rem);
    margin: 1rem 2rem;
  }

  h2 {
    ${H3Blue};
    margin-bottom: 0.5rem;
  }

  li {
    ${H3Blue};
    position: relative;
    margin-bottom: 0;
    padding-left: 0.75em;

    &::before {
      font-family: ${fonts.fontAwesome};
      position: absolute;
      top: 1.75em;
      left: 0;
      padding-right: 0.75em;
      color: rgba($grey, 0.75);
      font-size: 0.75rem;
      content: "\f04d";
    }
  }
`

export default BoxLists
