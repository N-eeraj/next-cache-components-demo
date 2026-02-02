import Button from "@/components/Button";
import Title from "@/components/Title";
import Link from "next/link";

function NotFound() {
  return (
    <main className="main-container flex flex-col items-center justify-center min-h-[70vh] text-center">
      <Title
        heading="404 - Page Not Found"
        tagline="Sorry, the page you are looking for does not exist" />

      <p className="mb-8 text-gray-300 max-w-lg">
        The page you're trying to access doesn't exist or may have been moved.
        Double-check the URL or use the navigation below to get back on track.
      </p>

      <Link
        href="/"
        className="block w-fit">
        <Button className="min-w-20">
          Back to Home
        </Button>
      </Link>
    </main>
  );
}

export default NotFound;
