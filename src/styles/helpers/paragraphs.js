import { colors } from "./index"
import { fontSizer } from "./index"
import { css } from "styled-components"

// Body copy ONE //
export const B1Base = css`
  ${fontSizer(1.6, 1.8, 76.8, 150, 1.8)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
`

export const B1Black = css`
  ${B1Base};
  color: ${colors.black};
`

export const B1White = css`
  ${B1Base};
  color: ${colors.white};
`

export const B1OffBlack = css`
  ${B1Base};
  color: #3a3d40;
`

// Body copy TWO //
export const B2Base = css`
  ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: normal;
`

export const B2Black = css`
  ${B2Base};
  color: ${colors.black};
`

export const B2White = css`
  ${B2Base};
  color: ${colors.white};
`

export const B2Blue = css`
  ${B2Base};
  color: ${colors.colorPrimary};
`

export const B2OffBlack = css`
  ${B2Base};
  color: #3a3d40;
`

// Body copy TWO //
export const B3Base = css`
  ${fontSizer(1.6, 2, 76.8, 150, 1.8)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
`

export const B3Black = css`
  ${B3Base};
  color: ${colors.black};
`

export const B3White = css`
  ${B3Base};
  color: ${colors.white};
`

export const B3Blue = css`
  ${B3Base};
  color: ${colors.colorSecondary};
`
