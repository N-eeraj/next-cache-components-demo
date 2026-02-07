import { Suspense } from "react";
import Profile from "./Profile";
import Loader from "./Loader";

function AppBar() {
  return (
    <div className="flex items-center gap-x-3 min-h-10 p-2 bg-slate-800">
      <strong className="mr-auto">
        Store Name
      </strong>

      <Suspense fallback={<Loader />}>
        <Profile />
      </Suspense>
    </div>
  );
}

export default AppBar;
