import Image from "next/image";

export interface Props {
  title: string;
  cover: string;
}

function Book({ title, cover }: Props) {
  return (
    <div className="group space-y-1">
      <div className="relative min-w-32 w-full max-w-2xs aspect-3/4 overflow-hidden rounded-md">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-contain group-hover:scale-95 group-hover:brightness-105 saturate-40 group-hover:saturate-100 duration-300" />
      </div>
      <strong className="group-hover:text-shadow-xs text-shadow-white/45 duration-300">
        {title}
      </strong>
    </div>
  )
}

export default Book;
