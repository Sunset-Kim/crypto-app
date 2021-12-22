import chroma from "chroma-js";
import styled, { CSSProp } from "styled-components";

interface Sizes  {
  mobile: number
  tablet: number
  desktop: number
}

type BackQuoteArgs = string[]

interface Media {
  mobile: (...args: BackQuoteArgs) => CSSProp | undefined
  tablet: (...args: BackQuoteArgs) => CSSProp | undefined
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined
}

interface Color {
  default: chroma.Color;
  dark?: chroma.Color;
  light?: chroma.Color
}

interface Colors {
  [key: string]: Color | string
}


declare module 'styled-components' {
  export interface DefaultTheme {
    sizes: Sizes
    media: Media,
    borderRadius: string,
    typography: string,
    color: Colors,
  }
}