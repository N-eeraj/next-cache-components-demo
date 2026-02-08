import { simulateFetch } from "@/utils/fetchData";
import Product, { type Props as ProductType } from ".";

const PRODUCTS = [
  {
    id: 1,
    name: "Smart Fitness Watch Pro",
    image: "/products/smart-fitness-watch-pro.jpg",
    price: 149.99,
    rating: 4.6,
    reviewCount: 212,
    category: "Smart Devices",
  },
  {
    id: 2,
    name: "Smart Home Security Camera",
    image: "/products/smart-home-security-camera.jpg",
    price: 89.99,
    rating: 4.4,
    reviewCount: 178,
    category: "Smart Devices",
  },
  {
    id: 3,
    name: "Voice Assistant Speaker Mini",
    image: "/products/voice-assistant-speaker-mini.jpg",
    price: 49.99,
    rating: 4.3,
    reviewCount: 301,
    category: "Smart Devices",
  },
  {
    id: 4,
    name: "Smart Light Bulb",
    image: "/products/smart-light-bulb.webp",
    price: 34.99,
    rating: 4.5,
    reviewCount: 95,
    category: "Smart Devices",
  },
  {
    id: 5,
    name: "Laptop Pro",
    image: "/products/laptop-pro.webp",
    price: 199.99,
    rating: 4.7,
    reviewCount: 134,
    category: "Smart Devices",
  },
  {
    id: 6,
    name: "Smart Door Lock",
    image: "/products/smart-door-lock.webp",
    price: 169.99,
    rating: 4.4,
    reviewCount: 88,
    category: "Smart Devices",
  },
  {
    id: 7,
    name: "Wireless Noise Cancelling Headphones",
    image: "/products/wireless-noise-cancelling-headphones.webp",
    price: 129.99,
    rating: 4.5,
    reviewCount: 264,
    category: "Electronics",
  },
  {
    id: 8,
    name: "Portable Bluetooth Speaker",
    image: "/products/portable-bluetooth-speaker.jpg",
    price: 59.99,
    rating: 4.2,
    reviewCount: 143,
    category: "Electronics",
  },
  {
    id: 9,
    name: "1080p Webcam",
    image: "/products/1080p-webcam.jpg",
    price: 39.99,
    rating: 4.1,
    reviewCount: 87,
    category: "Electronics",
  },
  {
    id: 10,
    name: "Mechanical Gaming Keyboard",
    image: "/products/mechanical-gaming-keyboard.jpg",
    price: 89.99,
    rating: 4.6,
    reviewCount: 198,
    category: "Electronics",
  },
  {
    id: 11,
    name: "Classic Cotton T-Shirt",
    image: "/products/classic-cotton-t-shirt.webp",
    price: 19.99,
    rating: 4.3,
    reviewCount: 54,
    category: "Clothing",
  },
  {
    id: 12,
    name: "Slim Fit Denim Jeans",
    image: "/products/slim-fit-denim-jeans.webp",
    price: 49.99,
    rating: 4.5,
    reviewCount: 112,
    category: "Clothing",
  },
] as const satisfies Array<ProductType>;

async function ProductsList() {
  "use cache";

  const {
    datetimeNow,
    data,
  } = await simulateFetch(PRODUCTS, 1000);
  console.log(`Shop products data fetched at: ${datetimeNow}`);

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-6">
      {data.map((product) => (
        <li key={product.id}>
          <Product {...product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;
