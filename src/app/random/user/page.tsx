import Navigation from "@/components/Navigation";
import SuspenseDetails from "@/components/SuspenseDetails";
import Header from "./components/Header";

function RandomFact() {
  return (
    <main className="main-container space-y-6">
      <Header />

      <SuspenseDetails />

      <Navigation
        extraLink={{
          href: "/random/fact",
          text: "Random Fact",
        }} />
    </main>
  );
}

export default RandomFact;
