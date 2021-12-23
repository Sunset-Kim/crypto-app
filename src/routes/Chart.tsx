import React from 'react'
import styled, { useTheme } from 'styled-components';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import CoinAPI from '../services/CoinAPI';
import Loading from '../components/Loading';
import ApexCharts from 'react-apexcharts';

const data = {
  options: {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]
}

const Container = styled.div``;

interface CoinParam {
  coinID : string
}

const Chart = () => {
  const theme = useTheme();
  const {coinID} = useParams() as CoinParam;
  const {isLoading,isError, data} = useQuery(["history", coinID], () => CoinAPI.getHistory(coinID));
  
  return (
    <>
      <h1>Chart</h1>
      {
        isLoading 
        ? <Loading /> 
        : <ApexCharts type='line' 
        series={[
          {
          name: "price",
          data: data?.map(price => price.close)
        },
     
      ]}
        options={{
          theme: {
            mode: 'dark'
          },
          chart: {
            height: 500,
            width: 500,
            background: 'transparent'
          },
          stroke: {
            curve: 'smooth',
            width: 10
          },
          xaxis: {
            labels: {
              show: false
            },
            axisTicks: {
              show: false
            },
            type: 'datetime',
            categories: data?.map(price => price.time_close)
          },
          yaxis: {
            show: false
          },
          fill: {
            type: 'gradient',
            gradient: {
              gradientToColors: [`${theme.color.foreground}`],
              stops: [0, 200]
            }
          },
          colors: [`${theme.color.primary.default}`],
          tooltip: {
            y: {
              formatter: (value) => `$ ${value.toFixed(3)}`
            }
          }
          
          
        }}/>
      }
      
    </>
  )
}

export default Chart
