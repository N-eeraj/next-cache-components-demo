import Fact from "./Fact";
import { Suspense } from "react";
import Loading from "./Loading";

function Header() {
  return (
    <header className="space-y-2">
      <h1 className="w-fit text-3xl font-semibold">
        Random Fact
      </h1>

      <Suspense fallback={<Loading />}>
        <Fact />
      </Suspense>
    </header>
  );
}

export default Header;
