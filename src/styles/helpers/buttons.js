import { colors } from "./index"
import { fontSizer } from "./index"
import { css } from "styled-components"

const Btn1Base = css`
  ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
  position: relative;
  display: inline-block;
  padding: 0.75rem 2rem;
  border: none;
  transition: all 0.3s ease;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: center;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Btn1One = css`
  ${Btn1Base};
  padding-right: 7.5rem;
  background: linear-gradient(
    235deg,
    rgba(9, 9, 121, 0) 18%,
    rgba(31, 82, 127, 1) 18%
  );
  color: ${colors.white};

  &:hover {
    background: linear-gradient(
      235deg,
      rgba(9, 9, 121, 0) 18%,
      rgba(157, 181, 148, 1) 18%
    );
    color: ${colors.colorSecondary};
  }

  &:focus {
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    opacity: 0.5;

    &:hover {
      background: ${colors.white};
      color: ${colors.colorPrimary};
      cursor: not-allowed;
    }
  }

  ${
    "" /* &::after {
    position: absolute;
    top: -4px;
    right: -3.75rem;
    display: block;
    width: 0;
    height: 0;
    border-top: 55px solid transparent;
    border-bottom: 0 solid transparent;
    border-left: 35px solid ${colors.colorPrimary};
    content: "";
  } */
  }
`

export const Btn1Two = css`
  ${Btn1Base};
  background: ${colors.colorSecondary};
  border: solid 0.1rem ${colors.colorSecondary};
  color: ${colors.colorPrimary};

  &:hover {
    background: ${colors.colorPrimary};
    border-color: ${colors.colorPrimary};
    color: ${colors.colorSecondary};
  }

  &:focus {
    outline: 0.4rem solid #003b49;
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    opacity: 0.5;

    &:hover {
      background: ${colors.colorSecondary};
      border-color: ${colors.colorSecondary};
      color: ${colors.colorPrimary};
      cursor: not-allowed;
    }
  }
`
