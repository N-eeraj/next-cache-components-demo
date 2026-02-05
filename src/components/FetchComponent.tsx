async function fetchData() {
  await new Promise(r => setTimeout(r, 1000))
  return new Date().toLocaleString(undefined, {
    dateStyle: "long",
    timeStyle: "short",
  })
}

function BaseComponent({ data }: any) {
  return (
    <time>
      {data}
    </time>
  )
}

export async function DynamicComponent() {
  const data = await fetchData()

  return (
    <BaseComponent data={data} />
  )
}

export async function CachedComponent() {
  "use cache"
  const data = await fetchData()

  return (
    <BaseComponent data={data} />
  )
}
