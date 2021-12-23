import axios from "axios"

export interface CoinsResponse { 
    id: string
    name: string
    symbol: string
    rank: number
    is_new: boolean
    is_active: boolean
    type: string
}
interface Team {
  id: string
  name: string
  position: string
}
interface LinkExtand {
  url: string,
  type: string,
  stats: {  [key: string]: number }
}

export interface CoinDetail { 
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
    team: Team[],
    description: string
    message: string,
    open_source: boolean,
    hardware_wallet: boolean,
    started_at: string
    development_status: string
    proof_type: string
    org_structure: string
    hash_algorithm: string
    contract: string,
    platform: string,
    links: {[key:string]: string[] | null}
    links_extended: LinkExtand[]
    whitepaper: {
      link: string
      thumbnail: string
    }
    first_data_at: string
    last_data_at: string
  
}

export interface CoinPrice {
  
    id: string,
    name: string,
    symbol: string,
    rank: number,
    circulating_supply: number,
    total_supply: number,
    max_supply: number,
    beta_value: number,
    first_data_at: string,
    last_updated: string,
    quotes: {
      USD: {
        price: number,
        volume_24h: number,
        volume_24h_change_24h: number,
        market_cap: number,
        market_cap_change_24h: number,
        percent_change_15m: number,
        percent_change_30m: number,
        percent_change_1h: number,
        percent_change_6h: number,
        percent_change_12h: number,
        percent_change_24h: number,
        percent_change_7d: number,
        percent_change_30d: number,
        percent_change_1y: number,
        ath_price: number,
        ath_date: string,
        percent_from_price_ath: number
      }
    }
  
}

export interface CoinHistory {  
  time_open: string
  time_close: string
  open: number
  high: number
  low: number
  close: number
  volume: number
  market_cap: number
}

const instance = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/"
})

interface API {
  getCoins: () => Promise<CoinsResponse[]>
  getCoinDetail: (id: string) => Promise<CoinDetail>,
  getPrice: (id: string) => Promise<CoinPrice>
  getHistory: (id: string) => Promise<CoinHistory[]>
}

const CoinAPI: API = {
  getCoins: async () =>  {
    const result = await instance.get('coins');
    return result.data
  },
  getCoinDetail: async (id: string) =>  {
    const result = await instance.get(`coins/${id}`);
    return result.data
  },
  getPrice: async (id: string) =>  {
    const result = await instance.get(`tickers/${id}`);
    return result.data
  },
  getHistory: async (id: string) =>  {
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - 60 * 60 * 24 * 7;
    const result = await instance.get(`coins/${id}/ohlcv/historical`,{
      params: {
        start: startDate,
        end: endDate
      }
    });
    return result.data
  }
}

export default CoinAPI