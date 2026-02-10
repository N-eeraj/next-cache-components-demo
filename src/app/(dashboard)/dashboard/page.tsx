import Navigation from "@/components/Navigation";
import DashboardView from "./components/Dashboard";
import PageDetails from "./components/Details";

function Dashboard() {
  return (
    <main className="main-container space-y-4">
      <h1 className="w-fit text-3xl font-semibold">
        Dashboard
      </h1>

      <DashboardView />
      <PageDetails />

      <Navigation
        extraLink={{
          href: "/shop",
          text: "Shop",
        }} />
    </main>
  );
}

export default Dashboard;
