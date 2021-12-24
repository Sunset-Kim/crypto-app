  import React from 'react'
import { RecoilState } from 'recoil';
import styled from 'styled-components'


const Button = styled.button`
position: relative;
width: 48px;
height: 24px;
border-radius: 999px;
border: none;
background-color: ${({theme}) => theme.color.foreground};
`;

const Circle = styled.span<{$state: boolean | RecoilState<boolean>}>`
  position: absolute;
  left: 4px;
  top: calc((24px - 18px) / 2);
  display: inline-block;
  border-radius: 100%;
  height: 18px;
  width: 18px;
  background-color: ${({theme}) => theme.color.background};
  transform: ${props => props.$state ? `translateX(calc(40px - 18px))` : 'translate(0, 0)'};
  transition: transform .2s ease-in-out;`;

interface ToggleButtonProp {
  state: boolean | RecoilState<boolean>
  onClick: () => void
}

const ToggleButton:React.FC<ToggleButtonProp> = ({state, onClick}) => {
  
  return (
    <Button onClick={onClick}>
      <Circle $state={state}></Circle>
    </Button>
  )
}

export default ToggleButton
