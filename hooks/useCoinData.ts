import useSWR from "swr";
import { CoinList } from "../utils/Query";

export default function useCoinData() {
  const { data, error, isLoading } = useSWR("Coin_List", CoinList);

  return {
    data: data?.data.slice(0, 100),
    error: error,
    isLoading: isLoading,
  };
}
