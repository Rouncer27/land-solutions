import { colors } from "./index"
import { fontSizer } from "./index"
import { css } from "styled-components"

// Headline Styles #1 //
export const H1Base = css`
  ${fontSizer(3.25, 5.5, 76.8, 150, 3)};
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.03;
  letter-spacing: normal;
`

export const H1Black = css`
  ${H1Base};
  color: ${colors.black};
`

export const H1White = css`
  ${H1Base};
  color: ${colors.white};
`

export const H1Blue = css`
  ${H1Base};
  color: ${colors.colorPrimary};
`

// Headline Styles #2 //
export const H2Base = css`
  ${fontSizer(2.5, 3.8, 76.8, 150, 2.5)};
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
`

export const H2White = css`
  ${H2Base};
  color: ${colors.white};
`

export const H2Black = css`
  ${H2Base};
  color: ${colors.black};
`

export const H2Green = css`
  ${H2Base};
  color: ${colors.colorSecondary};
`

// Headline Styles #3 //
export const H3Base = css`
  ${fontSizer(2, 2.6, 76.8, 150, 2)}
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
`

export const H3White = css`
  ${H3Base};
  color: ${colors.white};
`

export const H3Black = css`
  ${H3Base};
  color: ${colors.black};
`

export const H3SkyBlue = css`
  ${H3Base};
  color: ${colors.colorAccent};
`
export const H3Blue = css`
  ${H3Base};
  color: ${colors.colorPrimary};
`

export const H3Green = css`
  ${H3Base};
  color: ${colors.colorSecondary};
`

// Headline Styles #4 //
export const H4Base = css`
  ${fontSizer(2, 2.6, 76.8, 160, 2)};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`
