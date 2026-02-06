import Button from "@/components/Button";
import Link from "next/link";

function CachedSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">
        Pages with Cached Data
      </h2>

      <p>
        Checkout the following pages, in which dynamic content is cached at build time.
      </p>

      <div className="flex gap-x-2 mt-2">
        <Link href="/books/harry-potter">
          <Button>
            Harry Potter
          </Button>
        </Link>
        <Link href="/books/percy-jackson">
          <Button variant="outlined">
            Percy Jackson
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default CachedSection;
