import { fetchData } from "@/utils/fetchData";

export async function GET() {
  const randomUserData = await fetchData("https://randomuser.me/api/");
  const {
    name,
    picture,
  } = randomUserData?.results?.[0];

  const cartCount = Math.floor(Math.random() * 10);

  return Response.json({
    data: {
      name: `${name.first} ${name.last}`,
      picture: picture.thumbnail,
      cartCount,
    },
  });
}
