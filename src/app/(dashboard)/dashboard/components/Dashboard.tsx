import BarChart from "./BarChart";
import ColumnChart from "./ColumnChart";
import PieChart from "./PieChart";
import UserStats from "./UserStats";

function Dashboard() {
  return (
    <section className="relative grid md:grid-cols-[200px_1fr_1fr_1fr] md:grid-rows-[auto_1fr] gap-4 p-4 border border-zinc-700 rounded">
      <UserStats />
      <BarChart />
      <PieChart />
      <ColumnChart />
    </section>
  );
}

export default Dashboard;
