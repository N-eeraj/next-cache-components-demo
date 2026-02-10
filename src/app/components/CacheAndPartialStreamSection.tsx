import Button from "@/components/Button";
import Link from "next/link";

function CacheAndPartialStreamSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">
        Pages with Caching and Partial Stream
      </h2>

      <p>
        Checkout the following pages, where the cacheable data is cached and dynamic data is streamed in on demand.
      </p>

      <div className="flex gap-x-2 mt-2">
        <Link href="/dashboard">
          <Button>
            Dashboard
          </Button>
        </Link>
        <Link href="/shop">
          <Button variant="outlined">
            Shop
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default CacheAndPartialStreamSection;
