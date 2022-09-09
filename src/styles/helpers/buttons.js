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
    250deg,
    rgba(9, 9, 121, 0) 18%,
    rgba(31, 82, 127, 1) 18%
  );
  color: ${colors.white};
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(
      250deg,
      rgba(9, 9, 121, 0) 18%,
      rgba(51, 106, 106, 1) 18%
    );
    color: ${colors.white};
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
`

export const Btn1Two = css`
  ${Btn1Base};
  padding-right: 7.5rem;
  background: linear-gradient(
    250deg,
    rgba(9, 9, 121, 0) 18%,
    rgba(136, 184, 223, 1) 18%
  );
  color: ${colors.white};
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(
      250deg,
      rgba(9, 9, 121, 0) 18%,
      rgba(51, 106, 106, 1) 18%
    );
    color: ${colors.white};
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
`

export const Btn1Three = css`
  ${Btn1Base};
  padding-right: 7.5rem;
  background: linear-gradient(
    250deg,
    rgba(9, 9, 121, 0) 18%,
    rgba(136, 184, 223, 1) 18%
  );
  color: ${colors.white};
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(
      250deg,
      rgba(9, 9, 121, 0) 18%,
      rgba(51, 106, 106, 1) 18%
    );
    color: ${colors.white};
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
`
