import { connectMongo } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  await connectMongo();
  return NextResponse.json(body);
}
