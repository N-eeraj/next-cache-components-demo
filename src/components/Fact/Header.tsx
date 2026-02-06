import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string
}

function FactHeader({ title, children }: Props) {
  return (
    <header className="space-y-2">
      <h1 className="w-fit text-3xl font-semibold">
        {title}
      </h1>

      {children}
    </header>
  );
}

export default FactHeader;
