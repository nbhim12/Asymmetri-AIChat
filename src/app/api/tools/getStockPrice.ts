import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const symbol = searchParams.get("symbol");
  if (!symbol) return NextResponse.json({ error: "Missing symbol" }, { status: 400 });

  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${encodeURIComponent(symbol)}&apikey=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) return NextResponse.json({ error: "Stock API error" }, { status: 500 });
  const data = await res.json();
  const quote = data["Global Quote"];
  if (!quote) return NextResponse.json({ error: "No data found" }, { status: 404 });
  return NextResponse.json({
    symbol: quote["01. symbol"],
    price: quote["05. price"],
    change: quote["09. change"],
    percent: quote["10. change percent"],
  });
}
