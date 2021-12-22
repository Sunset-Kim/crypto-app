import React,{useState, useEffect} from 'react'
import styled from 'styled-components';
import { useParams,useLocation, Outlet } from 'react-router'
import { RouteProps,RouterProps } from 'react-router-dom';
import Loading from '../components/Loading';
import BodyContainer from '../components/BodyContainer';
import CoinAPI, { CoinDetail,CoinPrice } from '../services/CoinAPI';
import axios from 'axios';
import getIcon from '../utils/getIcon';


const Header = styled.div`
margin-bottom: 24px;

h1 {
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

  // state
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<CoinDetail|undefined>();
  const [price, setPrice] = useState<CoinPrice | undefined>();
  
  
  useEffect(() => {

    
    try {
      //@ts-ignore
      axios.all([CoinAPI.getCoinDetail(coinID), CoinAPI.getPrice(coinID)])
      .then(axios.spread((infoResp, priceResp) => {
        setInfo(infoResp)
        //@ts-ignore
        setPrice(priceResp)
        setLoading(false)
      }))
    } catch (e) {
      console.log(e);
    }

    return () => {
      
    }
  }, [coinID])

  return (
    <BodyContainer>
      <Header>
        <h1>
          {state?.name ? state.name : loading ? "Loading..." : info?.name}
        </h1>
      </Header>
      <Container>
        {loading ? <Loading /> : <>
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

        <Outlet />
        </>}
      </Container>
    </BodyContainer>
  )
}

export default Coin
