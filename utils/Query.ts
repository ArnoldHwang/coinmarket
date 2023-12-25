import axios from "axios";

const CoinList = async () => {
  return await axios.get("https://api.coinpaprika.com/v1/tickers?quotes=KRW");
};

export { CoinList };
