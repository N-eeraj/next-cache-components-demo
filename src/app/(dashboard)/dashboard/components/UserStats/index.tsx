import { Suspense } from "react";
import Data from "./Data";
import Loading from "./Loading";

function UserStats() {

  return (
    <div className="row-span-2 rounded-xl bg-gray-800 p-5 shadow-lg border border-gray-700">
      <h2 className="mb-4 text-lg font-semibold text-gray-100">
        User Stats
      </h2>

      <Suspense fallback={<Loading />}>
        <Data />
      </Suspense>
    </div>
  );
}

export default UserStats;
