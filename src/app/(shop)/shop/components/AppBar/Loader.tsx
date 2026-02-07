function Loader() {
  return (
    <div className="flex items-center gap-x-4">
      <div className="relative pr-1.5">
        <div className="skeleton size-4.5 rounded" />
        <div className="skeleton absolute -top-2 -right-2 h-4 w-4 rounded-full" />
      </div>

      <div className="flex items-center gap-x-1">
        <div className="skeleton size-6 rounded-full" />
        <div className="skeleton hidden sm:block h-4 w-20 rounded" />
      </div>
    </div>
  );
}

export default Loader;
