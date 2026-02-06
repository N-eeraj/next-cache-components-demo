import FactHeader from "@/components/Fact/Header";
import Fact from "./components/Fact";
import StreamingDetails from "@/components/Fact/StreamingDetails";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import Button from "@/components/Button";

async function DogFact() {
  return (
    <main className="main-container space-y-6">
      <FactHeader title="Dog Fact">
        <Fact />
      </FactHeader>

      <StreamingDetails />

      <Navigation>
        <Link href="/fact/cat">
          <Button variant="outlined">
            Cat Fact
          </Button>
        </Link>
      </Navigation>
    </main>
  );
}

export default DogFact;
