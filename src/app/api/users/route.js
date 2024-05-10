import { connectMongo } from "@/app/lib/mongodb";
import { User } from "@/app/models/User";
import { NextResponse } from 'next/server';

export async function GET(req, res) {
  try {
    console.log("Mongo Connecting...");
    await connectMongo();
    console.log("Mongo Connected");
    const user = await User.find();
    return NextResponse.json(user);

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error fetching users" },
      { status: 500 }
    );
  }
}


