interface Props {
  fact?: string
  datetimeNow: string
}

function Fact({ fact, datetimeNow }: Props) {
  return (
    <>
      <p>
        {fact ?? "Unable to fetch fact"}
      </p>
      <div className="wrap-break-word">
        <span className="whitespace-nowrap">
          Fetched at:&nbsp;
        </span>
        <time className="font-mono text-gray-100 whitespace-nowrap">
          {datetimeNow}
        </time>
      </div>
    </>
  );
}

export default Fact;
