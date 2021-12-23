import React,{useState, useEffect} from 'react'
import styled from 'styled-components';
import { useParams,useLocation, Outlet, useMatch, useNavigate } from 'react-router'
import Loading from '../components/Loading';
import BodyContainer from '../components/BodyContainer';
import CoinAPI, { CoinDetail,CoinPrice } from '../services/CoinAPI';
import axios from 'axios';
import getIcon from '../utils/getIcon';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

const Header = styled.div`
display: flex;
margin-bottom: 24px;

h1 {
  flex: 1;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
}
`;

const Container = styled.div``;

const InfoBox = styled.div`
display: flex;
color: ${({theme}) => theme.color.background};
background: ${({theme}) => theme.color.foreground};
border-radius: 10px;
margin-bottom: 24px;

> div {
  padding: 16px;
  flex:1;
  display: flex;
  flex-direction: column;
  
  align-items: center;
  
  h3 {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
 
  img {
 
    width: 48px;
    height: 48px;
  }
}
`;

const Desc = styled.div`
font-size: 16px;
line-height: 20px;
margin-bottom: 24px;

h2 {
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 8px;
}
`;

const PriceInfoBox = styled(InfoBox)`
`;

const Tabs = styled.div`
display: flex; 
`

const Tab = styled(Link)<{$isactive: boolean}>`
  padding: 10px 0;
  text-align: center;
  border-radius: 20px 20px 0 0;
  color: ${({theme}) => theme.color.background};
  background-color: ${({theme,$isactive}) => $isactive ? theme.color.primary.default : theme.color.foreground};
  transition: background-color .2s ease-in-out;
  flex: 1;
`

const TabContainer = styled.div`
  padding: 16px;
`;


interface RouterStates {
  state: {
    name: string,
  }
}

interface CoinParam {
  coinID : string
}

const Coin: React.FC = () => {
  // hook
  const {state} = useLocation() as RouterStates;
  const {coinID} = useParams() as CoinParam;
  const priceMatch = useMatch('/coin/:coinID/price');
  const chartMatch = useMatch('/coin/:coinID/chart');
  const navigate = useNavigate();

  console.log(priceMatch !== null)

  const {
    isLoading: infoLoading,
    isError: infoError,
    data: info,
  } = useQuery(["info", coinID], () => CoinAPI.getCoinDetail(coinID));


  const {
    isLoading: priceLoading,
    isError: priceError,
    data: price,
  } = useQuery(["price", coinID], () => CoinAPI.getPrice(coinID));

 const isLoading = infoLoading || priceLoading;
 const isError = infoError || priceError;  


  return (
    <BodyContainer>
      <Header>
        <button onClick={() => navigate("/")}>
          back
        </button>
        <h1>
          {state?.name ? state.name : isLoading ? "Loading..." : info?.name}
        </h1>
      
      </Header>
      <Container>
        {isLoading ? <Loading /> : <>
        <InfoBox>
          <div>
            <h3>Rank</h3>
            <div>
            <p>{info?.rank}</p>
            </div>
            
          </div>
          <div>
          <h3>SYMBOL</h3>
          <div>
          <p>{info?.symbol}</p>
          </div>
            
          </div>
          <div>
          <h3>IMG</h3>
          <div>
          {
              info?.symbol && <img src={getIcon(info.symbol)} alt={info.symbol} />
            }
          </div>
            
          </div>
          
        </InfoBox>

        <Desc>
          <h2>description</h2>
          {info?.description}
        </Desc>
        
        <PriceInfoBox>
          <div>
            <h3>All Time High Price</h3>
            <div>
              {price?.quotes.USD.ath_price}$
            </div>
          </div>

          <div>
            <h3>Current Price</h3>
            <div>
            {price?.quotes.USD.price}$
            </div>
          </div>

        </PriceInfoBox>

        <Tabs>
        <Tab $isactive={chartMatch !== null ? true : false } to={`chart`}>Chart</Tab>
        <Tab $isactive={priceMatch !== null ? true : false} to={`price`}>Price</Tab>
        </Tabs>
        
        <TabContainer>
          <Outlet />
        </TabContainer>
        </>}
      </Container>
    </BodyContainer>
  )
}

export default Coin
