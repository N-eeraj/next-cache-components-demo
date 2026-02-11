export async function GET() {
  const data = {
    total: Math.round(Math.random() * 1000),
    profit: +(Math.random() * 10).toFixed(2) * (Math.random() > 0.5 ? 1 : -1),
    value: Math.round(Math.random() * 300),
    trades: Math.floor(Math.random() * 200),
    wins: Math.floor(Math.random() * 120),
    losses: Math.floor(Math.random() * 120),
    winRate: +(Math.random() * 100).toFixed(1),
    balance: +(Math.random() * 5000).toFixed(2),
    equity: +(Math.random() * 6000).toFixed(2),
    drawdown: +(Math.random() * 30).toFixed(2),
    avgTrade: +(Math.random() * 50).toFixed(2),
    bestTrade: +(Math.random() * 200).toFixed(2),
    worstTrade: -(Math.random() * 150).toFixed(2),
    sessions: Math.floor(Math.random() * 90),
    riskLevel: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)],
  };
  return Response.json({ data });
}
