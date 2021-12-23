import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  font-family: 'Lato', sans-serif;
  height: 100%;
  color: ${(props) => props.theme.color.foreground};
  background-color: ${(props) => props.theme.color.background};
}

#root {
  height: 100%;
  max-width: 720px;
  min-width: 320px;
  margin: 0 auto;
}


a {
  color: inherit;
  text-decoration: none;
}

/* apex tool tip */
.apexcharts-tooltip-candlestick {
  padding: 1em;
  font-family: 'Lato';

  &-line {
    margin-bottom: 0.2em;
    span {
      font-weight: bold;
      margin-left: 0.5em;
    }
  }
}
`

export default GlobalStyle;