function PageDetails() {
  return (
    <section className="space-y-1">
      <h2 className="text-xl font-semibold">
        Page Description
      </h2>
      <p>
        This page demonstrates a mix of dynamic, streamed data and cached content.
        Dynamic data is loaded with&nbsp;
        <code className="code-block">
          Suspense
        </code>
        &nbsp;to stream the&nbsp;
        <strong>
          profile data + cart
        </strong>
        &nbsp;and the&nbsp;
        <strong>
          recommendation
        </strong>
        &nbsp;sections.
        A loading state is shown only for the suspended sections, and content appears as soon as it is ready.
        The cached&nbsp;
        <strong>
          Products
        </strong>
        &nbsp;section is built using the&nbsp;
        <code className="code-block">
          "use cache"
        </code>
        &nbsp;directive.
        Static and cached parts of the page render instantly and stay interactive, while dynamic sections are fetched and streamed at runtime.

      </p>
    </section>
  );
}

export default PageDetails;
