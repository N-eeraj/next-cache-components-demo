import BooksHeader from "@/components/Books/Header";
import Books from "./components/Books";
import CachingDetails from "@/components/Books/CachingDetails";
import Navigation from "@/components/Navigation";

async function HarryPotterBooks() {
  return (
    <main className="main-container space-y-6">
      <BooksHeader
        title="Riordanverse"
        seriesName="Percy Jackson & the Olympians">
        <Books />
      </BooksHeader>

      <CachingDetails />

      <Navigation
        extraLink={{
          href: "/books/harry-potter",
          text: "Harry Potter Books",
        }} />
    </main>
  );
}

export default HarryPotterBooks;
