import { fetchData } from "@/utils/fetchData";
import Product, {
  type Props as ProductType,
} from "../Product";

async function Recommendation() {
  const {
    datetimeNow,
    ...data
  } = await fetchData(`${process.env.NEXT_APP_URL}/api/shop/recommendation`, 3000);
  console.log(`Shop recommendation data fetched at: ${datetimeNow}`);
  const products = (data?.data ?? []) as Array<ProductType>;

  return (
    <ul className="flex gap-x-3 overflow-x-auto">
      {products.map((product) => (
        <li
          key={product.id}
          className="w-48 shrink-0">
          <Product {...product} />
        </li>
      ))}
    </ul>
  );
}

export default Recommendation;
