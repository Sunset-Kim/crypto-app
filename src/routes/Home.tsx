import React,{useState} from 'react'
import styled from "styled-components"
import BodyContainer from '../components/BodyContainer';
import Loading from '../components/Loading';
import CoinAPI from '../services/CoinAPI';
import { Link } from 'react-router-dom';
import getIcon from '../utils/getIcon';
import { useQuery } from 'react-query';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft,faCaretRight } from '@fortawesome/free-solid-svg-icons';

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
const ControlBox  = styled.div`
padding: 0 16px;
display: flex;
justify-content: space-between;
margin-bottom: 16px;
flex-direction: column;

select {
  padding: 8px 16px;
  margin-bottom: 10px;
}

${({theme: {media}}) => media.tablet`
flex-direction: row;
select {
  margin-bottom: 0;
}
`}


`;

const Pagenation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    margin: 0 16px;
    height: 100%;
  }

  input {
    width: 36px;
    height: 100%;
    margin-right: 10px;
    text-align: center;
    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
      appearance: none;
      margin: 0
    }
  }
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
overflow: hidden;

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
  const [page, setPage] = useState(1);
  const [viewCounter, setViewCounter] = useState(10);

  // computed var
  const filteredData = data?.filter(item => item.is_active);
  const isLoading = dataLoading;
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
      <Container>

        {/* 헤더 */}
        <Header>
          <h1>
          Coin List
          </h1>
        </Header>

        {
          isLoading ? <Loading /> : <>
          {/* 컨트롤 박스 */}
        <ControlBox>
          <select name="" id="" onChange={onChangeView} value={viewCounter}>
            <option value="10">10개씩 보기</option>
            <option value="20">20개씩 보기</option>
            <option value="50">50개씩 보기</option>
          </select>

          <Pagenation>
            <Button onClick={decresePage}>
              <FontAwesomeIcon icon={faCaretLeft} />
            </Button>
            <div>
              <input type="number" value={page} onChange={onChangePage} max={totalPage} />/
              <span>{totalPage}</span>
            </div>
            
            <Button onClick={incresePage}>
              <FontAwesomeIcon icon={faCaretRight} />
            </Button>
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
          
          </>
        }

        

      </Container>
      }
    </BodyContainer>

  )
}

export default Home
