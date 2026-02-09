import { Suspense } from "react";
import AppBar from "./AppBar";
import Products from "./Product/List";
import Recommendation from "./Recommendation";
import RecommendationLoading from "./Recommendation/Loading";

function Shop() {
  return (
    <section className="relative max-h-[70vh] pb-4 border border-zinc-700 rounded overflow-y-auto">
      <AppBar />

      <section className="space-y-2 px-4 py-2">
        <h3 className="font-semibold">
          Browse Products
        </h3>
        <Products />
      </section>

      <section className="space-y-2 px-4 py-2">
        <h3 className="font-semibold">
          Recommended for you
        </h3>
        <Suspense fallback={<RecommendationLoading />}>
          <Recommendation />
        </Suspense>
      </section>
    </section>
  );
}

export default Shop;
