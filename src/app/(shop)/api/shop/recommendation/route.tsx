const RECOMMENDATION = [
] as const;

export async function GET() {
  return Response.json({ data: RECOMMENDATION });
}
