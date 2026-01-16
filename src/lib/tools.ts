export async function getWeather(location: string) {
  const res = await fetch(`/api/tools/getWeather?location=${encodeURIComponent(location)}`);
  if (!res.ok) throw new Error("Weather fetch failed");
  return res.json();
}

export async function getF1Matches() {
  const res = await fetch(`/api/tools/getF1Matches`);
  if (!res.ok) throw new Error("F1 fetch failed");
  return res.json();
}

export async function getStockPrice(symbol: string) {
  const res = await fetch(`/api/tools/getStockPrice?symbol=${encodeURIComponent(symbol)}`);
  if (!res.ok) throw new Error("Stock fetch failed");
  return res.json();
}
