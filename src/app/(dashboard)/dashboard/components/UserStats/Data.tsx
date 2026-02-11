import { fetchData } from "@/utils/fetchData";

async function Data() {
  const {
    datetimeNow,
    ...data
  } = await fetchData(`${process.env.NEXT_APP_URL}/api/dashboard/user-stats`, 1500);
  console.log(`User stats fetched at: ${datetimeNow}`);

  return (
    <div className="space-y-1 text-sm">
      <div className="flex items-center justify-between gap-x-1">
        <span className="text-gray-400">
          Total
        </span>
        <span className="font-semibold text-gray-100">
          {data.data.total}
        </span>
      </div>

      <div className="flex items-center justify-between gap-x-1">
        <span className="text-gray-400">
          Profit
        </span>
        <span
          className={`font-semibold ${
            data.data.profit > 0 ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {data.data.profit}%
        </span>
      </div>

      <div className="flex items-center justify-between gap-x-1">
        <span className="text-gray-400">
          Value
        </span>
        <span className="font-semibold text-gray-100">
          {data.data.value}
        </span>
      </div>

      <div className="flex items-center justify-between gap-x-1">
        <span className="text-gray-400">
          Trades
        </span>
        <span className="font-semibold text-gray-100">
          {data.data.trades}
        </span>
      </div>

      <div className="flex items-center justify-between gap-x-1">
        <span className="text-gray-400">
          Wins
        </span>
        <span className="font-semibold text-green-400">
          {data.data.wins}
        </span>
      </div>

      <div className="flex items-center justify-between gap-x-1">
        <span className="text-gray-400">
          Losses
        </span>
        <span className="font-semibold text-red-400">
          {data.data.losses}
        </span>
      </div>

      <div className="flex items-center justify-between gap-x-1">
        <span className="text-gray-400">
          Win
          Rate</span>
        <span className="font-semibold text-gray-100">
          {data.data.winRate}%
        </span>
      </div>

      <div className="flex items-center justify-between gap-x-1">
        <span className="text-gray-400">
          Balance
        </span>
        <span className="font-semibold text-gray-100">
          ${data.data.balance}
        </span>
      </div>

      <div className="flex items-center justify-between gap-x-1">
        <span className="text-gray-400">
          Equity
        </span>
        <span className="font-semibold text-gray-100">
          ${data.data.equity}
        </span>
      </div>

      <div className="flex items-center justify-between gap-x-1">
        <span className="text-gray-400">
          Drawdown
        </span>
        <span className="font-semibold text-red-400">
          {data.data.drawdown}%
        </span>
      </div>

      <div className="flex items-center justify-between gap-x-1">
        <span className="text-gray-400">
          Avg
          Trade</span>
        <span className="font-semibold text-gray-100">
          ${data.data.avgTrade}
        </span>
      </div>

      <div className="flex items-center justify-between gap-x-1">
        <span className="text-gray-400">
          Best
          Trade</span>
        <span className="font-semibold text-green-400">
          ${data.data.bestTrade}
        </span>
      </div>

      <div className="flex items-center justify-between gap-x-1">
        <span className="text-gray-400">
          Worst
          Trade</span>
        <span className="font-semibold text-red-400">
          ${data.data.worstTrade}
        </span>
      </div>

      <div className="flex items-center justify-between gap-x-1">
        <span className="text-gray-400">
          Sessions
        </span>
        <span className="font-semibold text-gray-100">
          {data.data.sessions}
        </span>
      </div>

      <div className="flex items-center justify-between gap-x-1">
        <span className="text-gray-400">
          Risk
          Level</span>
        <span className="font-semibold text-gray-100">
          {data.data.riskLevel}
        </span>
      </div>
    </div>
  );
}

export default Data;
