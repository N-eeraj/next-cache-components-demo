import FactView from "@/components/Fact";
import { fetchData } from "@/utils/fetchData";

async function Fact() {
  const {
    datetimeNow,
    ...data
  } = await fetchData("https://dogapi.dog/api/v2/facts");
  const fact = data?.data?.[0]?.attributes?.body;

  return (
    <>
      <FactView
        fact={fact}
        datetimeNow={datetimeNow} />
    </>
  );
}

export default Fact;
