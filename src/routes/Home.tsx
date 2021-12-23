import React,{useState} from 'react'
import styled from "styled-components"
import BodyContainer from '../components/BodyContainer';
import Loading from '../components/Loading';
import CoinAPI from '../services/CoinAPI';
import { Link } from 'react-router-dom';
import getIcon from '../utils/getIcon';
import { useQuery } from 'react-query';

// styled components
const Container = styled.div``;

// header
const Title = styled.h1``;
const Header = styled.div`
margin-bottom: 24px;
h1 {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
}
`;

// controlbox
const ControlBox  = styled.div``;
const Pagenation = styled.div`
display: flex;
align-items: center;
`;
const Page = styled.button`
display: inline-flex;
justify-content: center;
align-items: center;
border-radius: 5px;
background-color: ${({theme}) => theme.color.foreground};
color: ${({theme}) => theme.color.primary.default};
width: 36px;
height: 36px;
`;

// List
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

const Home = () => {

  // hook
  const {
    isLoading: dataLoading,
    isError,
    data,
  } = useQuery(["list"], CoinAPI.getCoins)
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [viewCounter, setViewCounter] = useState(10);

  // computed var
  const filteredData = data?.filter(item => item.is_active);
  const isLoading = dataLoading && loading;
  const totalPage =filteredData && Math.floor(filteredData.length / viewCounter);

  // handler
  const onChangeView= (e:React.FormEvent<HTMLSelectElement> ) => {
    const newValue = e.currentTarget.value;
    setViewCounter(Number(newValue));
    setPage(1);
  }
  const onChangePage = (e:React.FormEvent<HTMLInputElement>) => {
    const useInput = Number(e.currentTarget.value);
    let currentPage = page;
    
    if(totalPage && useInput > totalPage) {
      currentPage = totalPage
    } else if (useInput < 1) {
      currentPage = 1
      return
    } else {
      currentPage = useInput
    }
    setPage(currentPage);

  }
  const incresePage = () => {
    setPage(prev => {
        if(totalPage && prev >= totalPage) {
          return prev
        }
        return prev + 1     
    })
  }
  const decresePage = () => {
    setPage(prev => {
      if(prev <= 1) {
        return prev
      }
      return prev - 1     
  })
  }

  // jsx
  return (
    <BodyContainer >
      {
        isLoading 
        ? <Loading /> 
        : <Container>

        {/* 헤더 */}
        <Header>
          <h1>
          Coin List
          </h1>
        </Header>

        {/* 컨트롤 박스 */}
        <ControlBox>
          <select name="" id="" onChange={onChangeView} value={viewCounter}>
            <option value="10">10개씩 보기</option>
            <option value="20">20개씩 보기</option>
            <option value="50">50개씩 보기</option>
          </select>
          <Pagenation>
            <Page onClick={decresePage}>prev</Page>
            <input type="number" value={page} onChange={onChangePage} max={totalPage} />/
            <span>{totalPage}</span>
            <Page onClick={incresePage}>next</Page>
          </Pagenation>
        </ControlBox>

        {/* 리스트 */}
        <CoinList>
        {
          filteredData &&
          filteredData.slice(((page - 1)*viewCounter),((page - 1)*viewCounter) + viewCounter).map(coin => <Coin key={coin.id}>
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
