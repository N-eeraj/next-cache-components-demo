import { simulateFetch } from "@/utils/fetchData";
import { cacheLife } from "next/cache";

async function PieChart() {
  "use cache";
  cacheLife({
    stale: 60,
    revalidate: 120,
  });

  const {
    datetimeNow,
    data
  } = await simulateFetch((Math.random() * 100).toFixed(2), 5000);
  console.log(`Pie chart data fetched at: ${datetimeNow}`);

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative h-32 w-32 rounded-full"
        style={{
          background: `conic-gradient(
            #22c55e 0% ${data}%,
            #374151 ${data}% 100%
          )`,
        }}
      >
        <div className="absolute inset-4 rounded-full bg-gray-800 flex items-center justify-center">
          <span className="text-sm font-semibold text-gray-100">
            {data}%
          </span>
        </div>
      </div>

      <span className="text-xs text-gray-data0">
        Completion
      </span>
    </div>
  );
}

export default PieChart;
