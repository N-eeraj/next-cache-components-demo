"use client"

import Title from "@/components/Title"
import Link from "next/link"

const refresh = () => window.location.reload()

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
          <button className="min-w-20 px-3 py-2 bg-white hover:bg-gray-300 text-black rounded cursor-pointer duration-200">
            Back to Home
          </button>
        </Link>
        <button
          className="min-w-20 px-3 py-2 hover:bg-white/10 text-gray-100 outline outline-white/20 rounded cursor-pointer duration-200"
          onClick={refresh}>
          Refresh Page
        </button>
      </div>
    </main>
  )
}

export default ErrorPage
