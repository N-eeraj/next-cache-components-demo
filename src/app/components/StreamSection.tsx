import Button from "@/components/Button";
import Link from "next/link";

function StreamSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">
        Streamed Pages
      </h2>

      <p>
        Checkout the following pages, which are streamed in dynamically.
      </p>

      <div className="flex gap-x-2 mt-2">
        <Link href="/fact/dog">
          <Button>
            Dog Fact
          </Button>
        </Link>
        <Link href="/fact/cat">
          <Button variant="outlined">
            Cat Fact
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default StreamSection;
