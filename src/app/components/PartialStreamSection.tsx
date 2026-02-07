import Button from "@/components/Button";
import Link from "next/link";

function PartialStreamSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">
        Pages with Partial Stream
      </h2>

      <p>
        Checkout the following pages, where the dynamic data is streamed in on demand while the static portion is pre-rendered.
      </p>

      <div className="flex gap-x-2 mt-2">
        <Link href="/random/fact">
          <Button>
            Random Fact
          </Button>
        </Link>
        <Link href="/random/user">
          <Button variant="outlined">
            Random User
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default PartialStreamSection;
