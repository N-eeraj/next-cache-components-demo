function Loading() {
  return (
    <>
      <div className="flex items-start gap-4 min-w-100 w-fit rounded-xl p-6 bg-gray-900 text-zinc-100 shadow-lg animate-pulse">
        <div className="relative">
          <div className="skeleton size-30 rounded-full" />
          <div className="skeleton absolute -bottom-1 -right-1 h-6 w-6 rounded-full" />
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <div className="skeleton h-5 w-11/12" />
          <div className="skeleton h-4 w-3/7" />
          <div className="skeleton h-3 w-5/6" />
          <div className="skeleton h-3 w-12" />
        </div>
      </div>


      <div className="flex flex-wrap gap-x-1 mt-3">
        <span className="skeleton w-20 h-4" />
        <time className="skeleton w-64 h-4" />
      </div>
    </>
  );
}

export default Loading;
