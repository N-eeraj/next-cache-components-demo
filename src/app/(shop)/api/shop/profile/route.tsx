import { fetchData } from "@/utils/fetchData";

export async function GET() {
  const randomUserData = await fetchData("https://randomuser.me/api");
  const {
    name,
    picture,
  } = (randomUserData?.results ?? [])?.[0] ?? {};

  const cartCount = Math.floor(Math.random() * 10);

  return Response.json({
    data: {
      name: name ? `${name.first} ${name.last}` : "John Doe",
      picture: picture?.thumbnail ?? "https://placehold.co/128x128/ccc/111",
      cartCount,
    },
  });
}
