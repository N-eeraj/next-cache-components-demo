import Book, {
  type Props as BookType
} from "./index";

interface Props {
  books: Array<BookType>;
}

function BookList({ books }: Props) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4">
      {books.map((book, index) => (
        <li key={index}>
          <Book {...book} />
        </li>
      ))}
    </ul>
  );
}

export default BookList;
