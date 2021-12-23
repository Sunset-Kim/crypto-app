import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { CoinPrice } from '../services/CoinAPI';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OverViewBox = styled.div`
display: flex;
width: 100%;
background-color: ${({theme}) => theme.color.foreground};
color: ${({theme}) => theme.color.background};
padding: 16px 24px;
border-radius: 100px;
justify-content: space-between;
margin-bottom: 8px;
h3 {
  text-transform: capitalize;
}
`;

const Value = styled.div<{color: string | null}>`
color: ${({color = 'inherit'}) => color};
`;

interface LoactionStateProps {
  state: {
    data: CoinPrice
  }
}

const Price = () => {
  const {state: {data}} = useLocation() as LoactionStateProps;
  const USDData = Object.entries(data.quotes.USD);
  
  return (
    <div>
      {USDData.map(item => <OverViewBox key={item[0]}>
        <h3>
          {item[0].replaceAll('_', ' ')}
        </h3>
        <Value color= { 
          item[0].indexOf('change') > -1 || item[0].indexOf('percent') > -1
          ?( Number(item[1]) > 0   
          ? '#00B746' 
          : '#EF403C' )
          : '' }>
            {
              // 1st add precent 
              item[0].indexOf('percent') > -1 || item[0].indexOf('change') > -1 ? 
              (Number(item[1]) > 0 ?
              <>
              <span>
              {'+' + item[1] + '% '}
              </span>
              <FontAwesomeIcon icon={faSortUp} />
              </>  
              : <>
              <span>
              {item[1] + '% '}
              </span>
              <FontAwesomeIcon icon={faSortDown} />
              </>): 
              // 2nd add price $
              (item[0].indexOf('price') > -1 ? 
              <span>
                {'$'+item[1]}
              </span> : 
              <span>
                {item[1]} 
              </span>
              )

            }
        </Value>
      </OverViewBox>)}
      
    </div>
  )
}

export default Price
