function CachingDetails() {
  return (
    <section className="space-y-1">
      <h2 className="text-xl font-semibold">
        Page Description
      </h2>
      <p>
        This page demonstrates a cached Server Component using the&nbsp;
        <code className="code-block">
          "use cache"
        </code>
        &nbsp;directive.
        The data is fetched once and stored in the Next.js cache, allowing the result to be reused across requests.
        Because the cached value is shared, the page renders quickly without re-running the data fetch each time.
      </p>
    </section>
  );
}

export default CachingDetails;
