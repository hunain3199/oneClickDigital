import { connectMongo } from "@/app/lib/mongodb";
import { User } from "@/app/models/User";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/route";

export async function PUT(req) {
  try {
    await connectMongo();
    const data = await req.json();
    const session = await getServerSession(authOptions);

    const email = session.user.email;
    const user = await User.updateOne({ email }, data);
    // const user = await User.updateOne({ email }, data).select("_id").exec();
    return Response.json({ user });
  } catch (error) {
    console.log(error);
  }
}

export async function GET() {
  await connectMongo();
  const session = await getServerSession(authOptions);
  const email = session.user.email;
  const users = await User.findOne({email})
  return NextResponse.json(users);
}


