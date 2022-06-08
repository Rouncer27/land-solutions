import * as primary from "./primary"
import { css } from "styled-components"

const PrimaryFonts = css`
  @font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 300;
    src: local(""), url("${primary.WOFF2_3}") format("woff2"),
      url("${primary.WOFF_3}") format("woff");
  }

  @font-face {
    font-family: "Source Sans Pro";
    font-style: italic;
    font-weight: 300;
    src: local(""), url("${primary.WOFF2_3I}") format("woff2"),
      url("${primary.WOFF_3I}") format("woff");
  }

  @font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    src: local(""), url("${primary.WOFF2_4}") format("woff2"),
      url("${primary.WOFF_4}") format("woff");
  }

  @font-face {
    font-family: "Source Sans Pro";
    font-style: italic;
    font-weight: 400;
    src: local(""), url("${primary.WOFF2_4I}") format("woff2"),
      url("${primary.WOFF_4I}") format("woff");
  }

  @font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    src: local(""), url("${primary.WOFF2_6}") format("woff2"),
      url("${primary.WOFF_6}") format("woff");
  }

  @font-face {
    font-family: "Source Sans Pro";
    font-style: italic;
    font-weight: 600;
    src: local(""), url("${primary.WOFF2_6I}") format("woff2"),
      url("${primary.WOFF_6I}") format("woff");
  }
`

export default PrimaryFonts
