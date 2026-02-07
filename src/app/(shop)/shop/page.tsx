import Navigation from "@/components/Navigation";
import ShopView from "./components/Shop";

function Shop() {
  return (
    <main className="main-container">
      <h1 className="w-fit text-3xl font-semibold mb-4">
        Shop
      </h1>

      <ShopView />

      <Navigation
        extraLink={{
          href: "/dashboard",
          text: "Dashboard",
        }} />
    </main>
  );
}

export default Shop;
