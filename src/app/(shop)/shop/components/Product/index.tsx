import Button from "@/components/Button";
import Image from "next/image";

export interface Props {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviewCount: number;
  category: string;
}

function Product({ name, image, price, rating, reviewCount, category }: Props) {
  return (
    <div className="flex flex-col h-full rounded-lg border border-zinc-800 bg-zinc-900 p-4 shadow-sm">
      {/* Image */}
      <div className="relative aspect-square mb-3 overflow-hidden rounded-md bg-white">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            objectFit="contain"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-zinc-500">
            No Image
          </div>
        )}
      </div>

      {/* Category */}
      <span className="text-xs text-zinc-400">
        {category}
      </span>

      {/* Name */}
      <h3 className="mt-1 line-clamp-2 font-medium text-zinc-100">
        {name}
      </h3>

      {/* Rating */}
      <div className="mt-1 flex items-center gap-1 text-sm mb-2.5">
        <span className="text-yellow-400">★</span>
        <span className="text-zinc-200">{rating}</span>
        <span className="text-zinc-500">
          ({reviewCount})
        </span>
      </div>

      {/* Price + CTA */}
      <div className="@container mt-auto flex items-center justify-between gap-2 flex-wrap">
        <span className="text-lg font-semibold text-zinc-100">
          ${price.toFixed(2)}
        </span>

        <Button className="w-full @[172px]:w-fit py-1.5!">
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default Product;
