"use server";

import { connectMongo } from "@/app/lib/mongodb";
import { User } from "@/app/models/User";
import { nanoid } from "nanoid";
import nodemailer from "nodemailer";
import toast from "react-hot-toast";

export async function mailAction({ email }) {
  await connectMongo();
  const result = await User.findOne({ email: email });
  if (result) {
    const token = nanoid(32);

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hassankhan108017@gmail.com",
        pass: "mzsytznmmruckbkd",
        // mzsy tznm mruc kbkd
      },
    });


    // create-Link
    const htmlBody = `Click here to <a href="http://localhost:3000/forgot-password/${token}">Reset Password</a>`;
    const info = await transport.sendMail({
      to: email, // list of receivers
      subject: "Reset Password ", // Subject line
      html: htmlBody, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // console.log("Token :", token);

    // Save-Token-MongoDB
    await User.findOneAndUpdate({ email: email }, { verifyToken: token });
  } else {
    toast.error("Error");

    console.log("User Doesn't Exists");
  }
}
