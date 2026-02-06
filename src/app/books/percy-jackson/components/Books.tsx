import type { Props as Book } from "@/components/Books";
import BookList from "@/components/Books/List";
import FetchedAt from "@/components/FetchedAt";
import { simulateFetch } from "@/utils/fetchData";
import { cacheLife } from "next/cache";

const PERCY_JACKSON_BOOKS = [
  {
    title: "The Lightning Thief",
    cover: "https://m.media-amazon.com/images/I/91RQ5d-eIqL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Sea of Monsters",
    cover: "https://m.media-amazon.com/images/I/91YMTyxpWLL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Titan’s Curse",
    cover: "https://5.imimg.com/data5/SELLER/Default/2023/9/348499712/BG/CS/JM/121408955/pic-2-500x500.jpg",
  },
  {
    title: "The Battle of the Labyrinth",
    cover: "https://m.media-amazon.com/images/I/91GjM4M5DeL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Last Olympian",
    cover: "https://www.readriordan.com/content/uploads/2017/09/PR_ReadRiordan_PercyJackson_TheLastOlympian.jpg",
  },
] as const satisfies Array<Book>;

async function Books() {
  "use cache";
  cacheLife("max");

  const {
    datetimeNow,
    data: books,
  } = await simulateFetch(PERCY_JACKSON_BOOKS, 1000);

  return (
    <>
      <BookList books={books} />
      <FetchedAt datetimeNow={datetimeNow} />
    </>
  );
}

export default Books;
