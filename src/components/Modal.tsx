import React, { ReactEventHandler } from 'react'
import Portal from './Potal'
import styled from 'styled-components'

const ModalContainer = styled.div<{$visible: boolean}>`
visibility: ${({$visible}) => $visible ? 'visible' : 'hidden'};
opacity:  ${({$visible}) => $visible ? '1' : '0'};
position: fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
display: flex;
justify-content: center;
align-items: center;
background: rgba(0,0,0,0.3);
transition: .2s ease-in-out;
`;
const ModalMessageContainer = styled.div`
  padding: 24px;
  background-color: ${({theme}) => theme.color.foreground};
  color: ${({theme}) => theme.color.background};
  border-radius: 999px;
`;

interface ModalProps {
  isOpen: boolean
}

const Modal:React.FC<ModalProps> = ({children, isOpen}) => {
  const onClose = (e:React.SyntheticEvent) => {

  }
  const onDimedClick:ReactEventHandler = (e) => {
    if(e.target === e.currentTarget) {
      onClose(e)
    } 
  }

  return (
    <Portal elementId='root'>
      <ModalContainer onClick={onDimedClick} $visible={isOpen}>
        <ModalMessageContainer>
          {children}
        </ModalMessageContainer>
      </ModalContainer>
    </Portal>
  )
}

export default Modal
