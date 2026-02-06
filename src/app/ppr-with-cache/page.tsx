import { DynamicComponent, CachedComponent } from "@/components/FetchComponent";
import { Suspense } from "react";

function CachedAndPPR() {
  return (
    <div>
      <h1>
        Full Page Streaming
      </h1>

      <Suspense fallback={"Loading..."}>
        <DynamicComponent />
      </Suspense>

      <CachedComponent />
    </div>
  );
}

export default CachedAndPPR;
