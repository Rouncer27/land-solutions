import { css } from "styled-components"
import { B2Blue, colors } from "../../styles/helpers"

export const ListStyles = css`
  ${B2Blue};
  display: block;
  margin: 0 2rem;
  cursor: pointer;

  a {
    ${B2Blue};
    padding: 1rem 2rem;
  }

  .sub-menu {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    position: absolute;
    top: 150%;
    left: 0;
    right: 0;
    padding: 3rem;
    background-color: ${colors.white};
    cursor: initial;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-out;
    border: 1px solid green;

    &__title {
      width: 25%;

      p {
        ${B2Blue};
        font-weight: bold;
        text-transform: uppercase;
      }
    }

    &__wrap {
      width: 25%;
      padding: 0 3rem;
      border-left: 0.1rem solid ${colors.colorAccent};

      ul {
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;

        li {
          width: 100%;
          padding: 0;
          margin-bottom: 1rem;

          a {
            display: block;
            padding: 0;
            text-transform: uppercase;
          }
        }
      }
    }

    &__active {
      opacity: 1;
      visibility: visible;
      z-index: 9999999999;
    }
  }
`
