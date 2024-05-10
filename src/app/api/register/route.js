import { connectMongo } from "@/app/lib/mongodb";
import { User } from "@/app/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log(req.body);
  const data = await req.json();
  await connectMongo();

  try {
    const createdUser = await User.create({
      name: data.name,
      email: data.email,
      password: data.password,
      // tel: data.tel,
      // address: data.address,
      // postal: data.postal,
      // city: data.city,
      // country: data.country,
      // verifyToken: data.verifyToken,
      admin: data.admin || false // Default to false if admin field is not provided
    });

    return NextResponse.json(createdUser);
  } catch (error) {
    console.error(error);
    return NextResponse.error(error.message || "An error occurred while creating the user.");
  }
}
