import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const location = searchParams.get("location");
  if (!location) return NextResponse.json({ error: "Missing location" }, { status: 400 });

  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`;
  const res = await fetch(url);
  if (!res.ok) return NextResponse.json({ error: "Weather API error" }, { status: 500 });
  const data = await res.json();
  return NextResponse.json({
    location: data.name,
    temp: data.main.temp,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
  });
}
