function StreamingDetails() {
  return (
    <section className="space-y-1">
      <h2 className="text-xl font-semibold">
        Page Description
      </h2>
      <p>
        This page fetches its data at runtime. Because the route includes a&nbsp;
        <code className="code-block">loading.tsx</code>
        &nbsp;file, Next.js can start rendering the page immediately.
        While the server is still fetching data, a loading UI is shown, and the page is streamed in as soon as it is ready.
      </p>
    </section>
  );
}

export default StreamingDetails;
