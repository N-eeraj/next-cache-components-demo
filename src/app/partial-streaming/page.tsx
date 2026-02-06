import { Suspense } from "react";
import { DynamicComponent } from "@/components/FetchComponent";

async function PartialStreaming() {
  return (
    <div>
      <h1>
        Partial Streaming
      </h1>
      <Suspense fallback={"Loading..."}>
        <DynamicComponent />
      </Suspense>
    </div>
  );
}

export default PartialStreaming;
