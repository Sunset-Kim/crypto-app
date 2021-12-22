import { css, DefaultTheme } from 'styled-components';
import { BackQuoteArgs, Color, Media, Sizes } from './styled';
import chroma from 'chroma-js'

const sizes:Sizes ={
  mobile: 320,
  tablet: 786,
  desktop: 1024
}

const media:Media = {
  mobile: (...args: BackQuoteArgs) => undefined,
  tablet: (...args: BackQuoteArgs) => undefined,
  desktop: (...args: BackQuoteArgs) => undefined
}

const makeColor = (color: string): Color => {
  return {
    default: chroma(color),
    dark: chroma(color).darken(2),
    light: chroma(color).brighten(2)
  }
}


Object.keys(sizes).reduce((acc,label) => {
  switch(label) {
    case 'mobile' :
      acc.mobile = (...args) => css`@media screen and (min-width: ${sizes.mobile}px){
        ${args}
      }`
    break;
    case 'tablet' :
    acc.tablet = (...args) => css`@media screen and (min-width: ${sizes.tablet}px){
      ${args}
    }`
    break;
    case 'desktop' :
    acc.desktop = (...args) => css`@media screen and (min-width: ${sizes.desktop}px){
      ${args}
    }`
    break;  
  }
  return acc
},media)


export const lightTheme: DefaultTheme = {
  sizes,
  borderRadius: '4px',
  media,
  color: {
    primary: makeColor('#313131'),
    secondary: makeColor('#313131'),
    background: "#222f3e",
    foreground: "#f5f6fa"
  },
  typography: '2px'
}