"use client";

import Button from "@/components/Button";
import Title from "@/components/Title";
import Link from "next/link";

const refresh = () => window.location.reload();

function ErrorPage() {
  return (
    <main className="main-container flex flex-col items-center justify-center min-h-[70vh] text-center">
      <Title
        heading="500 - Something Went Wrong"
        tagline="Oops! Something went wrong on our end"
      />

      <p className="mb-8 text-gray-300 max-w-lg">
        An unexpected error occurred while loading this page. Try refreshing the page or go back home.
      </p>

      <div className="flex items-center gap-x-3">
        <Link
          href="/"
          className="block w-fit">
          <Button className="min-w-20">
            Back to Home
          </Button>
        </Link>
        <Button
          variant="outlined"
          className="min-w-20"
          onClick={refresh}>
          Refresh Page
        </Button>
      </div>
    </main>
  );
}

export default ErrorPage;
