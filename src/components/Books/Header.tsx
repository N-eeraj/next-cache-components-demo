import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string;
  seriesName: string;
}

function BooksHeader({ title, seriesName, children }: Props) {
  return (
    <header className="space-y-2">
      <h1 className="w-fit text-3xl font-semibold">
        {title}
      </h1>

      <p>
        Explore the books from the {seriesName} series.
      </p>

      {children}
    </header>
  );
}

export default BooksHeader;
