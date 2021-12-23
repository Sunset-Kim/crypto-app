import React from 'react'
import styled, { useTheme } from 'styled-components';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import CoinAPI from '../services/CoinAPI';
import Loading from '../components/Loading';
import ApexCharts from 'react-apexcharts';

const Container = styled.div``;

interface CoinParam {
  coinID : string
}

const Chart = () => {
  
  const {coinID} = useParams() as CoinParam;
  const {isLoading,isError, data} = useQuery(["history", coinID], () => CoinAPI.getHistory(coinID));

  const candleData = data?.map(price => {
    return {
      x: price.time_close,
      y: [price.open, price.high, price.low, price.close],
    }
  })

  
  return (
    <>
      <h1>Chart</h1>
      {
        isLoading 
        ? <Loading /> 
        : <ApexCharts
        type='candlestick'
        series={[{
          name: 'candle',
          data: candleData,
          
        }
      ]}
  
        options={{
          // 차트 툴바, 줌 off, 차트 (사이즈, 배경색)
          chart: {
            toolbar: {
              autoSelected: 'pan',
              show: false,
            },
            zoom: {
              enabled: false
            },
            height: 500,
            width: 500,
            background: 'transparent'
          },
          // 캔들스틱 스타일 관련
          plotOptions: {
            candlestick: {
              colors: {

              }
            }
          },

          title: {
            text: `${coinID.toUpperCase()}`,
            align: 'center',
            style: {
              fontSize: '18px',
              fontWeight: 'bold',
            }
          },
          theme: {
            mode: 'dark'
          },
          
          xaxis: {
            type: 'datetime',
          },
          yaxis: {

            labels: {
              style: {
                fontFamily: 'Lato'
              },
              formatter: (value) => `$ ${value.toFixed(2)}`
            }
          },
          
          tooltip: {
            fillSeriesColor: true,
            custom: ({ seriesIndex, dataPointIndex, w }) => {
              const o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
              const h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
              const l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
              const c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];

              return (
                `<div class="apexcharts-tooltip-candlestick">
                <div class="apexcharts-tooltip-candlestick-line">Open:<span class="value">${Number(o).toFixed(2)}</span></div>
                <div class="apexcharts-tooltip-candlestick-line">High: <span class="value">${Number(h).toFixed(2)}</span></div>
                <div class="apexcharts-tooltip-candlestick-line">Low: <span class="value">${Number(l).toFixed(2)}</span></div>
                <div class="apexcharts-tooltip-candlestick-line">Close: <span class="value">${Number(c).toFixed(2)}</span></div>
                </div>`
              )
            },

            style: {
              fontFamily: 'Lato',
              fontSize: '14px'
            },
            
          },
          
          
        }}
        
        />
      }
      
    </>
  )
}

export default Chart
