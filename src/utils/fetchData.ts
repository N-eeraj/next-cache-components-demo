export async function fetchData(endpoint: string): Promise<{
  datetimeNow: string
  [key: string]: any
}> {
  const response = await fetch(endpoint);
  const data = await response.json();
  const datetimeNow = new Date().toLocaleString(undefined, {
    dateStyle: "long",
    timeStyle: "short",
  });
  return {
    ...data,
    datetimeNow,
  };
}
