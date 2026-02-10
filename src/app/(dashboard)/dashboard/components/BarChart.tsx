import { simulateFetch } from "@/utils/fetchData";
import { cacheLife } from "next/cache";

async function BarChart() {
  "use cache";
  cacheLife({
    stale: 30,
    revalidate: 60,
  });

  const {
    datetimeNow,
    data: {
      x,
      y,
    },
  } = await simulateFetch({
    x: (Math.random() * 100).toFixed(2),
    y: (Math.random() * 100).toFixed(2),
  }, 3000);
  console.log(`Bar chart data fetched at: ${datetimeNow}`);

  return (
    <div className="md:col-span-2 p-4 bg-gray-800 border border-gray-700 rounded-xl">
      <h3 className="mb-4 text-sm font-semibold text-gray-100">
        Bar Chart
      </h3>

      <div className="space-y-4">
        <div>
          <div className="mb-1 flex justify-between text-xs text-gray-400">
            <span>
              X Value
            </span>
            <span>
              {x}%
            </span>
          </div>

          <div className="h-3 w-full rounded bg-gray-700 overflow-hidden">
            <div
              className="h-full rounded bg-blue-500"
              style={{ width: `${x}%` }}
            />
          </div>
        </div>

        <div>
          <div className="mb-1 flex justify-between text-xs text-gray-400">
            <span>
              Y Value
            </span>
            <span>
              {y}%
            </span>
          </div>

          <div className="h-3 w-full rounded bg-gray-700 overflow-hidden">
            <div
              className="h-full rounded bg-green-500"
              style={{ width: `${y}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarChart;
