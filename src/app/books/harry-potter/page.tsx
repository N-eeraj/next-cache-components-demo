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
        title="Wizarding World"
        seriesName="Harry Potter">
        <Books />
      </BooksHeader>

      <CachingDetails />

      <Navigation>
        <Link href="/books/percy-jackson">
          <Button variant="outlined">
            Percy Jackson Books
          </Button>
        </Link>
      </Navigation>
    </main>
  );
}

export default HarryPotterBooks;
