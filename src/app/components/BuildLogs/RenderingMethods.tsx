const RENDERING_METHODS = [
  {
    symbol: "○",
    label: "Static",
    description: "prerendered as static content",
  },
  {
    symbol: "◐",
    label: "Partial Prerender",
    description: "prerendered as static HTML with dynamic server-streamed content",
  },
  // {
  //   symbol: "●",
  //   label: "SSG",
  //   description: "prerendered as static HTML (uses generateStaticParams)",
  // },
  {
    symbol: "ƒ",
    label: "Dynamic",
    description: "server-rendered on demand",
  },
] as const;

function RenderingMethods() {
  return (
    <table className="text-sm font-mono">
      <tbody>
        {RENDERING_METHODS.map(({ symbol, label, description }) => (
          <tr key={symbol}>
            <td className="pl-0 pr-3 whitespace-nowrap">
              {symbol}
            </td>
            <td className="pl-0 pr-3 whitespace-nowrap">
              ({label})
            </td>
            <td className="px-0 whitespace-nowrap">
              {description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RenderingMethods;
