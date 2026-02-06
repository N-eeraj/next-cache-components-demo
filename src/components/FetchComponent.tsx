import { cacheLife } from "next/cache";

async function fetchData(delay = 0) {
  await new Promise(r => setTimeout(r, delay));
  return new Date().toLocaleString(undefined, {
    dateStyle: "long",
    timeStyle: "short",
  });
}

function BaseComponent({ data }: any) {
  return (
    <time className="block">
      {data}
    </time>
  );
};

interface BaseProps {
  delay?: number;
}

export async function DynamicComponent({ delay }: BaseProps) {
  const data = await fetchData(delay);

  return (
    <BaseComponent data={data} />
  );
}

interface CacheProps extends BaseProps {
  cacheLife?: Parameters<typeof cacheLife>[0];
}

export async function CachedComponent({ cacheLife: cacheLifeProp }: CacheProps) {
  "use cache";
  cacheLife(cacheLifeProp ?? {
    stale: 300,
    revalidate: 900,
    expire: Infinity,
  });

  const data = await fetchData();

  return (
    <BaseComponent data={data} />
  );
}
