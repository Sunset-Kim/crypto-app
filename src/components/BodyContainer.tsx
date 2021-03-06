import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: fit-content;
padding: 24px;
`;

const BodyContainer:React.FC = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default BodyContainer
