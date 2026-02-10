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
        &nbsp;to stream the dynamic data to be fetched on every page visit such as the data to be shown for the logged in user.
        A loading state is shown only for the suspended sections, and content appears as soon as it is ready.
        The data to be shared among all the users are cached and built using the&nbsp;
        <code className="code-block">
          "use cache"
        </code>
        &nbsp;directive which is revalidated after an interval.
        Static and cached parts of the page render instantly and stay interactive, while dynamic sections are fetched and streamed at runtime.
      </p>
    </section>
  );
}

export default PageDetails;
