import FactHeader from "@/components/Fact/Header";
import Fact from "./components/Fact";
import StreamingDetails from "@/components/Fact/StreamingDetails";
import Navigation from "@/components/Navigation";

async function CatFact() {
  return (
    <main className="main-container space-y-6">
      <FactHeader title="Cat Fact">
        <Fact />
      </FactHeader>

      <StreamingDetails />

      <Navigation
        extraLink={{
          href: "/fact/dog",
          text: "Dog Fact",
        }} />
      </main>
  );
}

export default CatFact;
