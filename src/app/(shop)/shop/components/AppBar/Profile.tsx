import cart from "@/assets/icons/cart.svg";
import { fetchData } from "@/utils/fetchData";
import Image from "next/image";

async function Profile() {
  const {
    datetimeNow,
    ...data
  } = await fetchData(`${process.env.NEXT_APP_URL}/api/shop/profile`);
  console.log(`Shop profile data fetched at: ${datetimeNow}`);

  return (
    <>
      <div className="relative pr-1.5">
        <Image
          src={cart.src}
          alt="cart"
          width={18}
          height={18} />
        <span className="absolute -top-2 -right-2 grid place-content-center size-4 p-0.5 bg-green-600 text-[10px] rounded-full">
          {data.data.cartCount}
        </span>
      </div>
      <div className="flex items-center gap-x-1">
        <Image
          src={data.data.picture}
          alt={data.data.name}
          width={24}
          height={24}
          className="rounded-full" />
        <strong className="hidden sm:block">
          {data.data.name}
        </strong>
      </div>
    </>
  );
}

export default Profile;
