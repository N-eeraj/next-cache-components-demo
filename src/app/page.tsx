import Header from "./components/Header";
import CachedSection from "./components/CachedSection";
import StreamSection from "./components/StreamSection";
import PartialStreamSection from "./components/PartialStreamSection";
import CacheAndPartialStreamSection from "./components/CacheAndPartialStreamSection";

function Home() {
  return (
    <main className="main-container space-y-8">
      <Header />
      <StreamSection />
      <CachedSection />
      <PartialStreamSection />
      <CacheAndPartialStreamSection />
    </main>
  );
}

export default Home;
