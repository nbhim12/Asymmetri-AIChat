import { NextResponse } from "next/server";

export async function GET() {
  const url = "https://ergast.com/api/f1/current/next.json";
  const res = await fetch(url);
  if (!res.ok) return NextResponse.json({ error: "F1 API error" }, { status: 500 });
  const data = await res.json();
  const race = data.MRData.RaceTable.Races[0];
  return NextResponse.json({
    raceName: race.raceName,
    circuit: race.Circuit.circuitName,
    date: race.date,
    time: race.time,
    location: `${race.Circuit.Location.locality}, ${race.Circuit.Location.country}`,
  });
}
