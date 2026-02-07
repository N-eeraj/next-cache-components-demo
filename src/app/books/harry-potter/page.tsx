import BooksHeader from "@/components/Books/Header";
import Books from "./components/Books";
import CachingDetails from "@/components/Books/CachingDetails";
import Navigation from "@/components/Navigation";

async function HarryPotterBooks() {
  return (
    <main className="main-container space-y-6">
      <BooksHeader
        title="Wizarding World"
        seriesName="Harry Potter">
        <Books />
      </BooksHeader>

      <CachingDetails />

      <Navigation
        extraLink={{
          href: "/books/percy-jackson",
          text: "Percy Jackson Books",
        }} />
    </main>
  );
}

export default HarryPotterBooks;
