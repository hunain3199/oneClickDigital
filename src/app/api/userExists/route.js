import { connectMongo } from "@/app/lib/mongodb";
import { User } from "@/app/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();
    await connectMongo();

    const user = await User.findOne({ email }).select("_id").exec();

    return NextResponse.json({ user });
  } catch (error) {
    console.error(error);
    return NextResponse.error("Internal my Server Error", 500);
  }
}
