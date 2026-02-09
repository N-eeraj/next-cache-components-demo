import Navigation from "@/components/Navigation";
import ShopView from "./components/Shop";
import PageDetails from "./components/Details";

function Shop() {
  return (
    <main className="main-container space-y-4">
      <h1 className="w-fit text-3xl font-semibold">
        Shop
      </h1>

      <ShopView />
      <PageDetails />

      <Navigation
        extraLink={{
          href: "/dashboard",
          text: "Dashboard",
        }} />
    </main>
  );
}

export default Shop;
