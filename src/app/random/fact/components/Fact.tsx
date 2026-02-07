import FetchedAt from "@/components/FetchedAt";
import { fetchData } from "@/utils/fetchData";

async function Fact() {
  const {
    datetimeNow,
    ...data
  } = await fetchData("https://uselessfacts.jsph.pl/api/v2/facts/random")

  return (
    <>
      <p>
        {data?.text ?? "Unable to fetch fact"}
      </p>
      <FetchedAt datetimeNow={datetimeNow} />
    </>
  );
}

export default Fact;
