import AppBar from "./AppBar";
import Products from "./Product/List";
import Recommendation from "./Recommendation";

function Shop() {
  return (
    <section className="border border-zinc-700 rounded overflow-hidden">
      <AppBar />
      <div className="p-4">
        <Products />
        <Recommendation />
      </div>
    </section>
  );
}

export default Shop;
