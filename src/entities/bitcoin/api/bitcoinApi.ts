import axios from "axios";

export const bitcoinApi = {
  getBitcoinPrice: async () => {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true';
    const resp  = await axios.get(url);
    return resp.data.bitcoin;
  }
}