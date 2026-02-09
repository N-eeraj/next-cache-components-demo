const CARDS_LIST = Array.from({ length: 5 });

function Loading() {
  return (
    <ul className="flex gap-x-3 overflow-x-auto">
      {CARDS_LIST.map((_, index) => (
        <li
          key={index}
          className="w-48 shrink-0">
          <div className="flex flex-col h-full rounded-lg border border-zinc-800 p-4">
            {/* Image */}
            <div className="skeleton relative aspect-square mb-3 overflow-hidden rounded-md" />
      
            {/* Category */}
            <div className="skeleton h-3 w-20 rounded mb-2" />
      
            {/* Title */}
            <div className="skeleton h-4 mb-2.5 w-full rounded" />
      
            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="skeleton h-4 w-10 rounded" />
              <div className="skeleton h-4 w-14 rounded" />
            </div>
      
            {/* Price + Button */}
            <div className="mt-auto flex items-center justify-between gap-2 flex-wrap">
              <div className="skeleton h-6 w-20 rounded" />
              <div className="skeleton h-9 w-full @[172px]:w-24 rounded" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Loading;
