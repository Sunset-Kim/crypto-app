import React, { ButtonHTMLAttributes, FormEvent, FormEventHandler } from 'react'
import styled from 'styled-components'


const BasicButton = styled.button`
background: none;
width: 36px;
height: 36px;
display: flex;
justify-content: center;
align-items: center;
color: ${({theme}) => theme.color.foreground};
font-size: 24px;
border: 1px solid ${({theme}) => theme.color.foreground};
background-color: none;
transition: background-color 0.3s ease-in-out, color .3s ease-in-out;

&:hover {
  color: ${({theme}) => theme.color.background};
  background-color: ${({theme}) => theme.color.foreground};
}
`;

interface ButtonProps {
  onClick: () => void
}

const Button:React.FC<ButtonProps> = ({children,onClick}) => {
  return (
    <BasicButton onClick={onClick}>
      {children}
    </BasicButton>
  )
}

export default Button
