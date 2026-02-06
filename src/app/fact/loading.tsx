function Loading() {
  return (
    <>
      <main className="main-container space-y-6">
        <header className="space-y-2">
          <h1 className="skeleton w-32 h-8" />
          <p className="skeleton w-full h-4" />
          <p className="skeleton w-2/3 h-4" />

          <div className="flex flex-wrap gap-x-1">
            <span className="skeleton w-20 h-4" />
            <time className="skeleton w-64 h-4" />
          </div>
        </header>
        <section className="space-y-2">
          <h2 className="skeleton h-6 w-1/3" />
          <p className="w-full space-y-1.5">
            <div className="skeleton w-11/12 h-4" />
            <div className="skeleton w-full h-4" />
            <div className="skeleton w-1/2 h-4" />
          </p>
        </section>
        <nav className="mt-12 flex justify-between text-sm">
          <span className="skeleton h-4 w-10" />
          <button className="skeleton h-10 w-24" />
        </nav>
      </main>
    </>
  );
}

export default Loading;
