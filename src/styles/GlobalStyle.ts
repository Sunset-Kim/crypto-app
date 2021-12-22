import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}

html, #root {
  height: 100%;
}
body {
  font-family: 'Lato', sans-serif;
  height: 100%;
  color: ${(props) => props.theme.color.foreground};
  background-color: ${(props) => props.theme.color.background};
}


a {
  color: inherit;
  text-decoration: none;
}
`

export default GlobalStyle;