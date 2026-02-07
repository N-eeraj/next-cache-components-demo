import Header from "./components/Header";
import CachedSection from "./components/CachedSection";
import StreamSection from "./components/StreamSection";
import PartialStreamSection from "./components/PartialStreamSection";

function Home() {
  return (
    <main className="main-container space-y-8">
      <Header />
      <StreamSection />
      <CachedSection />
      <PartialStreamSection />
    </main>
  );
}

export default Home;
