import { simulateFetch } from "@/utils/fetchData";
import { cacheLife } from "next/cache";

async function ColumnChart() {
  "use cache";
  cacheLife({
    stale: 30,
    revalidate: 60,
  });

  const {
    datetimeNow,
    data
  } = await simulateFetch(
    Array.from({ length: 7 })
      .map(() => (Math.random() * 100).toFixed(2)),
    5000
  );
  console.log(`Column chart data fetched at: ${datetimeNow}`);

  return (
    <div className="min-h-40 md:col-span-3 flex flex-col gap-y-2.5 rounded-xl bg-zinc-800 p-4 border border-zinc-700">
      <h3 className="text-sm font-semibold text-zinc-100">
        Column Chart
      </h3>

      <div className="flex-1 flex flex-col max-w-full overflow-x-auto">
        <div className="flex flex-1 items-end gap-3">
          {data.map((value, index) => (
            <div
              key={index}
              className="flex flex-col justify-end flex-1 h-full bg-zinc-900 rounded">
              <div
                className="bg-white rounded-t transition-all duration-300"
                style={{ height: `${value}%` }}
                title={`${value}%`} />
              <span className="hidden sm:block p-1 bg-zinc-700 text-[10px] text-center text-white rounded-b">
                {value}%
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-around text-xs text-center text-gray-400">
          {data.map((_, index) => (
            <span key={index}>{index + 1}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ColumnChart;
