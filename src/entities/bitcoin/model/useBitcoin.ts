import { useEffect, useState } from "react"
import type { CryptoData } from "./types";
import { bitcoinApi } from '../api/bitcoinApi';

export const useBitcoin = () => {
   const [data, setData] = useState<CryptoData | null>(null);

   useEffect(() => {
    const FETCH_INTERVAL = 10 * 60 * 1000;
    
    const getBitcoin = async () => {
      try {
        const result = await bitcoinApi.getBitcoinPrice();

        setData({
          price: result.usd,
          change24h: result.usd_24h_change
        });
      } catch (error) {
        console.log('getBitcoin', error);
      }
    }

    getBitcoin();

    const interval = setInterval(getBitcoin, FETCH_INTERVAL);
    return () => clearInterval(interval);
   }, []);

   return data;
}