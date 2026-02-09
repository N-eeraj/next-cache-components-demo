import { Suspense } from "react";
import Profile from "./Profile";
import Loader from "./Loader";

function AppBar() {
  return (
    <div className="sticky top-0 left-0 right-0 flex items-center gap-x-3 min-h-10 p-2 bg-slate-800 z-10">
      <h2 className="mr-auto text-xl font-semibold">
        Store Name
      </h2>

      <Suspense fallback={<Loader />}>
        <Profile />
      </Suspense>
    </div>
  );
}

export default AppBar;
