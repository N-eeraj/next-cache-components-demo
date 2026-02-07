import FactHeader from "@/components/Fact/Header";
import Fact from "./components/Fact";
import StreamingDetails from "@/components/Fact/StreamingDetails";
import Navigation from "@/components/Navigation";

async function DogFact() {
  return (
    <main className="main-container space-y-6">
      <FactHeader title="Dog Fact">
        <Fact />
      </FactHeader>

      <StreamingDetails />

      <Navigation
        extraLink={{
          href: "/fact/cat",
          text: "Cat Fact",
        }} />
    </main>
  );
}

export default DogFact;
