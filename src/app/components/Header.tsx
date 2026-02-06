function Header() {
  return (
    <header className="relative space-y-4">
      <h1 className="text-3xl font-bold tracking-tight text-gray-100">
        Pure Static Page
      </h1>

      <p className="text-gray-300">
        This is a static informational page. It contains fixed content that does not rely on client-side interactivity or runtime data fetching.
        The page is generated at build time and served as plain HTML, making it fast, predictable, and easy to cache.
      </p>

      <p className="text-gray-300">
        Static pages like this are commonly used for documentation, landing pages, and general information where content changes infrequently and performance is a priority.
      </p>
    </header>
  );
}

export default Header;
