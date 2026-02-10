import UserStats from "./UserStats";

function Dashboard() {
  return (
    <section className="relative grid grid-cols-4 grid-rows-2 gap-2 max-h-[70vh] p-4 border border-zinc-700 rounded overflow-y-auto">
      <UserStats />
    </section>
  );
}

export default Dashboard;
