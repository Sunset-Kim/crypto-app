import React from 'react'
import styled from 'styled-components'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isDarkAtom } from '../atom';
import ToggleButton from '../components/ToggleButton';

const Container = styled.header`
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
`;

const GlobalHeader = () => {
  // recoil 
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const onToggleTheme = () => setDarkAtom(prev => !prev);
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <Container>
      <ToggleButton onClick={onToggleTheme} state={isDark}></ToggleButton>
    </Container>
  )
}

export default GlobalHeader
