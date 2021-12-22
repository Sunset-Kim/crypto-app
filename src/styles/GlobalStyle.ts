import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
${reset}

body {
  font-family: 'Lato', sans-serif;
  color: red;
}

a {
  color: inherit;
  text-decoration: none;
}
`

export default GlobalStyle;