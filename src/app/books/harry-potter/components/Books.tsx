import type { Props as Book } from "@/components/Books";
import BookList from "@/components/Books/List";
import FetchedAt from "@/components/FetchedAt";
import { simulateFetch } from "@/utils/fetchData";
import { cacheLife } from "next/cache";

const HARRY_POTTER_BOOKS = [
  {
    title: "Harry Potter and the Philosopher’s Stone",
    cover: "https://media.harrypotterfanzone.com/philosophers-stone-uk-childrens-edition-2014-700x0-c-default.jpg",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    cover: "https://media.harrypotterfanzone.com/chamber-of-secrets-uk-childrens-edition-2014-700x0-c-default.jpg",
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    cover: "https://media.harrypotterfanzone.com/prisoner-of-azkaban-uk-childrens-edition-2014-700x0-c-default.jpg",
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    cover: "https://media.harrypotterfanzone.com/goblet-of-fire-uk-childrens-edition-2014-700x0-c-default.jpg",
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    cover: "https://media.harrypotterfanzone.com/order-of-the-phoenix-uk-childrens-edition-2014-700x0-c-default.jpg",
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    cover: "https://media.harrypotterfanzone.com/half-blood-prince-uk-childrens-edition-2014-700x0-c-default.jpg",
  },
  {
    title: "Harry Potter and the Deathly Hallows",
    cover: "https://media.harrypotterfanzone.com/deathly-hallows-uk-childrens-edition-2014-700x0-c-default.jpg",
  },
] as const satisfies Array<Book>;

async function Books() {
  "use cache";
  cacheLife("max");

  const {
    datetimeNow,
    data: books,
  } = await simulateFetch(HARRY_POTTER_BOOKS, 3000);

  return (
    <>
      <BookList books={books} />
      <FetchedAt datetimeNow={datetimeNow} />
    </>
  );
}

export default Books;
