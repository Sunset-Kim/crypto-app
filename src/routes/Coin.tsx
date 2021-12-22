import React from 'react'
import { useParams } from 'react-router'
import { IRouterParams } from '../types/router';




const Coin = () => {
  const { coinID } = useParams() as IRouterParams;

  return (
    <div>
      {coinID}
      Coin
      
    </div>
  )
}

export default Coin
