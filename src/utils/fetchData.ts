export async function fetchData(endpoint: string, delay: number = 0): Promise<{
  datetimeNow: string;
  [key: string]: any;
}> {
  if (delay) {
    await new Promise(r => setTimeout(r, delay));
  }
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

export async function simulateFetch<T>(resource: T, delay: number): Promise<{
  data: T;
  datetimeNow: string;
}> {
  await new Promise(r => setTimeout(r, delay));
  const datetimeNow = new Date().toLocaleString(undefined, {
    dateStyle: "long",
    timeStyle: "short",
  });
  return {
    data: resource,
    datetimeNow,
  };
}
