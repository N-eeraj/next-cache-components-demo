import Link from "next/link";
import Button from "./Button";

interface Props {
  extraLink?: {
    href: string;
    text: string;
  };
}

function Navigation({ extraLink }: Props) {
  return (
    <nav className="mt-12 flex justify-between items-center text-sm">
      <Link
        href="/"
        className="link"
      >
        Home
      </Link>

      
      {!!(extraLink) && (
        <Link href={extraLink.href}>
          <Button variant="outlined">
            {extraLink.text}
          </Button>
        </Link>
      )}
    </nav>
  );
}

export default Navigation;
