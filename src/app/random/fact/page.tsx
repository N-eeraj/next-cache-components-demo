import Navigation from "@/components/Navigation";
import Link from "next/link";
import Button from "@/components/Button";
import SuspenseDetails from "@/components/SuspenseDetails";
import Header from "./components/Header";

function RandomFact() {
  return (
    <main className="main-container space-y-6">
      <Header />

      <SuspenseDetails />

      <Navigation>
        <Link href="/random/user">
          <Button variant="outlined">
            Random User
          </Button>
        </Link>
      </Navigation>
    </main>
  );
}

export default RandomFact;
