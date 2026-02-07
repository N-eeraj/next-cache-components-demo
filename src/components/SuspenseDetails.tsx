function SuspenseDetails() {
  return (
    <section className="space-y-1">
      <h2 className="text-xl font-semibold">
        Page Description
      </h2>
      <p>
        This page uses&nbsp;
        <code className="code-block">
          Suspense
        </code>
        &nbsp;to stream dynamic content.
        The static parts of the page are rendered instantly and remain interactive, while the dynamic section is fetched at runtime.
        A loading state is displayed only for the suspended section, and the content is streamed in as soon as it becomes available.
      </p>
    </section>
  );
}

export default SuspenseDetails;
