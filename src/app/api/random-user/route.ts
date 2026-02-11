import { getRandomUser } from "@/utils/getUser";

export function GET() {
  const data = getRandomUser();

  return Response.json({
    data,
  });
}
