const PRODUCTS = [
] as const;

export async function GET() {
  return Response.json({ data: PRODUCTS });
}
