"use client";

import { CoinsType } from "@/utils/CoinType";
import useCoinData from "../../hooks/useCoinData";

export default function List() {
  const { data, isLoading, error } = useCoinData();
  if (isLoading) "..로딩중";
  console.log(data);
  return (
    <div className="p-5 m-auto bg-gray-100">
      <div className="grid grid-cols-[50px,1fr,100px,1fr,1fr,1fr,1fr] gap-5 mb-3 border-b font-bold text-center">
        <div>No</div>
        <div>코인명</div>
        <div>종목</div>
        <div>KWR</div>
        <div>시가총액</div>
        <div>거래량(24H)</div>
        <div>전일대비</div>
      </div>
      {data &&
        data.map((item: CoinsType) => {
          return (
            <div
              key={item.id}
              className={`grid grid-cols-[50px,1fr,100px,1fr,1fr,1fr,1fr] gap-5  h-10 text-center ${
                item.quotes.KRW.percent_change_24h > 0
                  ? `text-red-500`
                  : "text-blue-500"
              }`}
            >
              <div>{item.rank}</div>
              <div>{item.name}</div>
              <div>{item.symbol}</div>
              <div>
                ₩ {Number(item.quotes.KRW.price.toFixed()).toLocaleString()}
              </div>
              <div>
                {(item.quotes.KRW.market_cap / 1000000000000).toFixed(2)}T
              </div>
              <div>
                {(item.quotes.KRW.volume_24h / 1000000000000).toFixed(2)}T
              </div>
              <div>{item.quotes.KRW.percent_change_24h.toFixed(2)}%</div>
            </div>
          );
        })}
    </div>
  );
}
