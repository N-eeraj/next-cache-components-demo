function Loading() {
  return (
    <>
      <p className="skeleton w-2/3 h-4 mt-3" />

      <div className="flex flex-wrap gap-x-1 mt-3">
        <span className="skeleton w-20 h-4" />
        <time className="skeleton w-64 h-4" />
      </div>
    </>
  );
}

export default Loading;
