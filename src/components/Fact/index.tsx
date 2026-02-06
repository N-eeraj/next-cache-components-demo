import FetchedAt from "@/components/FetchedAt";

interface Props {
  fact?: string;
  datetimeNow: string;
}

function Fact({ fact, datetimeNow }: Props) {
  return (
    <>
      <p>
        {fact ?? "Unable to fetch fact"}
      </p>
      <FetchedAt datetimeNow={datetimeNow} />
    </>
  );
}

export default Fact;
