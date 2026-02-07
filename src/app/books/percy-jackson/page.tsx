import BooksHeader from "@/components/Books/Header";
import Books from "./components/Books";
import CachingDetails from "@/components/Books/CachingDetails";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import Button from "@/components/Button";

async function HarryPotterBooks() {
  return (
    <main className="main-container space-y-6">
      <BooksHeader
        title="Riordanverse"
        seriesName="Percy Jackson & the Olympians">
        <Books />
      </BooksHeader>

      <CachingDetails />

      <Navigation>
        <Link href="/books/harry-potter">
          <Button variant="outlined">
            Harry Potter Books
          </Button>
        </Link>
      </Navigation>
    </main>
  );
}

export default HarryPotterBooks;
