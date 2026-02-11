import { getRandomUser } from "@/utils/getUser";

export async function GET() {
  const {
    name,
    picture,
  } = getRandomUser();

  const cartCount = Math.floor(Math.random() * 10);

  return Response.json({
    data: {
      name: name ? `${name.first} ${name.last}` : "John Doe",
      picture,
      cartCount,
    },
  });
}
