import Header from "./components/Header";
import CachedSection from "./components/CachedSection";
import StreamSection from "./components/StreamSection";

function Home() {
  return (
    <main className="main-container space-y-8">
      <Header />
      <StreamSection />
      <CachedSection />
    </main>
  );
}

export default Home;
