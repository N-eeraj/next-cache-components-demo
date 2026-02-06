import FactView from "@/components/Fact";
import { fetchData } from "@/utils/fetchData";

async function Fact() {
  const {
    datetimeNow,
    ...data
  } = await fetchData("https://meowfacts.herokuapp.com/");
  const [fact] = data.data;

  return (
    <>
      <FactView
        fact={fact}
        datetimeNow={datetimeNow} />
    </>
  );
}

export default Fact;
