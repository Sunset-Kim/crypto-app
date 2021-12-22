import React,{useEffect, useState} from 'react'
import styled from "styled-components"
import BodyContainer from '../components/BodyContainer';
import Loading from '../components/Loading';
import CoinAPI, { CoinsResponse } from '../services/CoinAPI';
import { Link } from 'react-router-dom';
import getIcon from '../utils/getIcon';
import { useQuery } from 'react-query';

const Container = styled.div``;
const Header = styled.div`
margin-bottom: 24px;

h1 {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
}
`;

const CoinList = styled.ul`
padding: 0 16px;
`;

const Coin = styled.li`

margin: 8px auto;

background-color: ${({theme}) => theme.color.foreground};
color: ${({theme}) => theme.color.background};
font-weight: bold;
border-radius: 10px;

a {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 16px;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: ${({theme}) => theme.color.primary.default};
  }
  
}

img {
  width: 48px;
  height: 48px;
  margin-right: 16px;
}
`;
const Title = styled.h1``;

const Home = () => {
  const {
    isLoading,
    isError,
    data,
  } = useQuery(["list"], CoinAPI.getCoins)

  return (
    <BodyContainer >
      {
        isLoading 
        ? <Loading /> 
        : <Container>
        <Header>
          <h1>
          Coin List
          </h1>
        </Header>
        <CoinList>
        {
          data?.slice(0,100).map(coin => <Coin key={coin.id}>
            <Link to={`/coin/${coin.id}`} 
            state={{
              name: coin.name  
            }}>
            <img src={getIcon(coin.symbol)} alt={coin.symbol} />
            <Title>
            {coin.name} / {coin.symbol.toLowerCase()}
            </Title>
            </Link>
           
          </Coin>)
        }
        </CoinList>
  
        
      </Container>
      }

    </BodyContainer>

  )
}

export default Home
